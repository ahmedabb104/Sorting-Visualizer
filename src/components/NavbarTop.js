import React from 'react';
import './NavbarTop.css';
import { MdAssessment } from 'react-icons/md';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';


const NavbarTop = (props) => {
	  
	const disabled = props.disabled

	function valuetext(value) {
		props.setSpeed(value)
		return `${value}`;
	}  

	return (
		<div id='navTop'>
			<div className='item-container'>
				<MdAssessment className='icon'/>
				<h1>Sorting Visualizer</h1>
			</div>
			<div id='slider-container' className={`${disabled ? 'disabled' : ''}`}>
				<Typography id="discrete-slider" gutterBottom>
					Speed
				</Typography>
				<Slider
					defaultValue={80}
					getAriaValueText={valuetext}
					aria-labelledby="discrete-slider"
					valueLabelDisplay="auto"
					step={10}
					marks
					min={10}
					max={110}
					style={{color: 'var(--violet)'}}
				/>
			</div>
		</div>
	)
}

export default NavbarTop
