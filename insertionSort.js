const arr = [3, 21, 4, 432, 123, 13, 10, 11]
const arr2 = [1,2,3,4,5,6,7,8,9,10]


const insertionSort = (nums = []) => {
    console.time('start')
    for (let i = 1; i < nums.length; i++) {
        let numberToInsert = nums[i]
        let j
    
        for (j = i-1; nums[j] > numberToInsert && j >= 0; j--) {
            nums[j + 1] = nums[j]
        }
        nums[j + 1] = numberToInsert
    }

    console.timeEnd('start')
    return nums
}

console.log(insertionSort(arr))
console.log(insertionSort(arr2))

