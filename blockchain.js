const Block = require('./block.js')

class Blockchain {

    list = []
    constructor() {
        // task one 
        // create a genesis block
        this.list.push(new Block("Genesis Block", "N/A"))
    }

    addBlock(data) {
        const previousHash = this.list[this.list.length - 1].hash
        const newBlock = new Block(data, previousHash)
        this.list.push(newBlock)
    }
    printBlockahin() {
        console.log(this.list);

    }
}





module.exports = Blockchain
