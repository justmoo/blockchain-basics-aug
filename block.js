const crypto = require('crypto')
class Block {
    nonce
    hash
    previousHash
    data
    timestamp
    constructor(data, previousHash) {
        this.data = data
        this.previousHash = previousHash
        this.timestamp = Date.now()
        this.hash = ""
        this.nonce = 0
        this.calculateHash()
    }
    calculateHash() {
        // for loop 
        for (let i = 0; i < 10_000_000; i++) {
            // hash the info of the block
            const randomHash = crypto.createHash("sha256").update(this.data + this.previousHash + this.nonce).digest("hex")
            // check if the hash start with 000
            if (randomHash.startsWith("0")) {
                console.log(randomHash);
                console.log(this.nonce);
                this.hash = randomHash
                return randomHash
            }
            // if not 
            this.nonce++;
        }
    }
}

module.exports = Block