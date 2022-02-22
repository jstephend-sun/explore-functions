import axios from 'axios';
import {
  QueryResolvers,
  UserResolvers,
  Post as PostType,
  User as UserType,
} from '@graphql-types@';
import ResolverContext from '../resolverContext';
import { getAllUsers, UsersArgs } from '../dataloader';

export const Query: QueryResolvers<ResolverContext> = {
  users: async (_parent, { orderBy }: UsersArgs, _context, _info) => {
    return await getAllUsers(orderBy);
  },
};

export const User: UserResolvers<ResolverContext> = {
  posts: async ({ id }: UserType, _args, { loaders }, _info) => {
    let { getPostsOfUserLoader } = loaders!;
    return getPostsOfUserLoader.load(id);
  },
};
