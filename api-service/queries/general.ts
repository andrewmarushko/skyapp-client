import { gql } from '@apollo/client';

export const generalQuery = gql`
  query {
    general {
      data {
        attributes {
          mainNavigation {
            navigationLinks {
              id
              label
              href
              target
            }
            panel {
              id
              label
              push {
                coverTitle
                cover {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                link {
                  label
                  href
                  target
                }
                description
              }
              links {
                id
                link {
                  label
                  href
                  target
                }
                description
              }
            }
          }
          logo {
            companyName
            href
          }
          footer {
            navigation {
              id
              label
              links {
                id
                label
                href
                target
              }
            }
            copyright {
              companyName
              reserved
              copyright
            }
            subscribe {
              title
              subtitle
              submitButton {
                label
                type
              }
            }
            social {
              id
              type
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
  }
`;
