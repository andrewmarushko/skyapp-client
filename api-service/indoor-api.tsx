import { request } from "@/lib/request";

const API_URL = process.env.NEXT_PUBLIC_DEV_URL;

export async function getAllIndoors() {
  const res = await fetch(`${API_URL}/indoors`, { cache: 'no-store'});
  const pageContent = await res.json();
  return pageContent;
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

export async function getIndoorPageData() {
  const data = await request<any>(`${API_URL}/indoor-page`, { cache: 'no-store'}, (error)=> {
    console.error(error)
  })

  return data;

}