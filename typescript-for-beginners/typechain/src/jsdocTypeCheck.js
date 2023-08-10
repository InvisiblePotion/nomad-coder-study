// tsconfig 파일에서 compilerOptions.allowJs 설정을 True로 하는 것으로 js 파일을 ts 파일에서 import 가능하도록 할 수 있다.
//:또한 아래 노테이션을 작성하는 것으로 JsDoc을 이용한 타입스크립트의 타입 보호, 타입 추론, 미리보기 기능을 얻을 수 있다.

// @ts-check
/**
 * 프로젝트 초기화
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean} boolean
 */
export function init(config) {
    return true;
}
/**
 * 프로그램 종료
 * @param {number} code
 * @returns {number} number
 */
export function exit(code) {
    return code + 1;
}

// 실제로 이 파일을 ts 파일 내에서 임포트 해보려면 `import { init, exit } from "jsdocTypeCheck";` 사용