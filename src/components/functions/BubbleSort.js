// ---------------- BUBBLE SORT FUNCTIONS ----------------

export const bubbleSort = (arr, setCompareElements, setDoneElements, setState, setDisabled, doneElements, speed) => {
	let count = 100;
	let swapped = false;
	let i, j = 0;
	const newArr = [...arr];
	const sortedElements = [...doneElements];

	for (i = 0; i < newArr.length - 1; i++) {
		swapped = false;
		for (j = 0; j < newArr.length - i - 1; j++) {
			newCompareColors([j, j+1], setCompareElements, setDoneElements, count, 'COMPARE');
			count += speed;
			if (newArr[j] > newArr[j+1]) {
				newSwapValues(newArr, j, j+1, setState, count);
				count += speed;
				swapped = true;
			}
			newCompareColors([], setCompareElements, setDoneElements, count, 'DEFAULT');
			count += speed;
		}
		sortedElements.push(newArr.length - i - 1);
		newCompareColors(sortedElements, setCompareElements, setDoneElements, count, 'DONE');
		count += speed;
		if (swapped === false) break;
	}
	for (let k = 0; k < newArr.length - i - 1; k++) {
		sortedElements.push(k);
	}
	newCompareColors(sortedElements, setCompareElements, setDoneElements, count, 'DONE');
	count += 500;
	newCompareColors(sortedElements, setCompareElements, setDoneElements, count, 'RESET');
	unsetDisabled(setDisabled, count);
	count += speed;
}

const newCompareColors = (elements, setCompareElements, setDoneElements, speed, action) => {
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

const newSwapValues = (arr, num1, num2, setState, speed) => {
	let temp = arr[num1];
	arr[num1] = arr[num2];
	arr[num2] = temp;
	let newArr = [...arr];
	setTimeout(() => {
		setState([...newArr]);
	}, speed)
}

const unsetDisabled = (setDisabled, speed) => {
	setTimeout(() => {
		setDisabled(false)
	}, speed)
}