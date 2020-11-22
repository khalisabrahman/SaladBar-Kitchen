import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';



const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2))"
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      
      <AppBar position="fixed"  className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" >
            <FacebookIcon />
          </IconButton>
          <IconButton edge="start" color="inherit" >
            <TwitterIcon />
          </IconButton>
          <IconButton edge="start" color="inherit" >
            <InstagramIcon />
          </IconButton>
          
          
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
