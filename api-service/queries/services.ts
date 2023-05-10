import { gql } from '@apollo/client';

export const servicesPageQuery = gql`
  query {
    servicesPage {
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
