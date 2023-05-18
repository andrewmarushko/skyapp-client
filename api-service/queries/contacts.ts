import { gql } from '@apollo/client';

export const contactsPageQuery = gql`
  query {
    contactsPage {
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
