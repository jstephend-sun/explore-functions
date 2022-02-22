import { User, Post } from '@graphql-types@';
import { sort, OrderBy } from '.';
import DataLoader from 'dataloader';
import { map, groupBy } from 'ramda';
import axios from 'axios';

export type UsersArgs = {
  orderBy: string;
};

export const getAllUsers = async (orderBy = 'ID_ASC') => {
  let users: User[] = await axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.data);
  let orderByEnumVal = orderBy === 'ID_ASC' ? OrderBy.ID_ASC : OrderBy.ID_DESC;

  return sort<User>(users, orderByEnumVal);
};

export const getPostsOfUser = async (ids: readonly string[]) => {
  let posts: Post[] = await axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.data);

  let postsByUserId = groupBy((post) => post.userId, posts);
  return map((id) => postsByUserId[id], ids);
};

export const getPostsOfUserLoader = () => new DataLoader(getPostsOfUser);
