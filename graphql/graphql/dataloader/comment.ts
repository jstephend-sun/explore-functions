import axios from 'axios';
import { Comment } from '@graphql-types@';
import DataLoader from 'dataloader';
import { groupBy, map } from 'ramda';

export const getCommentsOfPosts = async (ids: readonly string[]) => {
  let comments: Comment[] = await axios
    .get('https://jsonplaceholder.typicode.com/comments')
    .then((res) => res.data);

  let commentsOfPost = groupBy((comment) => comment.postId, comments);
  return map((id) => commentsOfPost[id], ids);
};

export const getCommentsOfPostsLoader = () =>
  new DataLoader(getCommentsOfPosts);
