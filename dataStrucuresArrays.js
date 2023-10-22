// instantiation

class Player {
    constructor(name,type) {
        this.name = name;
        this.type = type;
    }

    introduction (){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

// inheritance

class Support extends Player {
    constructor (name, type){
        super(name, type) // super is used to call the constructor of the parent class
    }

    heal(){
        console.log('Healing')
    }
}

const healer1 = new Support('Jack', 'Healer');
healer1.introduction();
healer1.heal();

// Arrray class 

class Myarray {
    constructor(){
        this.length = 0
        this.data = {}
    }

    get(index){
        return this.data[index]
    }

    push(item){
        this.data[this.length] = item
        this.length++
        return this.length
    }

    pop(){
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
    }

    delete(index){
        const item = this.data[index]
        this.shiftItems(index)
    }

    shiftItems(index){
        for(let i = index; i < this.length-1; i++){
            this.data[i]=this.data[i+1]
        }
        delete this.data[this.length - 1]
        this.length--
    }

    reverse(){
        let reversedArray = []
        for( let i = this.length -1; i >= 0; i--){
            reversedArray.push(this.data[i])
        }
        return reversedArray
    }
}

const newArray = new Myarray();
newArray.push('hello')
newArray.push('world')
newArray.push('!')
newArray.delete(1)
newArray.push('you')
newArray.push('are')
newArray.delete(1)
newArray.push('nice')
console.log(newArray)
console.log('reversed array: ',newArray.reverse())

// reverse a string

const reverse = (str) => {
    let reversedString =''
    for (let i = str.length -1; i>=0; i--){
        reversedString+=str[i]
    }
    return reversedString

    
}

console.log('reversed string: ', reverse('Hi My name is Basim'))

const reversedString = str => str.split('').reverse().join('')
console.log('reversed string: ', reversedString('Hi My name is Basim'))

const reversedString2 = str => [...str].reverse().join('')
console.log('reversed string: ', reversedString2('Hi my name is Basim'))

// merg two sorted arrays

// mergSortedArrays([0,3,4,31], [4,6,30])
// [0,3,4,4,6,30,31]

const mergSortedArrays = (arr1,arr2) => {
    const mergedArray=[]
    let arr1Item= arr1[0]
    let arr2Item = arr2[0]
    let i =1
    let j =1

    if (arr1.length === 0){
        return arr2
    }

    if(arr2.length === 0){
        return arr1
    }
    while(arr1Item || arr2Item){
        console.log(arr1Item,arr2Item)
        // To optimize the solution we can refactore the if else statement as functions that returns the desired output
        if (!arr2Item || arr1Item < arr2Item){
            mergedArray.push(arr1Item)
            arr1Item = arr1[i]
            i++
        }else {
            mergedArray.push(arr2Item)
            arr2Item = arr2[j]
            j++
        }
    }
    
    return mergedArray
}

console.log(mergSortedArrays([0,3,4,31], [4,6,30]))