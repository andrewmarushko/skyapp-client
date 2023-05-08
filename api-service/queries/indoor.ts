import { gql } from '@apollo/client';

export const indoorsPageQuery = gql`
  query {
    indoors {
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

export const indoorLandingPageQuery = gql`
  query {
    indoorLanding {
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
