import { gql } from '@apollo/client';

export const dropzonesPageQuery = gql`
  query {
    dropzonesPage {
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
// export const dropzonePageSeoQuery = gql``;

export const promotedDropzonesQuery = gql`
  query {
    dropzones(filters: { marketing: { promoted: { eq: true } } }) {
      data {
        attributes {
          title
          slug
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

export const allDropzonesQuery = gql`
  query {
    dropzones {
      data {
        attributes {
          title
          slug
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
