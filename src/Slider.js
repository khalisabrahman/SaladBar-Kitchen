import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageComponent from './ImageComponent';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import sliderPic4 from './img/sliderPics/sliderPic4.jpg';
import sliderPic7 from './img/sliderPics/sliderPic7.jpg';
import sliderPic6 from './img/sliderPics/sliderPic6.jpg';

const useStyles = makeStyles((theme) => ({
	slider: {
		position: 'relative',
		width: '100%',
		height: 'auto',
		boxSizing: 'border-box',
		margin: 0,
		padding: 0,
		display: 'flex',
        alignItems: 'flex-start',
        overflow: 'hidden',
        background: 'white'
	},
	slide: {
        position: 'relative',
		minWidth: '100%',
        height: '100%',
        transition: '0.5s',
        overflow: 'hidden'
	},
	goLeft: {
		position: 'absolute',
		top: '50%',
		left: 0,
        transform: 'translateY(-50%)',
        transition: '0.5s',
		width: '9%',
		height: '100%',
        background: 'none',
        border: 'none',
        outline: 'none',
        '&:hover': {
            background: 'rgba(0,0,0,0.356)',
            cursor: 'pointer',
            color: 'whitesmoke'
		}
	},
	goRight: {
		position: 'absolute',
		top: '50%',
		right: 0,
        transform: 'translateY(-50%)',
        transition: '0.5s',
		width: '9%',
		height: '100%',
        background: 'none',
        border: 'none',
        outline: 'none',
        '&:hover': {
            background: 'rgba(0,0,0,0.356)',
            cursor: 'pointer',
            color: 'whitesmoke'
		}
	},
	splitContainer: {
		position: 'relative',
		width: '100%',
		height: 'auto',
		boxSizing: 'border-box',
		margin: 0,
		padding: 0,
		display: 'flex',
        background: 'white'
	},
}));

function Slider() {
    let sliderArr = [<ImageComponent src={sliderPic7} />, <ImageComponent src={sliderPic4} />, <ImageComponent src={sliderPic6} />];
    const [x, setX] = useState(0);
    const buttonLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length -1)) : setX(x + 100)
    }

    const buttonRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100)
    }
	const classes = useStyles();
	
	return (
		<>
			<div className={classes.slider}>
				{sliderArr.map((item, index) => {
					return (
						<div key={index} className={classes.slide} style={{transform: `translate(${x}%)`}}>
							{item}
						</div>
					);
				})}
				<button className={classes.goLeft} onClick={buttonLeft}>
					<ChevronLeftIcon fontSize='large'/>
				</button>
				<button className={classes.goRight} onClick={buttonRight}>
					<ChevronRightIcon fontSize='large' />
				</button>
			</div>
			<div className={classes.splitContainer}>
				<h1>pic 1</h1>
				<h1>pic 2</h1>
			</div>
		</>
	);
}

export default Slider;
