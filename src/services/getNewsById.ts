import axios from 'axios'

export const getNewsById = (Id: number) => {
    return axios
        .get(`${import.meta.env.VITE_APP_WORDPRESS_WEBSITE}/wp-json/wp/v2/posts/${Id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            return response.data
        })
}
