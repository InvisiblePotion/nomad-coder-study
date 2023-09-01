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
* Pipe
    + NestJS에는 `Pipe`라는 Spring의 `HandlerInterceptor`와 상당히 유사한 HTTP 요청에 대한 전처리 기능이 있다.
    + `Pipe`에는 3가지의 적용 방법이 있는데 이는 다음과 같다.
        - `main.ts`에서 `useGlobalPipes()`를 통해 적용하는 전역 파이프
        - 컨트롤러 클래스 위에 `@UsePipes()` 데코레이터를 부착하여 적용하는 컨트롤러 레벨 파이프
        - 컨트롤러 안의 메소드 위에 `@UsePipe()` 데코레이터를 부착하여 적용하는 메소드 레벨 파이프
    + `Pipe`는 서버에 HTTP 요청이 들어오면 해당 요청의 엔드포인트가 가리키는 메소드를 찾아간 뒤 **해당 메소드의 실행 전에** 메소드에 적용된 모든 파이프가 실행된다.
        - Pipe의 적용 방법에 따라 "전역 - 컨트롤러 - 메소드" 순으로 실행되며 같은 범위에 여러개의 Pipe가 적용된 경우 적용 순서에 따라 실행된다.
    + #2.4 강의에서는 DTO 클래스를 생성하여 사용하는 과정에서 POST 등의 DB에 영향을 주는 요청에 대한 데이터의 유효성 검사 및 처리를 해주는 NestJS의 `ValidationPipe` 클래스를 사용하였다.
        - `ValidationPipe` 클래스를 사용하기 위해서는 `class-validator`와 `class-transformer` 패키지의 설치가 필요하다.
    + `ValidationPipe` 클래스는 다음과 같이 사용한다.
        - DTO 클래스에 선언된 각 필드에 `class-validator`의 `@IsString()`이나 `@IsOptional()`과 같은 유효성 검사 데코레이터를 적용시켜 해당 필드의 유효한 타입이나 필요 여부 등을 정한다.
        - `ValidationPipe`가 Pipe로 설정된 메소드가 호출되는 경우 해당 요청의 데이터를 보고 정해진 것과 다른 타입의 속성이 있거나 필요한 속성이 존재하지 않는 경우 해당 요청을 거부한다.
    + `ValidationPipe` 클래스를 생성할 때 인자로 객체를 넘겨 여러 설정이 가능한데 #2.4 강의에서는 3가지 옵션을 사용하였다.
        - `whitelist(boolean)`:  `true`로 설정하면 `class-validator`의 유효성 검사 데코레이터를 하나도 사용하지 않은 모든 속성을 제거한다.
        - `forbidNonWhitelisted(boolean)`: `whitelist` 옵션이 `true`인 경우 사용 가능하며 `true`로 설정하면 whitelist 옵션이 속성을 제거하는 대신 예외를 발생시켜 요청을 거부한다.
        - `transform(boolean)`: `true`로 설정하면 받아온 데이터를 지정된 타입의 객체로 자동 변환한다. (기본적으로 `string` 타입인 URL로부터 받아온 정보를 `number` 등으로 자동 변환 해주는 등)