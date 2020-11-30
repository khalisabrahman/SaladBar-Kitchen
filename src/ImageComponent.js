import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	// imgStyles: {
	// 	width: '100%',
	// 	height: 'auto',
	// },
	hero: {
		// backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${menuBackgroundHero})`,
		// height: '391px',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textTransform: 'uppercase',
		[theme.breakpoints.up('xs')]: {
			height: '698px',
		},
    },
    heroFont: {
        fontFamily: "'Source Sans Pro', sans-serif",
        textTransform: 'uppercase',
        textAlign: 'center',
        color: 'black',
        fontSize: '7rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem'
        }
    },
}));

function ImageComponent({ src }) {
	const classes = useStyles();
	return (
		<>
			<Box style={{backgroundImage: `url(${src})`}} className={classes.hero}>
				<Box className={classes.heroFont}>Delicious for every body</Box>
			</Box>
		</>
	);
}

export default ImageComponent;
