interface SStorage<T> {
    [key: string]: T;
}

// 키 밸류 형식의 저장소 클래스 구현
class LocalStorage<T> {
    // 데이터가 저장되는 필드
    private storage: SStorage<T> = {};

    // 데이터 삽입 함수
    set(key: string, value: T) {
        // 해당 키가 이미 존재한다면 데이터 삽입 거부
        if (this?.storage[key]) {
            console.log(`"${key}"이(가) 이미 존재합니다.\n데이터 변경을 위해서는 먼저 remove()로 삭제해 주시기 바랍니다.`);
            return;
        }
        this.storage[key] = value;
    }
    // 데이터 삭제 함수
    remove(key: string) {
        delete this.storage[key];
    }
    // 데이터 호출 함수
    get(key: string): T {
        return this.storage[key];
    }
    // 데이터 전체 삭제 함수
    clear() {
        this.storage = {};
    }
}

// 테스트
const stringStorage = new LocalStorage<string>();
stringStorage.set("abc", "qwer");

const booleanStorage = new LocalStorage<boolean>();

console.log("EOF");
