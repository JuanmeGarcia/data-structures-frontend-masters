

// console.time('start')
// const fibonacciRecursion = (number) => {
//     if(number === 1 || number === 2) { return 1 }

//     if(number === 0) { return 0 }

//     return fibonacciRecursion(number - 1) + fibonacciRecursion(number - 2)
// }

// // console.log(fibonacciRecursion(40))

// console.timeEnd('start')

console.time('start loop')

const fibonacciLoop = (number) => {
    const sequence = [0, 1]

    if(number === 0) { return 0 }

    if(number === 1 || number === 2) { return 1 }

    for(let i= 2; i < number + 1; i++){
        sequence.push(sequence[i-2] + sequence[i-1])
    }
    return sequence[number]
}

console.log(fibonacciLoop(2))

console.timeEnd('start loop')
