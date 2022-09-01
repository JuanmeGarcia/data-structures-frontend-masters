

class ArrayList {
    constructor(){
        this.data = {}
        this.length = 0
    }

    length(){
        return this.length
    }
    push(value){
        //add an item to the end of the array
        this.data[this.length] = value
        this.length++
    }
    pop(){
        //remove the last item of the array and returns it
        const auxVariable = this.data[this.length - 1] 
        delete this.data[this.length - 1] 
        this.length--
        return auxVariable
    }
    get(index){
        //returns that item from the array

        return this.data[index]
    }
    delete(index){
        const auxVariable = this.data[index]
        delete this.data[index]

        for(let i = index + 1; i < this.length - 1; i++){
            const tempVariable = this.data[i]
            this.data[index - 1] = tempVariable
        }
        //remove the item in index and returns it
        this.length--
        return auxVariable
    }
}