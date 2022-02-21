import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import axios from 'axios';

type Comment = {
  postId: string | number;
  id: string | number;
  name: string;
  email: string;
  body: string;
};

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const comments = await axios
    .get<Comment[]>('https://jsonplaceholder.typicode.com/comments')
    .then((res) => res.data);

  context.res = {
    body: comments,
  };
};

export default httpTrigger;
