import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageComponent from './ImageComponent';
import sliderPic1 from './img/sliderPics/sliderPic1.jpg'

const useStyles = makeStyles((theme) => ({
	slider: {
		border: '1px solid red',
		position: 'relative',
		width: '100%',
		height: '545px',
		boxSizing: 'border-box',
		margin: 0,
		padding: 0,
		display: 'flex',
		alignItems: 'center',
	},
	slide: {
		border: '1px solid blue',
		minWidth: '100%',
        height: '100%',
        transition: '0.5s'
	},
	goLeft: {
		position: 'absolute',
		top: '50%',
		left: 0,
		transform: 'translateY(-50%)',
		width: '9%',
		height: '100%',
		background: 'none',
	},
	goRight: {
		position: 'absolute',
		top: '50%',
		right: 0,
		transform: 'translateY(-50%)',
		width: '9%',
		height: '100%',
		background: 'none',
	},
}));

function Slider() {
    let sliderArr = [<ImageComponent src={sliderPic1} />, 2, 3, 4, 5];
    const [x, setX] = useState(0);
    const buttonLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length -1)) : setX(x + 100)
    }

    const buttonRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100)
    }
	const classes = useStyles();
	
	return (
		<div className={classes.slider}>
			{sliderArr.map((item, index) => {
				return (
					<div key={index} className={classes.slide} style={{transform: `translate(${x}%)`}}>
						{item}
					</div>
				);
			})}
			<button className={classes.goLeft} onClick={buttonLeft}>
				Left
			</button>
			<button className={classes.goRight} onClick={buttonRight}>
				Right
			</button>
		</div>
	);
}

export default Slider;
