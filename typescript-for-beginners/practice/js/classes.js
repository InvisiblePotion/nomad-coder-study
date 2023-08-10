"use strict";
// 추상 클래스 선언
class User {
    // 생성자 선언
    constructor(firstName, lastName, nickname) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// 추상 클래스를 상속하는 클래스
class Player extends User {
    // 추상 메소드 구현
    getNickName() {
        console.log(this.nickname);
    }
}
const nico = new Player("nico", "las", "니꼬");
// 위의 타입을 속성으로 가지며 몇가지의 메소드를 가지는 클래스 선언
class Dict {
    constructor() {
        this.words = {};
    }
    add(word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
        else {
            console.log(`"${word.term}"이(가) 이미 존재합니다.`);
        }
    }
    def(term) {
        return this.words[term];
    }
}
// Dict에서 사용 될 단어를 위한 클래스 정의
class Word {
    constructor(
    // 접근 제한자를 private가 아닌 public readonly로 주는 걸로
    //:접근은 자유지만 수정은 불가능한 속성을 만들 수 있다.
    term, def) {
        this.term = term;
        this.def = def;
    }
}
const kimchi = new Word("kimchi", "밥도둑 절임채소");
const dict = new Dict();
dict.add(kimchi);
console.log(dict);
