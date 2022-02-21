import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import axios from 'axios';

type Post = {
  userId: string | number;
  id: string | number;
  body: string;
  title: string;
};

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const posts = await axios
    .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.data);

  context.res = {
    body: posts,
  };
};

export default httpTrigger;
