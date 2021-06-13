// ---------------- FUNCTIONS USED IN ALL SORTING VISUALIZATIONS ----------------

export const newCompareColors = (elements, setCompareElements, setDoneElements, speed, action) => {
	switch(action) {
		case 'COMPARE':
			setTimeout(() => {
				setCompareElements([...elements]);
			}, speed);
			break;
		case 'DONE':
			const updatedDone = [...elements];
			setTimeout(() => {
				setDoneElements([...updatedDone]);
			}, speed)
			break;
		case 'RESET':
			setTimeout(() => {
				setDoneElements([]);
			}, speed)
			break;
		default:
			setTimeout(() => {
				setCompareElements([]);
			}, speed)
	}
}

export const newSwapValues = (arr, num1, num2, setState, speed) => {
	let temp = arr[num1];
	arr[num1] = arr[num2];
	arr[num2] = temp;
	let newArr = [...arr];
	console.log(newArr)
	setTimeout(() => {
		setState([...newArr]);
	}, speed)
}

export const unsetDisabled = (setDisabled, speed) => {
	setTimeout(() => {
		setDisabled(false)
	}, speed)
}