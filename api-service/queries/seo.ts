import qs from "qs";

export const PAGE_SEO_QUERY = qs.stringify({
    populate: [
        'seo',
        'seo.format_description,seo.robots,seo.twitter,seo.viewport',
        'seo.robots.google_bot'
    ]
})