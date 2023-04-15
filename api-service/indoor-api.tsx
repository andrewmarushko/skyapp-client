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

export async function getFooterData() {
  const data = await request<any>(`${API_URL}/general?populate[0]=footer&populate[1]=footer.links,footer.copyright,footer.subscribe,footer.social&populate[2]=footer.navigation.links,footer.subscribe.submitButton,footer.social.link`, { cache: 'force-cache' }, (error)=> {
    console.error(error)
  })

  return data.data.attributes;
}

export async function getLogoData() {
  const data = await request<any>(`${API_URL}/general?populate[0]=logo&populate[1]=logo.logok`, { cache: 'force-cache' }, (error)=> {
    console.error(error)
  })

  return data.data.attributes;
}

export async function getNavigationData() {
  const data = await request<any>(`${API_URL}/general?populate[0]=mainNavigation&populate[1]=mainNavigation.navigationLinks,mainNavigation.panel&populate[2]=mainNavigation.panel.push,mainNavigation.panel.links&populate[3]=mainNavigation.panel.push.link,mainNavigation.panel.links.link`, { cache: 'force-cache' }, (error)=> {
    console.error(error)
  })

  return data.data.attributes;
}