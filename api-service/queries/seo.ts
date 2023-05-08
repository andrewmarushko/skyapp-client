import { gql } from '@apollo/client';
import qs from 'qs';

export const PAGE_SEO_QUERY = qs.stringify({
  populate: [
    'seo',
    'seo.format_description,seo.robots,seo.twitter,seo.viewport',
    'seo.robots.google_bot',
  ],
});

export const homePageSeoQuery = gql`
  query {
    homePage {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
            applicationName
            keywords
            format_description {
              email
              telephone
              address
            }
            metadataBase
            robots {
              index
              follow
              nocache
            }
            google_bot {
              index
              follow
              no_image_index
              max_video_preview
              max_snippet
              max_image_preview
            }
            manifest
            twitter {
              card
              title
              description
              image
            }
            referrer
            viewport {
              width
              initial_scale
              maximum_scale
            }
          }
        }
      }
    }
  }
`;

export const contactsPageSeoQuery = gql`
  query {
    contactsPage {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
            applicationName
            keywords
            format_description {
              email
              telephone
              address
            }
            metadataBase
            robots {
              index
              follow
              nocache
            }
            google_bot {
              index
              follow
              no_image_index
              max_video_preview
              max_snippet
              max_image_preview
            }
            manifest
            twitter {
              card
              title
              description
              image
            }
            referrer
            viewport {
              width
              initial_scale
              maximum_scale
            }
          }
        }
      }
    }
  }
`;

export const blogPageSeoQuery = gql`
  query {
    blogPage {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
            applicationName
            keywords
            format_description {
              email
              telephone
              address
            }
            metadataBase
            robots {
              index
              follow
              nocache
            }
            google_bot {
              index
              follow
              no_image_index
              max_video_preview
              max_snippet
              max_image_preview
            }
            manifest
            twitter {
              card
              title
              description
              image
            }
            referrer
            viewport {
              width
              initial_scale
              maximum_scale
            }
          }
        }
      }
    }
  }
`;

export const servicesPageSeoQuery = gql`
  query {
    servicesPage {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
            applicationName
            keywords
            format_description {
              email
              telephone
              address
            }
            metadataBase
            robots {
              index
              follow
              nocache
            }
            google_bot {
              index
              follow
              no_image_index
              max_video_preview
              max_snippet
              max_image_preview
            }
            manifest
            twitter {
              card
              title
              description
              image
            }
            referrer
            viewport {
              width
              initial_scale
              maximum_scale
            }
          }
        }
      }
    }
  }
`;
