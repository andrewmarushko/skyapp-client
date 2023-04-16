import { request } from '@/lib/request'
import { FOOTER_QUERY, LOGO_QUERY, NAVIGATION_QUERY } from '@/api-service/queries/general'
import { API_URL, CACHE_ENABLED, REVALIDATE_TIME } from '@/constants/api'


export async function getFooterData() {
    const data = await request<any>(`${API_URL}/general?${FOOTER_QUERY}`, { cache: CACHE_ENABLED, next: { revalidate: REVALIDATE_TIME } }, (error) => {
        console.error(error)
    })

    return data.data.attributes;
}

export async function getLogoData() {
    const data = await request<any>(`${API_URL}/general?${LOGO_QUERY}`, { cache: CACHE_ENABLED, next: { revalidate: REVALIDATE_TIME } }, (error) => {
        console.error(error)
    })

    return data.data.attributes;
}

export async function getNavigationData() {
    const data = await request<any>(`${API_URL}/general?${NAVIGATION_QUERY}`, { cache: CACHE_ENABLED, next: { revalidate: REVALIDATE_TIME } }, (error) => {
        console.error(error)
    })

    return data.data.attributes;
}