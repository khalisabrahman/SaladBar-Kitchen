import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from '@material-ui/core';
import Header from './Header';
import Content from './Content';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import classNames from 'classname';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	navContainer: (props) => {
		return {
			backgroundColor: '#f7f7f7 ',

			[theme.breakpoints.up('xs')]: {
				height: '70px',
			},
			[theme.breakpoints.up('sm')]: {
				height: '150.156px',
			},
			[theme.breakpoints.up('md')]: {
				height: '124.781px',
			},
			[theme.breakpoints.up('lg')]: {
				height: '108.781px',
			},
			[theme.breakpoints.up('xl')]: {
				height: '73px',
			},
		};
	},
	menuButtonStyle: {
		color: '#B2D235',
		cursor: 'pointer',
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			pointerEvents: 'none',
		},
	},
	typoGraphyStyles: {
		fontSize: '2rem',
	},
	buttonStyle: {
		display: 'flex',
		justifyContent: 'flex-end',
		margin: 0,
		flexGrow: 1,
		'& a': {
			textDecoration: 'none',
			color: 'black',
			fontWeight: 'bold',
		},
    },
    containerLogo: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignContent: 'center'
    },
    logoTypo: {
        alignItems: 'center',
        color: 'black'
    }
}));

function Navbar2() {
	const classes = useStyles();

	return (
		<AppBar position='static'>
			<Toolbar className={classes.navContainer}>
				<Container className={classes.containerLogo}>
					<EmojiFoodBeverageIcon
						fontSize='large'
						style={{ color: 'rgba(250, 145, 46, 1)' }}
					/>
					<Typography className={classes.logoTypo}>Salad Bar & Kitchen</Typography>
				</Container>

				<Container className={classes.buttonStyle}>
					<Button>
						<NavLink exact activeClassName={classes.navlinks} to='/location'>
							Location
						</NavLink>
					</Button>
					<Button>
						<NavLink
							exact
							activeClassName={classNames(classes.navlinks, classes.navlinks2)}
							to='/story'
						>
							Story
						</NavLink>
					</Button>
					<Button>
						<NavLink exact activeClassName={classes.navlinks} to='/menu'>
							Menu
						</NavLink>
					</Button>
					<Button>
						<NavLink exact activeClassName={classes.navlinks} to='/donate'>
							Donate
						</NavLink>
					</Button>
					<Button>
						<NavLink exact activeClassName={classes.navlinks} to='/reward'>
							Reward
						</NavLink>
					</Button>
				</Container>

				<MenuIcon className={classes.menuButtonStyle} fontSize='large' />
			</Toolbar>
		</AppBar>
	);
}

export default Navbar2;

// return (
// 	<Grid container direction='column'>
// 		<Grid item>
//             <Header />
//         </Grid>
// 		<Grid item container>
// 			<Grid xs={0} sm={2}/>
// 			<Grid xs={12} sm={8}>
//                 {/* <Content /> */}
//             </Grid>
// 			<Grid xs={0} sm={2}/>
// 		</Grid>
// 	</Grid>
// );
