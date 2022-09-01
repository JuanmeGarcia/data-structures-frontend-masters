

const getDigit = (number, place, longestNumber) => {
    const string = number.toString()
    const size = string.length

    const mod = longestNumber - size
    return string[place - mod] || 0
}

const getLongestNumber = (nums) => {
    let longest = 0

    for(let i = 0; i < nums.length; i++){
        const currentLength = nums[i].toString().length
        longest = currentLength > longest ? currentLength : longest
    }

    return longest
}


const radixSort = (nums) => {
    const longestNumber = getLongestNumber(nums)

    //create how many buckets you need
    //an array of 10 arrays

    const buckets = new Array(10)
        .fill()
        .map(() => [])
    
    for (let i = longestNumber - 1; i >= 0; i--) {
        while(nums.length){
            const current = nums.shift()
            buckets[getDigit(current, i, longestNumber)]
                .push(current)
        }

        for(let j = 0; j < 10; j++){
            while(buckets[j].length){
                nums.push(buckets[j].shift())
            }
        }
    }

    return nums
}


const arr = [3, 21, 4, 432, 123, 13, 10, 11]
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


console.time('arr1')
console.log(radixSort(arr))
console.timeEnd('arr1')

console.time('arr2')
console.log(radixSort(arr2))
console.timeEnd('arr2')


