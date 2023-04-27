import { API_URL, CACHE_DISABLED, CACHE_ENABLED,  REVALIDATE_TIME } from "@/constants/api";
import { request } from "@/lib/request";
import { INDOOR_PAGE_QUERY, INDOOR_QUERY } from "./queries/indoor";


export async function getIndoorPageData() {
    const data = await request<any>(`${API_URL}/indoor-page?${INDOOR_PAGE_QUERY}`, { cache: CACHE_DISABLED, next: { revalidate: REVALIDATE_TIME } }, (error) => {
        console.error(error)
    })

    return data.data.attributes;
}

export async function fetchAllTubes() {

  const indoors = await request<any>(`${API_URL}/indoors?${INDOOR_QUERY}`, { cache: CACHE_DISABLED}, error => {
    console.error(error)
  })

  return indoors.data;
}

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

