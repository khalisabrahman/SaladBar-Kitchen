import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import storyBackgroundHero from './img/storyBackgroundHero.jpg';
import DonateMenu from './DonateMenu.js';

const useStyles = makeStyles((theme) => ({
	hero: {
		backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${storyBackgroundHero})`,
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
			height: '698px',
		},
	},
	heroFont: {
		fontFamily: "'Source Sans Pro', sans-serif",
		textTransform: 'uppercase',
		color: 'white',
		fontSize: '7rem',
		[theme.breakpoints.down('sm')]: {
			fontSize: '3rem',
		},
	},
	pFont: {
		color: 'white',
	},
	title: {
		textTransform: 'uppercase',
		fontSize: '5rem',
		textAlign: 'center',
		color: 'rgb(14, 34, 68)',
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignContent: 'center',
	},
	p: {
		padding: '50px',
	},
}));

function Story() {
	const classes = useStyles();

	return (
		<>
			<Box className={classes.hero}>
				<Box className={classes.heroFont}>Story</Box>
			</Box>
			<Box className={classes.container}>
				<h1 className={classes.title}>We Changed the Game</h1>
				<p className={classes.p}>
					In 2009, we opened our doors at a very small Tampines storefront with a
					very big idea. Instead of fast food, we’d serve healthy fuel: food that
					were delicious, nutritious, and protein-packed.
					<br></br>
					<br></br>
					It was a success from the start but quickly became something even bigger...
					a game changer. We saw what was happening and got excited. Let’s keep
					going. So we expanded the menu to serve a full selection of high-protein
					salads, wraps, and bowls customizable for all diets. Every body loved it.
					The all-day power of protein grew in popularity. We all started eating,
					feeling and moving better. It’s all good.
					<br></br>
					<br></br>
					All these years and successes later, we never forget where we came from. We
					started a protein-powered movement from that small storefront. And we’re
					still going strong.
				</p>
			</Box>
		</>
	);
}

export default Story;
