"use strict";
/*
    타입 생성 시에는 type 별칭을 사용한다.
    (Memo) 타입을 객체로 생성하는 경우에는 interface와 type이 매우 유사하게 사용되기도 한다.
            interface와 type에는 다음과 같은 차이점이 존재한다.
            1. interface는 확장이 가능하지만 type은 아니다.
            2. interface는 반드시 이름이 존재하지만 type은 익명 타입이 가능하다.
            3. interface는 다른 interface를 상속 받거나 class를 통해 구현될 수 있는 확장성을 가지지만
                type은 확장성이 없다.

    요소의 앞에 readonly를 붙여 읽기 전용으로 만들거나
    요소의 뒤에 ?를 붙여 optional 요소로 만들 수도 있다.
    (Memo) ?를 이용하여 요소를 optional하게 만드는 경우 값이 주어지지 않는다면 자동으로 undefined로 초기화된다.
            반면 Union 타입을 사용한 방식의 경우에는 값이 주어지지 않으면 객체의 생성 자체가 불가능하다는 점에서 둘의 차이가 있다.

    Union 타입은 `number | string` 와 같이 선언하며 요소가 명시된 타입 중 한가지 타입에 해당할 필요가 있다.

    Intersection 타입은 `Type1 & Type2` 와 같이 선언하며 primitive type이 아닌 타입들을 서로 조합 할 수 있다.

    Tuple은 내부적으로 구현되어 있는 타입은 아니지만 하나의 약속된 문법으로,
    고정된 개수의 요소들을 갖는 배열을 표현하는 타입이다.
    Tuple은 `type '타입명' = [number, string, boolean]` 와 같이 선언한다.

    Tuple의 경우 ...을 사용한 Spread 문법을 적용시켜
    `[...number[], string]` 와 같이 만들 수도 있지만,
    "고정된 개수의 요소를 갖는 배열" 이라는 Tuple의 본 의도와 다른 형태가 되므로
    그다지 권장하지 않는다.

    unknown 타입은 변수를 선언하는 시점에서 변수의 타입을 추측할 수 없을 때 사용한다.
    예를 들어 api를 통해 값을 받아올 공간을 변수로써 미리 선언해두었지만
    해당 api에서 어떤 타입의 데이터를 줄지 알 수 없기 때문에 이런 경우에 unknown 타입을 사용한다.
    또한 타입을 추측할 수 없다는 unknown의 특징 때문에 해당 변수를 사용할 때에는
    반드시 명시적 타입 체크를 거쳐야 하며 당연히 const 변수에는 unknown을 사용할 수 없다.

    never 타입은 변수가 어떤 타입으로도 존재할 수 없는 경우에 자동 추론되는 타입이다.
    잘못된 Intersection을 수행하려 했거나 명시적 타입 체크에서 변수가 어떤 타입으로도 존재할 수 없는 경우에
    해당 변수는 never 타입으로 추론된다.
    있을 수 없는 경우라는 점을 이용하여 명시적 타입 체크 과정에서 never 타입이 되는 경우에
    직접 예외를 발생 시키는 식으로 디버깅에 사용이 가능한 타입이다.

    void 타입은 반환 값이 없는 함수의 반환 타입이다.
    void 타입을 명시하는 것으로 해당 함수의 반환 타입이 없음을 알릴 수 있다.
*/
// 화살표 함수를 사용하는 함수 선언에서 반환 값이 객체인 경우 소괄호로 감싸줘야 한다
const typeMaker = (name) => ({ name });
const newName = typeMaker("이름");
// optional인 age는 나중에 추가할 수 있다
newName.age = 10;
// optional이므로 처음부터 값을 주어도 문제 없다
const noName = { name: " ", age: 25 };
const uni1 = 1;
const uni2 = "2";
// 직접 명시하는 경우도 문제 없다
const uni3 = 1;
// primitive 타입이 아니라도 가능하다
const uni4 = { name: "uni4", age: 4 };
const inter = { a: 1, b: "2" };
const inter2 = { a: 1, b: "2", c: true };
const tup = [1, "2", true];
/* [unknown] */
let apiResult;
if (typeof apiResult === "number") {
    const resultNumber = apiResult + 1;
}
/* [never] */
function whyNever(whyNot) {
    if (typeof whyNot === "number") {
        console.log(typeof whyNot); // number
    }
    else if (typeof whyNot === "string") {
        console.log(typeof whyNot); // string
    }
    else {
        console.log(typeof whyNot); // never
        throw new Error("Invalid parameter type");
    }
}
/* [void] */
const itsVoid = (a) => console.log(a);
