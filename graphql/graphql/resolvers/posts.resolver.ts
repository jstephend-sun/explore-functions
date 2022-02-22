import axios from 'axios';
import {
  QueryResolvers,
  PostResolvers,
  Post as PostType,
  Comment as CommentType,
} from '@graphql-types@';
import ResolverContext from '../resolverContext';

export const Query: QueryResolvers<ResolverContext> = {
  posts: async (_parent, _args, _context, _info) => {
    return await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.data);
  },
};

export const Post: PostResolvers<ResolverContext> = {
  comments: async ({ id }: PostType, _args, { loaders }, _info) => {
    let { getCommentsOfPostLoader } = loaders!;
    return getCommentsOfPostLoader?.load(id);
  },
};
