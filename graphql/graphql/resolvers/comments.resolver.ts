import axios from 'axios';
import { QueryResolvers } from '@graphql-types@';
import ResolverContext from '../resolverContext';

export const Query: QueryResolvers<ResolverContext> = {
  comments: async (_parent, _args, _context, _info) => {
    return await axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.data);
  },
};
