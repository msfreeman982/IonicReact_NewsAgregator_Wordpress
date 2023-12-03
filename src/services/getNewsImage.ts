import axios from 'axios'

export const getNewsImage = (Id: number) => {
    return axios
        .get(`${import.meta.env.VITE_APP_WORDPRESS_WEBSITE}/wp-json/wp/v2/media/${Id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response: { data: { source_url: string } }) => {
            return response.data.source_url
        })
}
