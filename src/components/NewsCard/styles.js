import {makeStyles} from '@material-ui/styles';

export default makeStyles({
     media:{
         height:250,
     },
     border:{
         border:'solid',
     },
     fullHeightCard:{
         height: '100%',
     },
     card:{
         display:'flex',
         flexDirection:'column',
         justifyContent: 'center',
         borderBottom: '10px solid white',
     },
     activeCard:{
         borderBottom: '15px solid yellow',
     },
     grid:{
         display:'flex',
     },
     details:{
          display:'flex',
          justifyContent: 'space-between',
          margin:'20px'
     },
     title:{
         padding:'0 16px',
     },
     cardActions:{
         padding:'0 16px 8px 16px',
         display:'flex',
         justifyContent: 'space-between',
     },
});