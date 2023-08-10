// 아주아주 간단한 블록체인 예제
import crypto from "crypto";

// 각 블록 객체를 위한 콜 시그니처 생성
interface BlockShape {
    hash: string;
    prevHash: string;
    height: number;
    data: string;
}
// 블록 클래스 선언
class Block implements BlockShape {
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string
    ) {
        // 생성자로 스태틱 함수를 사용하여 암호화된 해시값 저장
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    // crypto 모듈을 사용하여 암호화된 해시값을 저장하는 스태틱 함수
    static calculateHash(prevHash: string, height: number, data: string) {
        const toHash = `${prevHash}${height}${data}`;
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}
// 블록체인 클래스 선언
class Blockchain {
    private blocks: Block[];
    constructor() {
        this.blocks = [];
    }
    private getPrevHash() {
        if (this.blocks.length === 0) {
            return ""
        } else {
            return this.blocks[this.blocks.length - 1].hash;
        }
    }
    public addBlock(data: string) {
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
        this.blocks.push(newBlock);
    }
    public getBlocks() {
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
