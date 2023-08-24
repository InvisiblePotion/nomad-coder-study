// NodeJS를 통해 구동되는 서버 클래스인 ApolloServer와 SDL 작성을 위한 gql 함수를 import
import { ApolloServer, gql } from "apollo-server";

// 임시 모조 데이터베이스
let tweets = [
  {
    id: "1",
    text: "first one",
    userId: "2",
  },
  {
    id: "2",
    text: "second one",
    userId: "1",
  },
];

// 임시 모조 데이터베이스
let users = [
  {
    id: "1",
    firstName: "nico",
    lastName: "las",
  },
  {
    id: "2",
    firstName: "invisible",
    lastName: "potion",
  },
];

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
const typeDefs = gql(`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
  }
  """
  Tweet 타입은 트윗 어쩌고 대충 설명 머시기
  """
  type Tweet {
    """아이디입니다"""
    id: ID!
    text: String!
    author: User
  }

  type Query {
    """모든 유저의 데이터를 가져옵니다"""
    allUsers: [User!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
  }

  type Mutation {
    """트윗을 작성합니다"""
    postTweet(text: String!, userId: ID!): Tweet!
    deleteTweet(id: ID!): Boolean!
  }
`);

const resolvers = {
  Query: {
    allTweets() {
      return tweets;
    },
    tweet(_, { id }) {
      return tweets.find((tweet) => tweet.id === id);
    },
    allUsers() {
      console.log("allUsers called");
      return users;
    },
  },
  Mutation: {
    postTweet(_, { text, userId }) {
      const newTweet = {
        id: tweets.length + 1,
        text,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(_, { id }) {
      const tweet = tweets.find((tweet) => tweet.id === id);

      // 매개변수로 받은 id에 해당되는 트윗이 없다면 false 리턴
      if (!tweet) return false;

      // 있다면 해당하는 트윗을 제외한 트윗만을 담은 배열을 다시 tweets에 입력 후 true 리턴
      tweets = tweets.filter((tweet) => tweet.id !== id); // 상당히 야매다...
      return true;
    },
  },
  User: {
    fullName(root) {
      console.log("fullName called");
      return `${root.firstName} ${root.lastName}`;
    },
  },
  Tweet: {
    author({ userId }) {
      return users.find((user) => user.id === userId);
    }
  }
};

// 서버 실행: npm run dev
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
