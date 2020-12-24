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
import photoArray from './constants/Photos';

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
		gridTemplateRows: '500px 500px 300px 300px',
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
	},
	photos: {
		display: 'flex',
		justifyContent: 'space-around'
	},
	container2: {
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
    }

	
}));

function Home(props) {
	const classes = useStyles();
	const { history } = props;
	const handleButtonClick = (pageURL) => {
		history.push(pageURL);
	};

	function photos(photoObject) {
		return (
			<Box className={classes.photo}>
				<Box className={classes.content} style={{backgroundImage: `url(${photoObject.image})`}}></Box>
			</Box>
		);
	}

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
					<p style={{fontSize: '70px', marginBottom: '16px', fontFamily: 'Khula'}}>Eat Socially</p>
					<p style={{fontFamily: 'Khula', fontSize: '28px', color: '#F36C21', marginTop: '8px'}}>Follow us<span><a href='/' style={{textDecoration: 'none', color: '#00BDD0'}}> @SaladBar</a></span></p>
					
				</Box>
				
			</div>
			<Box className={classes.container2}>
				{photoArray.map((photo) => photos(photo))}
			</Box>
		</div>
	);
}

export default withRouter(Home);
