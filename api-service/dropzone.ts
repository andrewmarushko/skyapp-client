import { API_URL, CACHE_DISABLED, REVALIDATE_TIME } from '@/constants/api';
import { request } from '@/lib/request';
import {
  DROPZONES_QUERY,
  DROPZONE_PAGE_QUERY,
} from '@/api-service/queries/dropzone';
import qs from 'qs';

export async function fetchDropzonePageData() {
  const data = await request<any>(
    `${API_URL}/dropzone-page?${DROPZONE_PAGE_QUERY}`,
    { cache: CACHE_DISABLED, next: { revalidate: REVALIDATE_TIME } },
    (error) => {
      console.error(error);
    },
  );

  return data.data.attributes;
}

export async function fetchAllDropzones() {
  const dropzones = await request<any>(
    `${API_URL}/dropzones?${DROPZONES_QUERY}`,
    { cache: CACHE_DISABLED },
    (error) => {
      console.error(error);
    },
  );

  return dropzones.data;
}

export async function fetchDropzone(slug: string) {
  const dropzone = await request<any>(
    `${API_URL}/dropzones/${slug}?${DROPZONES_QUERY}`,
    { cache: CACHE_DISABLED },
    (error) => {
      console.error(error);
    },
  );

  return dropzone.data;
}

export async function fetchDropzoneSEO(slug: string) {
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
    `${API_URL}/dropzones/?${DROPZONE_SEO_QUERY}`,
    { cache: CACHE_DISABLED },
    (error) => {
      console.error(error);
    },
  );

  return seo.data[0].attributes.seo;
}
