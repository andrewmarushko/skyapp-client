
import { request } from '@/lib/request';
import { PAGE_SEO_QUERY } from '@/query/seo'

import { API_URL, CACHE_DISABLED, REVALIDATE_TIME } from '@/constants/api';

export async function getPageSeo(page: string) {
  const data = await request<any>(
    `${API_URL}/${page}?${PAGE_SEO_QUERY}`,
    { cache: CACHE_DISABLED, next: { revalidate: REVALIDATE_TIME } },
    (error) => {
      console.error(error);
    },
  );

  return data.data.attributes;
}