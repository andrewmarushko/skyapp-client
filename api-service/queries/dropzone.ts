import qs from 'qs';

export const DROPZONE_PAGE_QUERY = qs.stringify(
  {
    populate: ['hero'],
  },
  {
    encodeValuesOnly: true,
  },
);

export const DROPZONES_QUERY = qs.stringify(
  {
    populate: ['cover', 'location'],
  },
  {
    encodeValuesOnly: true,
  },
);

export const PROMOTED_DROPZONE_QUERY = qs.stringify({
  filters: [
    {
      marketing: {
        promoted: {
          $eq: true
        }
      }
    }
  ],
  populate: [
    'cover',
    'location',
    'logo'
  ]
}, { encodeValuesOnly: true })