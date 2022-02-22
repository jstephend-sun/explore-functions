import { ApolloServer } from 'apollo-server-azure-functions';
import {
  getCommentsOfPostsLoader,
  getPostsOfUserLoader,
} from './graphql/dataloader';
import { schema } from './graphql/schema';

const server = new ApolloServer({
  schema,
  context: {
    loaders: {
      getPostsOfUserLoader: getPostsOfUserLoader(),
      getCommentsOfPostLoader: getCommentsOfPostsLoader(),
    },
  },
});

export default server.createHandler({
  cors: {
    origin: '*',
  },
});
