import qs from 'qs'

export const INDOOR_PAGE_QUERY = qs.stringify({
    populate: [
    'hero,become_partner,become_partner.link',
    ],
},
{
    encodeValuesOnly: true,
});

export const INDOOR_QUERY = qs.stringify(
  {
    populate: ['cover','location','logo','marketing'],
  },
  {
    encodeValuesOnly: true,
  })

export const PROMOTED_INDOORS_QUERY = qs.stringify({
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