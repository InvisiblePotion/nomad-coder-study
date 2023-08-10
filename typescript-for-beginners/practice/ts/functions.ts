/* 
    Call Signatures: 함수를 위한 타입의 선언으로 파라미터와 리턴에 대한 타입을 명시한다.

    ex1) 오버로딩을 사용하지 않는 경우 한줄로 작성하면 좋다.
    type '타입명' = (파라미터: 타입) => 리턴 타입;

    ex2) 오버로딩을 사용하는 경우 아래와 같이 사용한다.
    type '타입명' = {
        (파라미터1: 타입A, 파라미터2: 타입B): 리턴 타입;
        (파라미터: 타입A): 리턴 타입;
        (파라미터: 타입B): 리턴 타입;
    }

    ex3) type 대신 function을 사용해도 선언 가능하다.
    function '함수명'(파라미터1: 타입A, 파라미터2: 타입B): 리턴 타입;
    function '함수명'(파라미터: 타입A): 리턴 타입;
    function '함수명'(파라미터: 타입B): 리턴 타입;

    ex4) 제네릭을 사용하면 더욱 간결하게 오버로딩의 구현도 가능하다.
    type '타입명' = {
        <제네릭 extends 타입A | 타입B>(파라미터1: 제네릭, 파라미터2: 제네릭): 리턴 타입;
    }

    :Note: 오버로딩 구현 시 일반적으로 가장 구체적인 시그니처부터 정의하고
            이후 덜 구체적인 시그니처를 작성 하는 식으로 순서를 지켜주는게 좋다.
*/

// 일반적인 타입 선언
type Config = {
    path: string;
    state: object;
};

// 콜 시그니처로 함수 오버로딩 구현
type Push = {
    (path: string): void;
    (config: Config): void;
};

// 실제 함수 구현
const push: Push = (config) => {
    if (typeof config === "string") console.log(config);
    else console.log(config.path);
};

// 제네릭을 이용한 함수 오버로딩 구현
type SuperPrint = <T>(a: T[], b: T) => T;

// 실제 함수 구현
const superPrint: SuperPrint = (c) => c[0];

// 함수 사용 시에 제네릭 타입 명시 가능(아닐 시 자동 추론)
const a = superPrint<number>([1, 2, 3, 4], 2);
