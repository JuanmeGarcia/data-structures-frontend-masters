const arr = [3, 21, 4, 432, 123, 13, 10, 11]
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const mergeSort = (nums = []) => {
	if (nums.length < 2) {
		return nums
	}
	//break into smaller array

	const lenght = nums.length
	const middle = Math.floor(lenght / 2)

	const left = nums.slice(0, middle)
	const right = nums.slice(middle)

	const sortedLeft = mergeSort(left)
	const sortedRight = mergeSort(right)

	//call mergesort on left and right
	return merge(mergeSort(sortedLeft), mergeSort(sortedRight))

}

const merge = (left, right) => {
	const results = []

	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			// shift removes the first element in an array and returns it
			// it's like .pop() for the front
			results.push(left.shift())
		} else {
			results.push(right.shift())
		}
	}

	return results.concat(left, right)
}


console.time('merge')
console.log(mergeSort(arr))
console.timeEnd('merge')

console.time('arr2')
console.log(mergeSort(arr2))
console.timeEnd('arr2')


console.time('arr1')
console.log(mergeSort(arr))
console.timeEnd('arr1')

console.time('arr3')
console.log(mergeSort(arr2))
console.timeEnd('arr3')

