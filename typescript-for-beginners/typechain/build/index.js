"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 아주아주 간단한 블록체인 예제
const crypto_1 = __importDefault(require("crypto"));
// 블록 클래스 선언
class Block {
    constructor(prevHash, height, data) {
        this.prevHash = prevHash;
        this.height = height;
        this.data = data;
        // 생성자로 스태틱 함수를 사용하여 암호화된 해시값 저장
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    // crypto 모듈을 사용하여 암호화된 해시값을 저장하는 스태틱 함수
    static calculateHash(prevHash, height, data) {
        const toHash = `${prevHash}${height}${data}`;
        return crypto_1.default.createHash("sha256").update(toHash).digest("hex");
    }
}
// 블록체인 클래스 선언
class Blockchain {
    constructor() {
        this.blocks = [];
    }
    getPrevHash() {
        if (this.blocks.length === 0) {
            return "";
        }
        else {
            return this.blocks[this.blocks.length - 1].hash;
        }
    }
    addBlock(data) {
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
        this.blocks.push(newBlock);
    }
    getBlocks() {
        // 블록 변조를 방지하기 위해 복사된 새 배열을 리턴
        return [...this.blocks];
    }
}
const blockchain = new Blockchain();
blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");
// getBlocks()의 반환 값이 this.blocks 였다면 블록이 변조되는 문제 발생
blockchain.getBlocks().push(new Block("asdf", 1234, "비정상 데이터"));
console.log(blockchain.getBlocks());
