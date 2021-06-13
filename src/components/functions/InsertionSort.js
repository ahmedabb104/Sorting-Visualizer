import { newCompareColors, newSwapValues, unsetDisabled } from './BubbleSort'

// ---------------- INSERTION SORT FUNCTIONS ----------------

export const insertionSort = (arr, setCompareElements, setDoneElements, setState, setDisabled, doneElements, speed) => {
	let count = 100;
	let i = 1;
	let j;
	let key;
	const newArr = [...arr];
	const sortedElements = [...doneElements];

	for (i = 1; i < newArr.length; i++) {

		// Sorted items colour update
		sortedElements.push(i-1)
		newCompareColors(sortedElements, setCompareElements, setDoneElements, count, 'DONE')
		count += speed

		j = i - 1;
		key = newArr[i]

		while(j >= 0 && newArr[j] > key) {
			newCompareColors([j+1], setCompareElements, setDoneElements, count, 'COMPARE');
			count += speed;
			newSwapValues(newArr, j, j+1, setState, count);
			j--
		}
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