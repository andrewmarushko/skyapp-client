'use client'
import { apolloClient, useApollo } from '@/lib/graphql/apollo-client';
import { ApolloProvider } from '@apollo/client'


import {
    ApolloNextAppProvider,
  } from "@apollo/experimental-nextjs-app-support/ssr";

// you need to create a component to wrap your app in
export function ApolloWrapper({ children, pageProps}: { children: any, pageProps: any}): React.PropsWithChildren) {
    const apolloClient = useApollo(pageProps);
    return (
        <ApolloProvider client={apolloClient}>
        {children}
        </ApolloProvider>
    );
  }