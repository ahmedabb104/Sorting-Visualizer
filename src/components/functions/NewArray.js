// Generates a random array of length 20
export const newArray = () => {
	let newArr = [];
		for (let i = 0; i < 20; i++) {
			newArr.push(Math.floor(Math.random() * (50 - 5 + 1)) + 5);
		}
	return newArr
}