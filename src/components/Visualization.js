import React, { useEffect } from 'react';
import { newArray } from './functions/NewArray';
import './Visualization.css'

const Visualization = (props) => {

	// Resets the array whenever the page refreshes
	useEffect(() => {
		props.setArray(newArray())
	}, [])

	return (
		<>
			<div id='arrayContainer'>
				{props.array.map((val, idx) => (
					<div 
						className={`arrayBar 
								   ${props.compareElements.includes(idx) ? 
								   'compareBar' : props.doneElements.includes(idx) ? 'doneBar' : ''}`}
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
