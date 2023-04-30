import qs from 'qs';

export const LOGO_QUERY = qs.stringify(
  {
    populate: ['logo', 'logo.logo'],
  },
  {
    encodeValuesOnly: true,
  },
);

export const NAVIGATION_QUERY = qs.stringify(
  {
    populate: [
      'mainNavigation',
      'mainNavigation.navigationLinks,mainNavigation.panel',
      'mainNavigation.panel.push,mainNavigation.panel.links',
      'mainNavigation.panel.push.link,mainNavigation.panel.links.link,mainNavigation.panel.push.cover',
    ],
  },
  {
    encodeValuesOnly: true,
  },
);

export const FOOTER_QUERY = qs.stringify(
  {
    populate: [
      'footer',
      'footer.links,footer.copyright,footer.subscribe,footer.social',
      'footer.navigation.links,footer.subscribe.submitButton,footer.social.link',
    ],
  },
  {
    encodeValuesOnly: true,
  },
);
