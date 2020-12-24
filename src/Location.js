import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import photoArray from './constants/Photos';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'grid',
		gridTemplateColumns: 'repeat(5, minmax(115px, 1fr))',
		gridGap: '1rem',
		[theme.breakpoints.down('md')]: {
			gridTemplateColumns: 'repeat(2, minmax(115px, 1fr))',
		},
	},
	photo: {
		maxWidth: '300px',
		margin: '16px',
        position: 'relative',

		'&:after': {
			content: "''",
			display: 'block',
			paddingTop: '100%',
			backgroundColor: 'blue',
		},
    },
    content: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
}));

function Location() {
	const classes = useStyles();

	function photos(photoObject) {
		return (
			<Box className={classes.photo}>
				<Box className={classes.content} style={{backgroundImage: `url(${photoObject.image})`}}></Box>
			</Box>
		);
	}

	return (
		<div>
			<h1>Location </h1>
			<Box className={classes.container}>
				{photoArray.map((photo) => photos(photo))}
			</Box>
		</div>
	);
}

export default Location;
