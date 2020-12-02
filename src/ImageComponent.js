import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
		flexDirection: 'column',
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
		color: '#FFFFFF',
		fontSize: '5rem',

		[theme.breakpoints.down('sm')]: {
			fontSize: '3rem',
		},
	},
	heroFontSmall: {
		fontFamily: "'Source Sans Pro', sans-serif",
		textAlign: 'center',
		color: '#FFFFFF',
		fontSize: '1rem',
        padding: '50px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1rem',
		},
	},
    orderButtonContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
	orderButton: {
		backgroundColor: '#00BDD0',
		borderRadius: '100px',
		color: '#FFF',
		'&:hover': {
			backgroundColor: '#B2D235',
			color: '#FFF',
		},
	},
}));

function ImageComponent({ src }) {
	const classes = useStyles();
	return (
		<>
			<Box style={{ backgroundImage: `url(${src})` }} className={classes.hero}>
				<Box>
					<h1 className={classes.heroFont}>DELICIOUS FOR EVERY BODY</h1>
					<p className={classes.heroFontSmall}>
						Get free delivery for first time customers for a limited time only
					</p>
					<div className={classes.orderButtonContainer}>
						<Button className={classes.orderButton}>ORDER NOW</Button>
					</div>
				</Box>
			</Box>
		</>
	);
}

export default ImageComponent;
