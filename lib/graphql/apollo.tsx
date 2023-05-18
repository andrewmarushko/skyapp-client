import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { GRAPH_URL } from '@/constants/api';

let apolloClient: ApolloClient<any> | null = null;

export const getClient = () => {
  // create a new client if there's no existing one
  // or if we are running on the server.
  if (!apolloClient || typeof window === 'undefined') {
    apolloClient = new ApolloClient({
      link: new HttpLink({
        uri: GRAPH_URL,
      }),
      cache: new InMemoryCache(),
    });
  }

  return apolloClient;
};

export const apiClient = getClient();
