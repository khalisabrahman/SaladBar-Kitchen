import React from 'react';
import Slider from './Slider';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import pattern from './img/pattern.jpg';
import eating from './img/womanEating.jpg';
import donate from './img/donate.jpg';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import classNames from 'classname';

const useStyles = makeStyles((theme) => ({
	// splitContainer: {
	// 	position: 'relative',
	// 	width: '100%',
	// 	height: '500px',
	// 	display: 'flex',
	// 	background: 'pink',
	// 	justifyContent: 'space-between',
	// },
	// box1: {
	// 	backgroundImage: `url(${pattern})`,
	// 	backgroundRepeat: 'no-repeat',
	// 	backgroundPosition: 'center',
	// 	backgroundSize: 'cover',
	// 	display: 'flex',
	// 	justifyContent: 'center',
	// 	alignItems: 'center',
	// },
	// innerBox1: {
	// 	backgroundColor: 'white',
	// 	height: '70%',
	// 	width: '70%',
	// 	display: 'flex',
	// 	justifyContent: 'center',
	// 	alignItems: 'center',
	// },
	// box2: {
	// 	backgroundImage: `url(${eating})`,
	// 	backgroundRepeat: 'no-repeat',
	// 	backgroundPosition: 'center',
	// 	backgroundSize: 'cover',
	// },
	container: {
		display: 'grid',
		height: '1300px',
		gridTemplateColumns: '40% auto',
		gridTemplateRows: '500px 500px 300px',
		// [theme.breakpoints.down('md')]: {
		// 	display: 'grid',
		// 	gridTemplateColumns: '1fr',
		// 	gridTemplateRows: '1fr 1fr',
		// },
	},
	itemA: {
		backgroundImage: `url(${pattern})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	smallbox: {
		margin: '20%',
		backgroundColor: 'white',
		textAlign: 'center',
		color: '#F36C21',
		fontWeight: '400',
		padding: '25px',
		textTransform: 'uppercase',
		fontFamily: 'Roboto',
		borderStyle: 'solid',
		borderWidth: '5px',
		borderColor: 'black'
	},
	itemB: {
		backgroundImage: `url(${eating})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
	},
	itemC: {
		backgroundImage: `url(${donate})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		gridArea: '2/1/3/3'
	},
	headerOption: {
		color: 'black',
		fontSize: '16px',
		'&:hover': {
			color: '#f36b21',
		},
		
	},
	greenButton: {
		backgroundColor: '#B2D235', 
		borderRadius: '100px',
		marginLeft: '6px',
		color: '#FFF',
		'&:hover': {
			backgroundColor: '#f36b21',
			color: '#FFF',
		},
		// [theme.breakpoints.up('sm')]: {
		// 	height: '50.156px',
		// },
	},
	row3: {
		textTransform: 'uppercase',
		textAlign: 'center',
		gridArea: '3/1/4/3'
	}
}));

function Home(props) {
	const classes = useStyles();
	const { history } = props;
	const handleButtonClick = (pageURL) => {
		history.push(pageURL);
	};

	return (
		<div>
			<Slider />

			<div className={classes.container}>
				<div className={classes.itemA}>
					<div className={classes.smallbox}>
						<h2>Hey East siders! We've opened a new outlet in the East!</h2>
						<Button
							className={classNames(classes.headerOption, classes.greenButton)}
							onClick={() => handleButtonClick('/location')}
						>
							VIEW LOCATIONS
						</Button>
					</div>
				</div>
				<div className={classes.itemB}></div>
				<div className={classes.itemC}></div>
				<Box className={classes.row3}>
					<p style={{fontSize: '70px', marginBottom: 0 }}>Eat Socially</p>
					<p>Follow us</p> 
					/* Insert link her */
				</Box>
			</div>
		</div>
	);
}

export default withRouter(Home);
