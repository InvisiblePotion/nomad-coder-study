"use strict";
class LocalStorage {
    constructor() {
        this.storage = {};
        // get(key: string): T {}
    }
    set(key, value) {
        if (this === null || this === void 0 ? void 0 : this.storage[key]) {
            console.log(`"${key}"이(가) 이미 존재합니다.`);
            return;
        }
        this.storage[key] = value;
    }
    remove(key) {
        delete this.storage[key];
    }
}
const storage = new LocalStorage;
storage.set("abc", "qwer");
console.log("end");
