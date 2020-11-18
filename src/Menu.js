import React from 'react'
import Foodcard from './Foodcard';
import { Tabs, Tab, Grid, Box } from '@material-ui/core';
import  Content from './Breakfast.js';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import menuBackgroundHero from './img/menuBackground.jpg'
import Breakfast from './Breakfast';
import SaladAndWrap from './SaladAndWrap';
import Desserts from './Desserts';
import BowlsAndBurritos from './BowlsAndBurritos';
import Shakes from './Shakes';


const useStyles = makeStyles((theme) => ({
	hero: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${menuBackgroundHero})`,
        height: '391px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
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
    menuTitle: {
        textAlign: 'center',
        color: '#0E2244 ',
        textTransform: 'uppercase',
        margin: '46px'
    }
}));

function Menu() {
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }

    return (
        <>
            <Box className={classes.hero}>
                <Box className={classes.heroFont}>Menu</Box>
            </Box>
            <Grid container direction='column'>
                <Tabs centered value={selectedTab} onChange={handleChange}>
                    <Tab label="Breakfast" />
                    <Tab label="Salads & Wraps" />
                    <Tab label="Desserts" />
                    <Tab label="Bowls & Burritos" />
                    <Tab label="Shakes" />
                </Tabs>
                {selectedTab === 0 && <Breakfast/> }
                {selectedTab === 1 && <SaladAndWrap/> }
                {selectedTab === 2 && <Desserts/> }
                {selectedTab === 3 && <BowlsAndBurritos/> }
                {selectedTab === 4 && <Shakes/> }
                
            </Grid>
        </>
    )
}

export default Menu
