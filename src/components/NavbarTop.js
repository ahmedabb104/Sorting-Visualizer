import React from 'react';
import './NavbarTop.css';
import { MdAssessment } from 'react-icons/md';

const NavbarTop = () => {
	return (
		<div id='navTop'>
			<div className='item-container'>
				<MdAssessment className='icon'/>
				<h1>Sorting Visualizer</h1>
			</div>
		</div>
	)
}

export default NavbarTop
