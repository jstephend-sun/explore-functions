import { ApolloServer, gql } from 'apollo-server-azure-functions';
import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefs = gql`
  type Query {
    hello: String!
    world: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello from our GraphQL backend!',
    world: () => 'Hello world',
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
  schema,
});

export default server.createHandler({
  cors: {
    origin: '*',
  },
});
