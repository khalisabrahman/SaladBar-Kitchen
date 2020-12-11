import React from 'react'
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import donateBackgroundHero from './img/donateBackgroundHero.jpg'
import DonateMenu from './DonateMenu.js';



const useStyles = makeStyles((theme) => ({
	hero: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${donateBackgroundHero})`,
        height: '391px',
        marginBottom: '100px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'uppercase',
        [theme.breakpoints.up('xs')]: {
            height: '698px'
        }
    },
    heroFont: {
        fontFamily: "'Source Sans Pro', sans-serif",
        textTransform: 'uppercase',
        color: 'white',
        fontSize: '7rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem'
        }
    },
    pFont: {
        color: 'white',
    }
}));

function Donate() {
    const classes = useStyles();


    return (
        <>
            <Box className={classes.hero}>
                <Box className={classes.heroFont}>Make a difference</Box>
                <p className={classes.pFont}>Help support the less fortunate in our society</p>
            </Box>
            <DonateMenu />
        </>
    )
}

export default Donate;
