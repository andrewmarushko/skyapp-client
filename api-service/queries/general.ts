import { gql } from '@apollo/client';

export const generalQuery = gql`
  query {
    general {
      data {
        attributes {
          mainNavigation {
            navigationLinks {
              label
              href
              target
            }
            panel {
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
              label
              links {
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
