// Generates a random array of length 20
export const newArray = () => {
	let newArr = [];
		for (let i = 0; i < 20; i++) {
			newArr.push(Math.floor(Math.random() * (50 - 5 + 1)) + 5);
		}
	return newArr
}

// ---------------- BUBBLE SORT FUNCTIONS ----------------

export const bubbleSort = (array, setState, setDisabled) => {
	let newArr = [...array];
	for (var i = 0; i < newArr.length; i++) {
		for (let j = 0; j < newArr.length - i - 1; j++) {
			setTimeout(() => {
				compareColors(j, j+1) 
			}, 1000*(i+1))
			setTimeout(() => { 
					newArr = swapValues(newArr, j, j+1);
					setState(newArr);
					resetColors(j, j+1);
			}, 1000*(i+1)+500)
		}
	}
	setTimeout(() => {
		setDisabled(false)
	}, 19000)
}

// Adds colour to the bars being compared
const compareColors = (num1, num2) => {
	document.getElementById(num1).style.background = 'black'
	document.getElementById(num2).style.background = 'black'
	document.getElementById(num1).style.color = 'white'	
	document.getElementById(num2).style.color = 'white'	
}

// Resets the colours when done comparing
const resetColors = (num1, num2) => {
	document.getElementById(num1).style.background = 'white'
	document.getElementById(num2).style.background = 'white'
	document.getElementById(num1).style.color = 'var(--violet)'	
	document.getElementById(num2).style.color = 'var(--violet)'
}

// Swaps the values in bubble sort fashion
const swapValues = (arr, num1, num2) => {
	let newArr = [...arr]
	if (newArr[num1] > newArr[num2]){
		let temp = newArr[num1];
		newArr[num1] = newArr[num2];
		newArr[num2] = temp;
	}
	return newArr;
}