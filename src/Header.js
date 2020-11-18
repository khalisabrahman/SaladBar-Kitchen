// import React from 'react';
// import { AppBar, Toolbar, Typography } from '@material-ui/core';
// import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import { NavLink } from 'react-router-dom';
// import classNames from 'classname';


// const useStyles = makeStyles(() => ({
// 	typoGraphyStyles: {
// 		flex: 1,
// 		color: 'black',
// 		margin: '10px',
// 		fontSize: '1.4rem',
// 		fontWeight: 'lighter',
// 	},
// 	backgroundStyle: {
//         backgroundColor: 'rgb(247,247,247)',
// 	},
// 	buttonStyle: {
//         '& a': {
//             textDecoration:'none',
//             color: 'black',
//             fontWeight: 'bold' 
// 		},
// 	},
// 	navlinks: {
// 		color: 'pink',
//     },
//     navlinks2: {
//         backgroundColor: 'red'
//     }
// }));

// const Header = () => {
// 	const classes = useStyles();
// 	return (
// 		<AppBar position='static'>
// 			<Toolbar className={classes.backgroundStyle}>
// 				<EmojiFoodBeverageIcon
// 					fontSize='large'
// 					style={{ color: 'rgba(250, 145, 46, 1)' }}
// 				/>
// 				<Typography className={classes.typoGraphyStyles}>
// 					Salad Bar & Kitchen
// 				</Typography>
// 				<Button className={classes.buttonStyle}>
// 					<NavLink exact activeClassName={classes.navlinks} to='/location'>
// 						Location
// 					</NavLink>
// 				</Button>
// 				<Button className={classes.buttonStyle}>
// 					<NavLink exact activeClassName={classNames(classes.navlinks, classes.navlinks2)} to='/story'>
// 						Story
// 					</NavLink>
// 				</Button>
// 				<Button className={classes.buttonStyle}>
// 					<NavLink exact activeClassName={classes.navlinks} to='/menu'>
// 						Menu
// 					</NavLink>
// 				</Button>
// 				<Button className={classes.buttonStyle}>
// 					<NavLink exact activeClassName={classes.navlinks} to='/donate'>
// 						Donate
// 					</NavLink>
// 				</Button>
// 				<Button className={classes.buttonStyle}>
// 					<NavLink exact activeClassName={classes.navlinks} to='/reward'>
// 						Reward
// 					</NavLink>
// 				</Button>
// 			</Toolbar>
// 		</AppBar>
// 	);
// };

// export default Header;
