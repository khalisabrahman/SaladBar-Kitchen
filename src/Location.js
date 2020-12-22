import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, minmax(115px, 1fr))',
        gridGap: '1rem'
    },
    photo: {
        maxWidth: '300px',
        borderStyle: 'solid',
        margin: '16px',
        backgroundColor: 'pink',
        '&:after': {
            content: "''",
            display: 'block',
            paddingTop: '100%',
            backgroundColor: 'blue'
        }
    }

    
})

function Location() {
    const classes = useStyles();
    const array1 = [1, 2, 3, 4, 5,6,7,8,9,10];
    const a = true;

    function photos(photoObject) {
        return (
            <Box className={classes.photo}>
                
            </Box>
        )
    }

	return (
		<div>
			<h1 >Location </h1>
			<Box className={classes.container}>
				{a && array1.map((photo) => photos(photo))}
			</Box>
            
		</div>
	);
}

export default Location;
