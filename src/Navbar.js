import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withRouter } from 'react-router-dom';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import classNames from 'classname';

const useStyles = makeStyles((theme) => ({
	// root: {
	// 	justifyContent: 'space-between'
	// },
	menuButton: {
		color: '#B2D235',
	},
	logo: {
		display: 'flex',
		paddingLeft: '10px',
		cursor: 'pointer',
		[theme.breakpoints.up('sm')]: {
			height: '60px',
			alignItems: 'flex-end',
		},
	},
	title: {
		paddingLeft: '5px',
		color: '#444444',
		fontFamily: "'Alegreya Sans SC', sans-serif",
	},
	headerOptions: {
		display: 'flex',
		justifyContent: 'flex-end',
	},

	headerOption: {
		color: 'black',
		fontSize: '16px',
		'&:hover': {
			color: '#f36b21',
		},
		
	},
	blueButton: {
		backgroundColor: '#00BDD0',
		borderRadius: '100px',
		marginLeft: '6px',
		color: '#FFF',
		'&:hover': {
			backgroundColor: '#B2D235',
			color: '#FFF',
		},
		// [theme.breakpoints.up('sm')]: {
		// 	height: '50.156px',
		// },
	},
	navContainer: {
		backgroundColor: '#f7f7f7 ',
		[theme.breakpoints.up('xs')]: {
			padding: '5px',
			justifyContent: 'space-between',
			lineHeight: '24px',
		},
		[theme.breakpoints.up('sm')]: {
			height: '150.156px',
			flexDirection: 'column',
		},
		// [theme.breakpoints.up('md')]: {
		// 	height: '124.781px'
		// },
	},
}));

function Navbar(props) {
	const { history } = props;
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClick = (pageURL) => {
		history.push(pageURL);
		setAnchorEl(null);
	};

	const handleButtonClick = (pageURL) => {
		history.push(pageURL);
	};

	return (
		<AppBar position='static'>
			<Toolbar className={classes.navContainer}>
				<div className={classes.logo}>
					<EmojiFoodBeverageIcon
						fontSize='large'
						style={{ color: 'rgba(250, 145, 46, 1)' }}
					/>
					<Typography variant='h5' className={classes.title}>
						Salad Bar & Kitchen
					</Typography>
				</div>

				{isMobile ? (
					<>
						<IconButton
							edge='false'
							className={classes.menuButton}
							color='inherit'
							aria-label='menu'
							onClick={handleMenu}
						>
							<MenuIcon fontSize='large' />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={open}
							onClose={() => setAnchorEl(null)}
						>
							<MenuItem onClick={() => handleMenuClick('/location')}>
								LOCATIONS
							</MenuItem>
							<MenuItem onClick={() => handleMenuClick('/story')}>STORY</MenuItem>
							<MenuItem onClick={() => handleMenuClick('/menu')}>MENU</MenuItem>
							<MenuItem onClick={() => handleMenuClick('/rewards')}>REWARDS</MenuItem>
							<MenuItem onClick={() => handleMenuClick('/donate')}>DONATE</MenuItem>
						</Menu>
					</>
				) : (
					<div className={classes.headerOptions}>
						<Button
							className={classes.headerOption}
							onClick={() => handleButtonClick('/location')}
						>
							LOCATIONS
						</Button>
						<Button
							className={classes.headerOption}
							onClick={() => handleButtonClick('/menu')}
						>
							MENU
						</Button>
						<Button
							className={classes.headerOption}
							onClick={() => handleButtonClick('/story')}
						>
							STORY
						</Button>

						<Button
							className={classes.headerOption}
							onClick={() => handleButtonClick('/rewards')}
						>
							REWARDS
						</Button>
						<Button
							className={classes.headerOption}
							onClick={() => handleButtonClick('/donate')}
						>
							DONATE
						</Button>
						<Button
							className={classNames(classes.headerOption, classes.blueButton)}
							onClick={() => handleButtonClick('/menu')}
						>
							ORDER PICKUP & DELIVERY
						</Button>
					</div>
				)}
			</Toolbar>
		</AppBar>
	);
}

export default withRouter(Navbar);
