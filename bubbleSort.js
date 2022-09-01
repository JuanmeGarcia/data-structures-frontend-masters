// needSwap = false

// array.forEach((number, index, arr)=>{
//     if(number > arr[index+1]){
//         let tempVariable = arr[index]
//         number = arr[index+1]
//         arr[index+1] = tempVariable
//         needSwap = true
//     }
// })

const array = [3, 21, 4, 432, 123, 13, 10, 11]
const array2 = [1,2,3,4,5,6,7,8,9,10]

const bubbleSort = (array = []) => {
    let swapped = true
    const copiedArray = [...array]
    console.time('start')
    
    while(swapped){
        swapped = false
        for(let i = 0; i < copiedArray.length - 1; i++){
            if (copiedArray[i] > copiedArray[i + 1]) {
                const temp = copiedArray[i];
                copiedArray[i] = copiedArray[i + 1];
                copiedArray[i + 1] = temp;
                swapped = true;
            }
        }
    }
    console.timeEnd('start')
    return (copiedArray)
}

console.log(bubbleSort(array))

console.log(bubbleSort(array2))
