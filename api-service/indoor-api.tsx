const API_URL = process.env.NEXT_PUBLIC_DEV_URL;

export async function getAllIndoors() {
  const res = await fetch(`${API_URL}/indoors`);
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
  country: string,
  city: string,
  id: number,
) {
  const res = await fetch(`${API_URL}/indoors/${country}/${city}/${id}`);
  const pageContent = await res.json();
  return pageContent;
}
