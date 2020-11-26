import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
  },

  message: {
    borderRadius: '20px',
    boxShadow: "0px 2px 5px 0.5px #E3E3E3",
    maxWidth: '45%',
    margin: '0.5rem 0.5rem 0.5rem 0.5rem'
  },

  text: {
    padding: '10px',
  },

  sentContainer: {
    backgroundColor: '#0EE290',
    textAlign: 'right'
  },
  
  sentText: {
    color: 'white'
  },

  receivedContainer: {
    backgroundColor: '#EFEFEF',
    textAlign: 'left'
  },

  receivedText: {
    color: 'black'
  }

}));


export default function Message(props) {

  const classes = useStyles();

  // console.log('props', props);
  console.log('this is the user in the message component', props.sender_id);

  return(
    props.user === props.userID || props.sender_id === props.userID ? (
      <div className={classes.root} style={{justifyContent: 'flex-end'}}>
        <div className={`${classes.message} ${classes.sentContainer}`}>
          <p className={`${classes.sentText} ${classes.text}`}>{props.text}</p>
        </div>
      </div>
    ) : 
    (
    <div className={classes.root}>
      <div className={`${classes.message} ${classes.receivedContainer}`}>
        <p className={`${classes.receivedText} ${classes.text}`}>{props.text}</p>
      </div>
    </div>
    )
    
  )

}