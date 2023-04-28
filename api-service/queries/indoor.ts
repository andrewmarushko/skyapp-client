
import qs from 'qs'

import { request } from "@/lib/request";
import { API_URL } from '@/constants/api';


export const INDOOR_PAGE_QUERY = qs.stringify({
    populate: [
    'hero',
    ],
},
{
    encodeValuesOnly: true,
});

export const INDOOR_QUERY = qs.stringify({
  populate: [
    'cover,location',
  ]

}, {
    encodeValuesOnly: true,
  })