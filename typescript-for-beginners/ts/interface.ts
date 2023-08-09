interface SStorage<T> {
    [key: string]: T;
}

class LocalStorage<T> {
    private storage: SStorage<T> = {};
    set(key: string, value: T) {
        if (this?.storage[key]) {
            console.log(`"${key}"이(가) 이미 존재합니다.`);
            return
        }
        this.storage[key] = value;
    }
    remove(key: string) {
        delete this.storage[key]
    }
    // get(key: string): T {}
}

const storage: LocalStorage<string> = new LocalStorage;
storage.set("abc", "qwer");

console.log("end");
