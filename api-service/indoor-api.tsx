const API_URL = process.env.NEXT_PUBLIC_DEV_URL;
const GOOGLE_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

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
  const res = await fetch(`${API_URL}/indoors/${country}/${city}/${id}`, { cache: 'no-store' });
  const pageContent = await res.json();
  return pageContent;
}

export async function getIndoorsData() {
  const res = await fetch(`${API_URL}/indoors?limit=10`);
  const pageContent = await res.json();
  return pageContent;
}

export async function getYoutubeVideosById(channelId: string) {
  const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_KEY}&channelId=${channelId}&part=snippet&order=viewCount&maxResults=9`);
  const pageContent = await res.json();
  return pageContent;
}

export async function getGooglePlaceReviewsById(placeId: string) {
  const res = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${GOOGLE_KEY}`);
  const pageContent = await res.json();
  return pageContent;
}