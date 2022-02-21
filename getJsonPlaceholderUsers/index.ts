import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import axios from 'axios';

type User = {
  id: string | number;
  name: string;
  email: string;
};

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const users = await axios
    .get<User[]>('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.data);

  context.res = {
    body: users,
  };
};

export default httpTrigger;
