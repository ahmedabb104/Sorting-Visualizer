import React, { useState, useEffect } from 'react';
import * as buttonFunction from './ButtonFunctions';
import './NavbarBot.css';

const NavbarBot = (props) => {

	// const [count, setCount] = useState(1)
	// let globalCount = 1

	const bubbleSort = (array, setState) => {
		let newArr = [...array];
		for (var i = 0; i < newArr.length; i++) {
			// setTimeout(() => globalCount += 1, 1000*(i+1))
			for (let j = 0; j < newArr.length - i - 1; j++) {
				setTimeout(() => {
					buttonFunction.compareColors(j, j+1) 
				}, 1000*(i+1))
				setTimeout(() => {
					newArr = buttonFunction.swapValues(newArr, j, j+1);
					setState(newArr);
				}, 1000*(i+1)+500)
				setTimeout(() => {
					buttonFunction.resetColors(j, j+1)
				}, 1000*(i+1)+500)
			}
		}
	}

	// useEffect(() => {
	// 	const timeout = setTimeout(() => {
	// 		setCount(count+1)
	// 	}, 1000*globalCount);
	// 	return () => clearTimeout(timeout)
	// }, [count])

	return (
		<>
			<ul id='navBot'>
				<div id='newArray'>
					<li onClick={() => props.setArray(buttonFunction.newArray())}>New Array</li>
				</div>
				<div id='sortingButtons'>
					<li onClick={() => bubbleSort(props.array, props.setArray)}>
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
