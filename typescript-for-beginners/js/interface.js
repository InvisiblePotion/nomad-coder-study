"use strict";
// 키 밸류 형식의 저장소 클래스 구현
class LocalStorage {
    constructor() {
        // 데이터가 저장되는 필드
        this.storage = {};
    }
    // 데이터 삽입 함수
    set(key, value) {
        // 해당 키가 이미 존재한다면 데이터 삽입 거부
        if (this === null || this === void 0 ? void 0 : this.storage[key]) {
            console.log(`"${key}"이(가) 이미 존재합니다.\n데이터 변경을 위해서는 먼저 remove()로 삭제해 주시기 바랍니다.`);
            return;
        }
        this.storage[key] = value;
    }
    // 데이터 삭제 함수
    remove(key) {
        delete this.storage[key];
    }
    // 데이터 호출 함수
    get(key) {
        return this.storage[key];
    }
    // 데이터 전체 삭제 함수
    clear() {
        this.storage = {};
    }
}
// 테스트
const stringStorage = new LocalStorage();
stringStorage.set("abc", "qwer");
const booleanStorage = new LocalStorage();
console.log("EOF");
