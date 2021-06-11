import React, { useState, useEffect } from 'react';
import * as buttonFunction from './ButtonFunctions';
import './NavbarBot.css';

const NavbarBot = (props) => {

	// Controls state of disabling the visualization controls
	const [disabled, setDisabled] = useState(false);

	return (
		<>
			<ul id='navBot'>
				<div id='newArray' className={`controls ${disabled ? 'disabled' : ''}`}>
					<li onClick={() => { props.setArray(buttonFunction.newArray()) }}>
						New Array
					</li>
				</div>
				<div id='sortingButtons' className={`controls ${disabled ? 'disabled' : ''}`}>
					<li onClick={() => { buttonFunction.bubbleSort(props.array, props.setArray, setDisabled); setDisabled(true)}}>
						Bubble
					</li>
					<li>
						Insertion
					</li>
					<li>
						Selection
					</li>
					<li>
						Quick
					</li>
				</div>
			</ul>
		</>
	)
}

export default NavbarBot
