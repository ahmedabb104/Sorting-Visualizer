import React, { useEffect } from 'react';
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
						style={{height: `${val*5}px`,
								background: props.compareElements.includes(idx) ? 'gray' : 
											props.doneElements.includes(idx) ? 'black' : 'white',
								color: props.compareElements.includes(idx) ? 'black' : 
									   props.doneElements.includes(idx) ? 'white' :
									   'var(--violet)'}}>
						{val}
					</div>
				))}
			</div>
		</>
	)
}

export default Visualization
