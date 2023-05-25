import { GRAPH_URL } from '@/constants/api';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
 
    link: new HttpLink({
      // https://studio.apollographql.com/public/spacex-l4uc6p/
      uri: `${GRAPH_URL}`,
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      fetchOptions: { caches: 'no-store' },
    }),
  });
});

export const client = getClient();
