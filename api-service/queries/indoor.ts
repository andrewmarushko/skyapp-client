import { gql } from '@apollo/client';

export const indoorsPageQuery = gql`
  query {
    indoorsPage {
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
              href
              target
            }
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

export const promotedIndoorsQuery = gql`
  query {
    indoors(filters: { marketing: { promoted: { eq: true } } }) {
      data {
        attributes {
          title
          slug
          diameter
          location {
            city
            country
            address
          }
          logo {
            data {
              attributes {
                url
                alternativeText
                width
                height
              }
            }
          }
          cover {
            data {
              attributes {
                url
                alternativeText
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

export const allTubesQuery = gql`
  query {
    indoors {
      data {
        attributes {
          title
          slug
          diameter
          location {
            city
            country
            address
          }
          logo {
            data {
              attributes {
                url
                alternativeText
                width
                height
              }
            }
          }
          cover {
            data {
              attributes {
                url
                alternativeText
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;
