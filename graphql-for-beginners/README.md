# GraphQL로 영화 API 만들기
### https://nomadcoders.co/graphql-for-beginners

2023-07-07 ~ ongoing

## 메모
### 설치된 패키지
* dependencies
    + `apollo-server: 3.12.0`
    + `graphql: 16.7.1`
* devDependencies
    + `nodemon: 3.0.0`
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