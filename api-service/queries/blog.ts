import { gql } from '@apollo/client';

export const blogPageQuery = gql`
  query {
    blogPage {
      data {
        attributes {
          hero {
            title
            subtitle
          }
        }
      }
    }
  }
`;
