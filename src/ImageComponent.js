import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    imgStyles: {
        width: '100%',
        height: 'auto'
    }
}))

function ImageComponent({ src }) {
    const classes = useStyles();
    return (
        <img src={src} alt='slide-img' className={classes.imgStyles}></img>
    )
}

export default ImageComponent
