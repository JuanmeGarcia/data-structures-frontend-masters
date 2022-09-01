const arr = [3, 21, 4, 432, 123, 13, 10, 11]
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const quickSort = (nums = []) => {
    
    if(nums.length <= 1){
        return nums
    }

    // const pivot = nums[nums.length - 1]
    const pivot = nums.pop()

    const left = []
    const right = []

    nums.forEach(item =>{
        if (pivot >= item) {
            left.push(item)
        } else {
            right.push(item)
        }
    })

    // for(let i = 0; i < nums.length - 1; i++){
    //     if(pivot >= nums[i]){
    //         left.push(nums[i])
    //     }else{
    //         right.push(nums[i])
    //     }
    // }
    
    // const sortedLeft = quickSort(left)
    // const sortedRight = quickSort(right)

    return [
        ...quickSort(left), 
        pivot, 
        ...quickSort(right)
    ]
}


console.time('arr2')
console.log(quickSort(arr2))
console.timeEnd('arr2')


console.time('arr1')
console.log(quickSort(arr))
console.timeEnd('arr1')

console.time('arr2')
console.log(quickSort(arr2))
console.timeEnd('arr2')



