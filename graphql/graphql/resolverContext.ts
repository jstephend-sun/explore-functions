import DataLoader from 'dataloader';
import { IncomingMessage, ServerResponse } from 'http';

import { Post, Comment } from '@graphql-types@';

export type ResolverContext = {
  req?: IncomingMessage;
  res?: ServerResponse;
  loaders?: {
    getPostsOfUserLoader: DataLoader<string, Post[], string>;
    getCommentsOfPostLoader: DataLoader<string, Comment[], string>;
  };
};

export default ResolverContext;
