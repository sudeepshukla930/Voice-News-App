import React,{useState,useEffect,createRef} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles.js';
import classNames from 'classnames';

const NewsCard = ({article: { description, publishedAt, source, title, url, urlToImage}, i , activeArticle}) => {
    const classes = useStyles();
    const [elRefs , setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0,ref.current.offsetTop-50);

    useEffect(()=>{
          setElRefs((refs)=> Array(20).fill().map((_,j)=> refs[j] || createRef()))
    },[]);

    useEffect(()=>{
        if(i=== activeArticle && elRefs[activeArticle]){
            scrollToRef(elRefs[activeArticle]);
        }
    }, [i, activeArticle , elRefs]);
    
    return (
        <Card ref={elRefs[i]} className={classNames(classes.card , activeArticle === i ? classes.activeCard : null)}>
            <CardActionArea href={url} target="_blank">
                 <CardMedia className={classes.media} image={urlToImage || 'https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg'}/>
                 <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>

                 </div>
                  <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                  
                  <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                  </CardContent>

            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" >Learn More</Button>
                <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
            </CardActions>

        </Card>
    )
}

export default NewsCard
