
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


export async function getIndoorsByCountry(country: string) {
  const res = await fetch(`${API_URL}/indoors/${country}`);
  const pageContent = await res.json();
  return pageContent;
}

export async function getIndoorsByCity(country: string, city: string) {
  const res = await fetch(`${API_URL}/indoors/${country}/${city}`);
  const pageContent = await res.json();
  return pageContent;
}

export async function getIndoorsByID(
  slug: string
) {
  const res = await fetch(`${API_URL}/indoors/${slug}`, {
    cache: 'no-store',
  });
  const pageContent = await res.json();
  return pageContent;
}

export async function getIndoorsData() {
  const res = await fetch(`${API_URL}/indoors?limit=10`);
  const pageContent = await res.json();
  return pageContent;
}

export async function getIndoorPageData() {
  const data = await request<any>(`${API_URL}/indoor-page`, { cache: 'no-store'}, (error)=> {
    console.error(error)
  })

  return data;
}
