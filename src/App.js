import React,{useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';
import logo from './images/logp(1).gif';
import wordsToNumbers from 'words-to-numbers';

const App = () => {

  const [newsArticles , setNewsArticles] = useState([]);
  const [activeArticle , setActiveArticle] = useState(-1);
  const classes = useStyles();
  
  useEffect(() => {
    alanBtn({
        key: '2f07803b70862d70b79000dcc80a2fb12e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand:({command,articles,number})=>{
          if(command === 'newHeadlines'){
               setNewsArticles(articles);
               setActiveArticle(-1);
          }
          else if(command === 'highlight'){
              setActiveArticle((prevActiveArticle)=> prevActiveArticle + 1);
          }
          else if(command === 'open'){
             const parsedNumber = number.length > 2 ? wordsToNumbers(number , {fuzzy:true}) : number;
             const article = articles[parsedNumber-1];
             if(parsedNumber > 20){
                 alanBtn().playText('Please Try Again')
             }
             else if(article){
               window.open(article.url , '_blank');
               alanBtn().playText('Opening...');
             }
          }
       }
    });
  }, []);
   
  return (
    <div className={classes.main} >
      <div className="classes.logoContainer">
        <img src={logo} className={classes.alanLogo} alt="Logo" />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
}



export default App;
