import { API_URL, CACHE_DISABLED, CACHE_ENABLED, REVALIDATE_TIME } from "@/constants/api";
import { request } from "@/lib/request";
import { PAGE_SEO_QUERY } from "@/api-service/queries/seo";

export async function getPageSeo(page: string) {
    console.log(`${API_URL}/${page}?${PAGE_SEO_QUERY}`)
    const data = await request<any>(`${API_URL}/${page}?${PAGE_SEO_QUERY}`, { cache: CACHE_DISABLED }, (error) => {
        console.error(error)
    })

    return data.data.attributes;
}