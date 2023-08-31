# NestJs로 API 만들기
### https://nomadcoders.co/nestjs-fundamentals

2023-08-31 ~ ongoing

## 프로젝트 특이사항

## 메모
### 1챕터
* NestJS 프로젝트의 `src` 폴더에는 반드시 `main.ts` 파일을 시작 지점으로 가져야한다.
* NestJS에서는 "데코레이터" 라는 개념을 매우 자주, 중요하게 사용한다. 데코레이터는 `@`를 앞에 붙이는 함수로써 Spring에서의 `@Controller` 어노테이션과 같이 데코레이터 밑에 붙는 함수에 역할이나 기능을 부여한다.
    + 예를 들자면 NestJS의 `@Get('/end-point')` 데코레이터와 Spring의 `@GetMapping("/end-point")` 어노테이션은 똑같이 `'/end-point'`로의 라우팅을 담당한다.
    + Spring과 달리 NestJS의 데코레이터는 반드시 사용할 함수의 바로 위에 붙어있어야 한다. 한 줄이라도 띄워두면 작동하지 않는다!