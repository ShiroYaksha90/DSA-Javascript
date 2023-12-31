// Objective: Understand how hash tables work and how to implement them in Javascript

let user = {
    age :54,
    name: 'Kylie',
    magic: true,
    scream: ()=> {
        console.log('ahhhhhhh!');
    }
}
user.scream();
user.spell = 'abra kadabra';
console.log(user)

// Crate a hash table using a class

class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    // Hash function

    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length
        }
        return hash;
    } 
    set(key, value){
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key,value]);
        return this.data;
    }

    get(key){
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1]
                }
            }
        }
        return undefined;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
console.log(myHashTable.get('grapes'))