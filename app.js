const Blockchain = require('./blockchain')

const blockchain = new Blockchain()


for (let i = 0; i < 10; i++) {
    blockchain.addBlock("Block " + i)
}
blockchain.printBlockahin()
blockchain.list[5].data = "Hacked"
console.log(blockchain.validate());
