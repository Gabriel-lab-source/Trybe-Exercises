import { froakie } from './pokemon';

const mockFetch = () => Promise.resolve({
  json: () => Promise.resolve(froakie),
});

export default mockFetch;
