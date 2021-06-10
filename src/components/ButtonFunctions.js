export const newArray = () => {
	let newArr = [];
		for (let i = 0; i < 20; i++) {
			newArr.push(Math.floor(Math.random() * (50 - 5 + 1)) + 5);
		}
	return newArr
}

// ---------------- BUBBLE SORT FUNCTIONS ----------------

// export const bubbleSort = (array) => {
// 	let newArr = [...array];
// 	for (let i = 0; i < newArr.length; i++) {
// 		for (let j = 0; j < newArr.length - i - 1; j++) {
// 			setTimeout(() => compareColors(j, j+1), j*500)
// 			setTimeout(() => newArr = swapValues(newArr, j, j+1), j*100)
// 		}
// 	}
// 	return newArr
// }

export const compareColors = (num1, num2) => {
	document.getElementById(num1).style.background = 'black'
	document.getElementById(num2).style.background = 'black'
	document.getElementById(num1).style.color = 'white'	
	document.getElementById(num2).style.color = 'white'	
}

export const resetColors = (num1, num2) => {
	document.getElementById(num1).style.background = 'white'
	document.getElementById(num2).style.background = 'white'
	document.getElementById(num1).style.color = 'var(--violet)'	
	document.getElementById(num2).style.color = 'var(--violet)'
}

export const swapValues = (arr, num1, num2) => {
	let newArr = [...arr]
	if (newArr[num1] > newArr[num2]){
		let temp = newArr[num1];
		newArr[num1] = newArr[num2];
		newArr[num2] = temp;
	}
	return newArr;
}

export const singleIteration = (array, setState, num1, num2, spd) => {
	setTimeout(() => compareColors(num1, num2), 1000*spd);
	setTimeout(() => setState(swapValues(array, num1, num2)), 2000*spd)
	setTimeout(() => resetColors(num1, num2), 2500*spd)
} 