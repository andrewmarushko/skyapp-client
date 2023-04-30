import qs from 'qs'

export const INDOOR_PAGE_QUERY = qs.stringify({
    populate: [
    'hero,become_partner,become_partner.link',
    ],
},
{
    encodeValuesOnly: true,
});

export const INDOOR_QUERY = qs.stringify({
  populate: [
    'cover,location,tube_logo',
  ]

}, {
    encodeValuesOnly: true,
  })

