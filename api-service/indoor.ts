import {
  API_URL,
  CACHE_DISABLED,
  CACHE_ENABLED,
  REVALIDATE_TIME,
} from '@/constants/api';
import { request } from '@/lib/request';
import {
  INDOOR_PAGE_QUERY,
  INDOOR_QUERY,
  PROMOTED_INDOORS_QUERY,
} from './queries/indoor';
import qs from 'qs';

export async function getIndoorPageData() {
  const data = await request<any>(
    `${API_URL}/indoor-page?${INDOOR_PAGE_QUERY}`,
    { cache: CACHE_DISABLED, next: { revalidate: REVALIDATE_TIME } },
    (error) => {
      console.error(error);
    },
  );

  return data.data.attributes;
}

export async function fetchAllTubes(
  searchParam: string = '',
  currentPage: number,
) {
  const INDOOR_SEARCH_QUERY = qs.stringify(
    {
      pagination: {
        start: currentPage,
        limit: !!searchParam ? 300 : 2,
      },
      filters: {
        slug: {
          $containsi: searchParam,
        },
      },
      populate: ['cover', 'location', 'logo'],
    },
    {
      encodeValuesOnly: true,
    },
  );

  const indoors = await request<any>(
    `${API_URL}/indoors?${INDOOR_SEARCH_QUERY}`,
    { cache: CACHE_DISABLED },
    (error) => {
      console.error(error);
    },
  );

  return indoors.data;
}

export async function fetchTube(slug: string) {
  const indoor = await request<any>(
    `${API_URL}/indoors/${slug}?${INDOOR_QUERY}`,
    { cache: CACHE_ENABLED, next: { revalidate: 0 } },
    (error) => {
      console.error(error);
    },
  );

  return indoor.data;
}

export async function fetchIndoorSEO(slug: string) {
  const DROPZONE_SEO_QUERY = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ['seo', 'seo.format_description', 'seo.viewport', 'seo.robots'],
    },
    {
      encodeValuesOnly: true,
    },
  );
  const seo = await request<any>(
    `${API_URL}/indoors/?${DROPZONE_SEO_QUERY}`,
    { cache: CACHE_ENABLED, next: { revalidate: 60 } },
    (error) => {
      console.error(error);
    },
  );

  return seo.data[0].attributes.seo;
}

export async function fetchPromotedIndoors() {
  const promoted = await request<any>(
    `${API_URL}/indoors?${PROMOTED_INDOORS_QUERY}`,
    { cache: CACHE_DISABLED },
    (error) => {
      console.error(error);
    },
  );

  return promoted.data;
}
