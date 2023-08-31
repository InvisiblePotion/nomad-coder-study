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
---
### 2챕터
* Controller
    + `@Get(':param')`와 같이 라우팅 데코레이터를 이용해 Path Parameter를 적용한 경우엔 이를 함수 내에서 받아 사용하기 위해서 `@Param('param') paramName: string`와 같이 `@Param` 데코레이터를 사용해줘야 한다.
        - 스프링과 달리 `@Get()` 데코레이터의 인자로 들어가는 경로는 처음에 `/`를 생략해도 잘 인식하는듯 하다!
    + URL에 Query Parameter로 담겨오는 데이터는 `@Query('param') paramName: string`와 같이 `@Query` 데코레이터를 사용해서 매개변수로 가져올 수 있다.
    + Request Body에 담겨오는 데이터도 마찬가지로 `@Body() paramName`와 같이 `@Body` 데코레이터를 사용하면 매개변수로 가져올 수 있다.
    + `spec.ts` 확장자의 파일은 테스트용 파일이라고 한다.
    + service에서 `@Injectable()` 데코레이터가 부착된 class를 export하고 이를 controller에서 import한 뒤 `@Controller()` 데코레이터가 부착된 클래스 안에서 `constructor(private readonly importedService: ImportedService) {}`와 같이 사용하는 것으로 **생성자 주입**이 가능하다!
        - 다른 의존성 주입 방식이 유효한지는 모르겠다.