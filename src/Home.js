import React from 'react';
import Slider from './Slider';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
	splitContainer: {
		position: 'relative',
		width: '100%',
		height: '500px',
		display: 'flex',
		background: 'pink',
		justifyContent: 'space-between'
		
	},
	box1: {
		background: 'red'
	},
	box2: {
		background: 'purple'
	}
})

function Home() {
	const classes = useStyles();
	return (
		<div>
			<Slider/>
			<Box className={classes.splitContainer}>
				<Box className={classes.box1}></Box>
				<Box className={classes.box2}></Box>
			</Box>
		</div>
	);
}

export default Home;
