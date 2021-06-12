import React, { useState } from 'react';
import { bubbleSort } from './functions/BubbleSort';
import { newArray } from './functions/NewArray';
import './NavbarBot.css';

const NavbarBot = (props) => {

	const SPEED = props.speed;
	const disabled = props.disabled;
	const setDisabled = props.setDisabled;

	return (
		<>
			<ul id='navBot'>
				<div id='newArray' className={`controls ${disabled ? 'disabled' : ''}`}>
					<li onClick={() => { props.setArray(newArray()) }}>
						New Array
					</li>
				</div>
				<div id='sortingButtons' className={`controls ${disabled ? 'disabled' : ''}`}>
					<li onClick={() => { bubbleSort(props.array, props.setCompareElements, props.setDoneElements, props.setArray, setDisabled, props.doneElements, SPEED); setDisabled(true) }}>
						Bubble
					</li>
					<li>
						Selection
					</li>
					<li>
						Insertion
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
