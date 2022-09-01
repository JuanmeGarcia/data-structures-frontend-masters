const data = [
    { id: 1, name: "Sam" },
    { id: 3, name: "Sarah" },
    { id: 5, name: "John" },
    { id: 6, name: "Burke" },
    { id: 10, name: "Simona" },
    { id: 12, name: "Asim" },
    { id: 13, name: "Niki" },
    { id: 15, name: "Aysegul" },
    { id: 17, name: "Kyle" },
    { id: 18, name: "Jem" },
    { id: 19, name: "Marc" },
    { id: 21, name: "Chris" },
    { id: 24, name: "Ben" }
]

const linearSearch = (id, items) => {

    for (const item of items) {
        if(item.id === id){
            return item
        }
    }

    return null
}


const binarySearch = (id, array) => {
    let min = 0
    let max = array.length - 1
    let index 
    let element 

    while(min <= max){
        index = Math.floor((min + max) / 2)
        element = array[index]

        if(element.id < id){
            min = index + 1
        }else if(element.id > id){
            max = index - 1
        }else{
            return element
        }
    }
    return void 0
}

const response = linearSearch(17, data)
const binary = binarySearch(12, data)

console.time('linearSeach')
console.log(response)
console.timeEnd('linearSeach')

console.time('xd')
console.log(response)
console.timeEnd('xd')


console.time('binarySearch')
console.log(binary)
console.timeEnd('binarySearch')

