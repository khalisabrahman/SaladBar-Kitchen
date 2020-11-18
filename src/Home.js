import React from 'react';
import Paper from '@material-ui/core/Paper';

function Home() {
	return (
		<>
			<Paper
				variant='outlined'
				square
				style={{ backgroundColor: 'red', height: '50%' }}
			>
				<h1>Home</h1>
			</Paper>
            <Paper style={{ backgroundColor: 'blue', height: '50%' }} >this paper follows the content's height</Paper>
		</>
	);
}

export default Home;
