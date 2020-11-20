import React from 'react';
import Foodcard from './Foodcard';
import { Grid } from '@material-ui/core';
import MenuList from './constants/SaladsAndWrapsList';

function SaladAndWrap() {
	const getMenuDishCard = (menuObj) => {
		return (
			<Grid item xs={12} sm={4}>
				<Foodcard {...menuObj} />
			</Grid>
		);
	};

	return (
		<Grid container>
			<Grid item xs={0} sm={1} />
			<Grid item container xs={12} sm={10} >
				{MenuList.map((menuObj) => getMenuDishCard(menuObj))}
			</Grid>
			<Grid item xs={0} sm={1} />
		</Grid>
	);
}

export default SaladAndWrap;
