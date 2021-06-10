import React, { useState, useEffect } from 'react';
import * as buttonFunction from './ButtonFunctions';
import './Visualization.css'

const Visualization = (props) => {

	// Resets the array whenever the page refreshes
	useEffect(() => {
		props.setArray(buttonFunction.newArray())
	}, [])

	return (
		<>
			<div id='arrayContainer'>
				{props.array.map((val, idx) => (
					<div 
						className='arrayBar'
						key={idx}
						id={idx}
						style={{height: `${val*5}px`}}>
						{val}
					</div>
				))}
			</div>
		</>
	)
}

export default Visualization
