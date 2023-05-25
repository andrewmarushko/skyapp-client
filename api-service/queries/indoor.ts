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

export const getIndoorBySlug = gql`
  query getIndoorBySlug($slug: String!) {
    indoors(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          slug
          description
          diameter
          speed
          height
          facilities
          opening_hours {
            weekday_text
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
          marketing {
            promoted
          }
          company_name
          logo {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          prices {
            price {
              type
              price
              currency
            }
            price_link {
              label
              href
              target
            }
          }
          contacts {
            phone
            email
            website
          }
          location {
            city
            continent
            address
            places
          }
          related_dropzones {
            data {
              attributes {
                title
                slug
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

export const indoorPageQuery = gql`
  query {
    indoorPage {
      data {
        attributes {
          related_dropzone_title
          related_dropzone_subtitle
          price_title
          price_subtitle
          become_partner {
            title
            subtitle
            link {
              target
              href
              label
            }
          }
        }
      }
    }
  }
`;
