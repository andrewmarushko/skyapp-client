export const API_URL = process.env.NEXT_PUBLIC_DEV_URL
export const REVALIDATE_TIME = 86_400 // One day in seconds

// If nextjs will change this value in the feature.
export const CACHE_ENABLED = 'force-cache'
export const CACHE_DISABLED = 'no-store'