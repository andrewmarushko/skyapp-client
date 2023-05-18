import { gql } from '@apollo/client';

export const homePageQuery = gql`
  query {
    homePage {
      data {
        attributes {
          hero {
            title
            subtitle
          }
          become_partner {
            title
            subtitle
            link {
              label
              target
              href
            }
          }
        }
      }
    }
  }
`;
