import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


// const theme = createMuiTheme({
//   breakpoints: {
//     values: {
//       xs: 769,
//       sm: 896,
//       md: 992,
//       lg: 1252,
//       xl: 1300,
//     },
//   },
// })
ReactDOM.render(
	<BrowserRouter>
		{/* <ThemeProvider > */}
			<App />
		{/* </ThemeProvider> */}
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
