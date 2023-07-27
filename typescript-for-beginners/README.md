# 타입스크립트로 블록체인 만들기
### https://nomadcoders.co/typescript-for-beginners

2023-07-28 ~ ongoing

## Memo
* 터미널에서의 `tsc(TypeScript Compiler)` 사용 법
    + `cd` 명령어를 사용해 원하는 디렉토리로 이동 후 `tsc --init` 명령어로 `tsconfig.json` 파일을 생성.
    + 이후 `tsc -w` 명령어로 ts 파일이 저장될 때 js 파일로 자동 컴파일 기능 활성화
    + 필요에 따라 `tsconfig.json` 파일의 `outDir` 속성으로 컴파일 된 js 파일의 출력 경로를 지정하여 사용 가능