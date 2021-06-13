import { newCompareColors, newSwapValues, unsetDisabled } from './generalFunctions';

// ---------------- SELECTION SORT FUNCTIONS ----------------

export const selectionSort = (arr, setCompareElements, setDoneElements, setState, setDisabled, doneElements, speed) => {
	let count = 100;
	let i, j = 0;
	let smallest;
	const newArr = [...arr];
	const sortedElements = [...doneElements];

	for (i = 0; i < newArr.length - 1; i++) {

		smallest = i;

		for (j =  i + 1; j < newArr.length; j++) {

			// Colour update
			newCompareColors([j], setCompareElements, setDoneElements, count, 'COMPARE');
			count += speed;

			if (newArr[j] < newArr[smallest]) {
				smallest = j;
				console.log(smallest)
				newCompareColors([...sortedElements, smallest], setCompareElements, setDoneElements, count, 'DONE');
				count += speed;
			}
			else {
				newCompareColors([], setCompareElements, setDoneElements, count, 'DEFAULT');
				count += speed
			}
		}

		newSwapValues(newArr, i, smallest, setState, count);
		count += speed
		sortedElements.push(i);
		newCompareColors(sortedElements, setCompareElements, setDoneElements, count, 'DONE');
		count += speed

	}

	for (let k = 0; k < newArr.length; k++) {
		sortedElements.push(k);
	}
	newCompareColors(sortedElements, setCompareElements, setDoneElements, count, 'DONE');
	count += 500;
	newCompareColors(sortedElements, setCompareElements, setDoneElements, count, 'RESET');
	newCompareColors([], setCompareElements, setDoneElements, count, 'DEFAULT');
	unsetDisabled(setDisabled, count)
	count += speed
}