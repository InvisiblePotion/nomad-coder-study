# GraphQL로 영화 API 만들기
### https://nomadcoders.co/graphql-for-beginners

2023-07-07 ~ ongoing

## 프로젝트 특이사항
### 설치된 패키지
* dependencies
    + `apollo-server: 3.12.0`
    + `graphql: 16.7.1`
* devDependencies
    + `nodemon: 3.0.0`
---
### 기타
* 본 프로젝트에서는 Apollo GraphQL의 apollo-server 패키지를 사용하여 GraphQL 서버를 만들고 있다.

## 메모
### Apollo Server
* SDL 작성 및 사용
    + `apollo-server` 패키지에서 `gql` 함수를 import 한 다음 ```gql(`백틱 내부에 SDL 작성`)``` 와 같이 SDL을 작성한다.
    + SDL이 작성된 `gql()` 함수의 반환 값을 `ApolloServer` 클래스의 매개변수인 `config`의 `typeDefs` 요소에 입력하여 사용한다.
* Resolver 작성 및 사용
    + 객체 안에 Resolver가 적용 될 타입들을 키로 하여 값으로 타입의 각 필드를 함수명으로 하는 함수들을 가진 객체를 입력한다.
        - 예시: ```{ Query: { field1() { return "massage" } } }```
    + 해당 객체를 `ApolloServer` 클래스 매개변수인 `config`의 `resolvers` 요소에 입력하여 사용한다.
---
### SDL: Schema Definition Language
* SDL은 어떤 데이터가 어떻게 구조화 되어 있는지, 어떤 타입들이 존재하는지, 어떤 쿼리와 뮤테이션을 지원하는지를 정의하는 스키마를 정의하는 언어다.
* SDL에는 반드시 `Query` 타입이 존재해야 하며 `Query` 타입 내부에 정의된 필드는 graphQL API가 외부에 공개하여 데이터의 요청을 받을 수 있다.
    + `Query`의 필드는 데이터의 제공만을 하기에 DB의 데이터를 수정할 수는 없다.
* `Mutation` 타입은 `Query`와 다르게 필수는 아니지만 `Mutation` 타입 내부에 정의된 필드는 DB의 데이터를 수정하는 행동을 정의할 수 있다.
* SDL 내 모든 필드는 Nullable이며 타입 정의의 끝에 `!`를 붙이는 것으로 Non-Null(Required) 특성을 적용할 수 있다.
* `Query`와 `Mutation` 타입의 경우 요청에 필요한 매개변수를 설정할 수 있다. 또한 해당 매개변수가 필수인지를 `!`를 사용하여 정해줄 수도 있다.
* 배열형 타입의 경우 `String`이 담긴 배열을 타입으로 하기 위해선 `[String]` 와 같이 작성한다.
    + `[String]!`은 이 필드가 반드시 배열을 포함해야 하며 해당 배열에는 Nullable인 `String`이 들어갈 수 있다는 뜻이다.
    + `[String!]`은 이 필드가 Nullable인 배열을 포함하며 해당 배열에는 반드시 `String`이 들어가야 한다는 뜻이다.
    + `[String!]!`은 이 필드가 반드시 배열을 포함해야 하며 해당 배열에는 반드시 `String`이 들어가야 한다는 뜻이다.
* SDL에서 정의한 타입이나 그 필드들은 앞에 `"""내용"""` 와 같이 설명을 해당 타입이나 필드에 대한 설명문을 붙일 수 있다. 이는 Apollo가 자동생성 해주는 문서화 된 레퍼런스에서 확인 가능하니 협업시에는 매우 중요한 작업이다!
    + (다른 대부분의 GraphQL 툴에서도 지원하는 기능이라고 한다.)
---
### Resolver
* Resolver란 SDL에 명시한 필드에 대한 요청이 들어온 경우 GraphQL 서버가 실제로 실행시키게 되는 함수를 말한다.
* SDL이 필드명과 타입, Null 여부에 대한 제약조건을 걸어줬다면 Resolver는 해당 제약조건에 부합하는 반환 값을 가진 함수를 작성하여 요청에 대해 필요한 로직을 작성할 수 있다.
    + 예를 들어 `Query` 타입의 `banana`라는 필드에 대한 요청에 대해 `"Yellow"`라는 답을 하고 싶다면 Resolver 객체의 `Query` 요소에 `{ banana() { return "Yellow" } }` 와 같이 필드의 이름을 함수 명으로 갖는 함수가 들어간 객체를 입력해주면 된다.
    + 실제 사용시에는 DB가 연결되어 있을테니 함수 내부에서 SQL을 실행하여 필요한 정보를 DB로부터 받아오거나 DB를 수정하게 될 것이다.
    + 원칙 상 DB의 수정이 가능한 `Mutation`과 달리 `Query` 객체의 Resolver는 데이터 제공만을 해야하겠지만 작동 원리 상 `Query` 객체의 Resolver를 통해 DB의 수정이 이루어지더라도 GraphQL 서버는 정상 작동한다. `Query`와 `Mutation`의 분리는 약속에 불과하며 때문에 이를 지키기 위해 Resolver 함수 작성에 주의가 필요하다.
* Resolver 함수가 실행될 때, Apollo Server는 2개의 인자를 넘겨준다.
    + `root`: 첫번째 매개변수에는 Resolver 함수를 호출하는, 해당 필드를 참조하려는 객체의 정보를 담고 있다.
    + `args`: 두번째 매개변수에는 필드의 호출시에 제공된 인자를 담고 있는 객체이다.