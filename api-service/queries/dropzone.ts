import { gql } from '@apollo/client';

export const dropzonePageQuery = gql`
  query {
    dropzonePage {
      data {
        attributes {
          price_title
          price_subtitle
          related_tubes_title
          relates_tubes_subtitle
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
            address
          }
          logo {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          cover {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;

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
              href
              target
              label
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
            address
          }
          logo {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          cover {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;

export const getDropzoneBySlug = gql`
  query getDzBySlug($slug: String!) {
    dropzones(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          slug
          description
          facilities
          contacts {
            phone
            email
            website
          }
          opening_hours {
            weekday_text
          }
          prices {
            price {
              type
              price
              currency
            }
            price_link {
              href
              label
              target
            }
          }
          requirements {
            jump_requirement
          }
          social {
            youtubeId
            links {
              type
              link {
                label
                href
                target
              }
            }
          }
          cover {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          logo {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          marketing {
            promoted
          }
          location {
            city
            continent
            address
            places
          }
          related_indoors {
            data {
              attributes {
                title
                slug
                diameter
                location {
                  address
                  city
                  continent
                }
                logo {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
                cover {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
