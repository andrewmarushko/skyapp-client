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
              hide
            }
            panel {
              id
              label
              showPannel
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
                  hide
                }
                description
              }
              links {
                id
                link {
                  label
                  href
                  target
                  hide
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
              label,
              showPannel,
              links {
                id
                label
                href
                target
                hide
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
                hide
              }
            }
          }
        }
      }
    }
  }
`;
