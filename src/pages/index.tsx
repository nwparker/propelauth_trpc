import { api } from '~/utils/api';

export default function Default() {
  const { data: response } = api.project.test.useQuery({ name: 'Test Name' });

  return <div>{response}</div>;
}
