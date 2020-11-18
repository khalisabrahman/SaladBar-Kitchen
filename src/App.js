import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from './Home';
import Location from './Location';
import Story from './Story';
import Menu from './Menu';
import Donate from './Donate';
import Reward from './Reward';
import { Route, Switch } from 'react-router-dom';

const font = "'Work Sans', sans-serif";
const theme = createMuiTheme({
	typography: {
		fontFamily: font,
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 769,
			md: 896,
			lg: 992,
			xl: 1202,
		},
	},
});

class App extends Component {
	render() {
		return (
			<Fragment>
				<ThemeProvider theme={theme}>
					<Navbar />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/location' component={Location} />
						<Route exact path='/story' component={Story} />
						<Route exact path='/menu' component={Menu} />
						<Route exact path='/donate' component={Donate} />
						<Route exact path='/reward' component={Reward} />
					</Switch>
				</ThemeProvider>
			</Fragment>
		);
	}
}

export default App;
