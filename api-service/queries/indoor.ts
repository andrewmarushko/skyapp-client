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

export const getIndoorBySlug = gql`
  query getBySlug($slug: String!) {
    indoors(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          location {
            lat
            lng
            city
            continent
            address
            zipcode
            country
          }
          diameter
          speed
          height
          description
          facilities
          opening_hours {
            weekday_text
            period {
              open {
                day
                time
              }
              close {
                day
                time
              }
            }
          }
          contacts {
            phone
            email
            website
          }
          social {
            youtubeId
            placeId
            links {
              type
              link {
                label
                target
                href
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
          building_status
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
              link_to_prices
              vendor_text
            }
            price_link {
              target
              href
              label
            }
          }
          related_dropzones {
            data {
              attributes {
                title
                location {
                  city
                  country
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
