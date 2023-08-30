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

    validate() {
        for (let i = 1; i < this.list.length; i++) {
            const currentBlock = this.list[i]
            const previousBlock = this.list[i - 1]
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false
            }
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false
            }
        }
        return true

    }
}





module.exports = Blockchain
