// import { exampleVar } from '@/components/search';
import { GRAPH_URL } from '@/constants/api';
import { ApolloClient, HttpLink, InMemoryCache, makeVar } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

export const exampleVar = makeVar('initial value');

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            searchValue: {
              read() {
                return exampleVar();
              },
            },
          },
        },
      },
    }),
    link: new HttpLink({
      uri: `${GRAPH_URL}`,
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // fetchOptions: { caches: 'no-store' },
    }),
  });
});

export const client = getClient();
