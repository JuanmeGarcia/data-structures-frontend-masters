
const factorial = (number) => {
    if(number <= 0) return 0
    if (number === 1) return 1
    
    return number * factorial(number - 1)
}

const factorialLoop = (number) => {
    if (number === 1) return 1
    if(number <= 0) return 0
    
    let multiply = number
    for(let i = number - 1; i > 1; i--){
        multiply *= i
    }

    return multiply
}

console.log(factorialLoop(3))