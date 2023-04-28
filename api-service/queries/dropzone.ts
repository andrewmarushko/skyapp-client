import qs from 'qs'

export const DROPZONE_PAGE_QUERY = qs.stringify({
    populate: [
        'hero'
    ]
},
{
    encodeValuesOnly: true,
})

export const DROPZONES_QUERY = qs.stringify({
    populate: [
        'cover',
        'location'
    ]
},
{
    encodeValuesOnly: true,
})
