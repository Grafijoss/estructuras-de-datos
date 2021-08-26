class myArray {

    constructor () {
        this.length = 0
        this.data = {}
    }

    push(data) { // adds element to the last positionb
        this.data[this.length] = data
        this.length++
        return this.data[this.length - 1]
    }

    pop() { // removes the last element
        const itemRemoved = this.data[this.length - 1]

        delete this.data[this.length - 1]
        this.length--

        return itemRemoved
    }

    delete(index) { // removes element
        const itemRemoved = this.data[index]
        this.shiftIndex(index)

        return itemRemoved
    }

    shiftIndex(index) { // reordena los elementos de arriba a abajo
        for(let i = index; i < this.length -1; i++){
            this.data[i] = this.data[i + 1]
        }

        delete this.data[this.length -1]
        this.length--
    }

    shift() {
        return this.delete(0)
    }

    unshift(data) { // añade elemento al inicio

        // reordena los elementos de abajo a arriba
        for(let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1]
        }

        this.length++
        this.data[0] = data

        return this.data[0]
    }





    // push
    // get
    // pop removes the last element
    // delete
    // shiftIndex reordena los elementos
    // shift removes the first element
    //  unshift one or more elements to the beginning

}

const arrayTest = new myArray()
console.log(arrayTest.push('July'))
arrayTest.push('Juan')
arrayTest.push('Jose')
arrayTest.push('Jorge')
arrayTest.push('Claudia')
console.log(arrayTest)
console.log(arrayTest.pop())
console.log(arrayTest)
console.log(arrayTest.delete(2))
console.log(arrayTest)
console.log(arrayTest.shift())
console.log(arrayTest)
console.log(arrayTest.unshift('lilo'))
console.log(arrayTest)


