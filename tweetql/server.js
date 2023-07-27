import { ApolloServer, gql } from "apollo-server";

/*
    SDL: Schema Definition Language

    SDL에는 GraphQL API에서 사용하는 타입을 설명해주어야 한다.
    SDL의 type은 자바의 class와 유사하여 내부에 field를 생성할 수 있다.
    field는 반드시 type을 가지며 유저가 만든 type을 가지거나 배열의 형태로 가지는 것 또한 가능하다.
    
    Query는 필수 설명 타입이며 정보의 조회를 위한 설명 타입이다.
    Mutation은 백엔드(DB)에 변화를 주는 요청을 위한 설명 타입이다.
    즉, Query는 REST의 GET 요청에, Mutation은 다른 나머지 요청에 해당한다고 볼 수 있다.

    타입의 뒤에 '!'를 붙이면 해당 필드에 Non-Null 속성을 적용할 수 있다.
*/
const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        firstName: String!
        lastName: String
    }

    type Tweet {
        id: ID!
        text: String!
        author: User!
    }

    type Query {
        allTweets: [Tweet!]!
        tweet(id: ID!): Tweet
    }
e5ed5red5try53er
    type Mutation {
        postTweet(text: String!, userId: ID!): Tweet!
        deleteTweet(id: ID!): Boolean!
    }
`;

// 서버 실행: npm run dev

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
    console.log(`Running on ${url}`);
});

