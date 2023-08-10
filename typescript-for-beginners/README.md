# 타입스크립트로 블록체인 만들기
### https://nomadcoders.co/typescript-for-beginners

2023-07-28 ~ 2023-08-11

## Memo
### typechain 프로젝트에서는 nodeJs를 사용하였으며 `[typescript, ts-node, nodemon]` 패키지를 설치하였다. (typescript, ts-node는 설치 시 -D 플래그를 사용하였다)

* 터미널에서의 `tsc(TypeScript Compiler)` 사용 법
    + `cd` 명령어를 사용해 프로젝트 루트 디렉토리로 이동 후 `tsc --init` 명령어로 `tsconfig.json` 파일을 생성한다
    + 이후 `tsc -w` 명령어로 ts 파일이 저장될 때 js 파일로 자동 컴파일 기능 활성화하거나 필요할 때마다 `tsc` 명령어로 수동 컴파일이 가능하다
* `tsconfig.json`의 옵션에 대한 팁
    + `compilerOptions.strict`
        - `true`로 해두지 않으면 타입스크립트를 쓰는 이유가 없다 할 정도다!!
    + `compilerOptions.outDir`
        - 컴파일 된 js 파일의 출력 경로를 지정하여 사용 가능하다
    + `compilerOptions.allowJs`
        - `true`로 설정할 경우 js 파일을 .d.ts 파일 없이 ts 파일에서 import 하고 사용할 수 있도록 한다
        - 이 경우 타입스크립트는 import 된 함수나 클래스의 타입을 추론하여 미리보기를 제공한다
        - import 할 js 파일에 `//@ts-check` 어노테이션을 사용하면 타입스크립트의 보호를 받게 되며 JsDoc 문법으로 타입을 정의해 줄 수 있다
    + `compilerOptions.compilerOptions`
        - 컴파일 될 js 스크립트의 버전을 고를 수 있다
    + `compilerOptions.lib`
        - 런타임 환경에 사용될 lib 파일을 골라 자동완성을 활성화 할 수 있다
    + `compilerOptions.module`
        - 원하는 모듈 시스템을 고를 수 있다. (CommonJS, ES6 등)
    + `compilerOptions.esModuleInterop`
        - `true`로 설정하는 것으로 모듈 import시 `import module from './module';` 이런 방식으로 import가 가능해진다 (ES 모듈과 CommonJS 모듈 간의 호환성 문제를 해결하는 옵션이라고 한다)
* nodeJs의 환경을 설정하는 `package.json`에 대한 팁
    + `scripts` 속성에 객체를 넣어 터미널에서 `npm run "키"` 입력 시 해당 키에 해당하는 밸류를 실행시키는 일종의 단축 명령어를 만들 수 있다
    + `npm install` 명령어 사용 시 `-D` 플래그를 사용하면 개발 환경에서만 모듈이 종속성을 갖는 `devDependencies` 옵션에 자동으로 종속성 정의가 되며, 사용하지 않는다면 런타임 환경에서도 모듈의 종속성이 유지되는 `dependencies` 옵션에 자동으로 종속성 정의가 된다