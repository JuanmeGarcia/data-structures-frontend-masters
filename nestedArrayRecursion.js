const arr = [1,2,3,4,5,6]
const arr2 = [1,2,3,[3,4,5,8],44,1,2]
const arr3 = [1,2,3,[3,4,5,8],44,1,2,[[[[5]]]]]



const sumArray = (array = []) => {
    let sum = 0
    for(let i = 0; i < array.length; i++){
        const current = array[i]
        if(Array.isArray(current)){
            sum += sumArray(current)
        }else{
            sum += current
        }

    }
    return sum
}   

console.log(sumArray(arr2))
console.log(sumArray(arr3))
