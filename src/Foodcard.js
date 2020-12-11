import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles({
	title: {
		fontSize: '20px',
		color: 'rgb(177,210,53)',
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
	cardMediaPic: {
		height: '350px',
		borderRadius: '5px',
		// marginLeft: '15px' testing,
		backgroundSize: 'cover',
	},
	root: {
		margin: '30px',
		boxShadow: '5px 5px 5px 5px rgba(68,68,68, 0.2)',
	},
});

function Foodcard(props) {
	const classes = useStyles();
	const { title, description, imageUrl } = props;

	return (
		<Card variant='outlined' className={classes.root}>
			<CardMedia className={classes.cardMediaPic} image={imageUrl} title={title} />
			<CardHeader className={classes.title} title={title} />
			<CardContent>
				<Typography variant='body2' component='p'>
					{description}
				</Typography>
			</CardContent>
			<CardActions style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<IconButton>
					<AddBoxIcon fontSize='large' style={{ color: 'green' }} />
				</IconButton>
			</CardActions>
		</Card>
	);
}

export default Foodcard;
