import axios from 'axios'

export const getNewsByPage = (page?: number) => {
    return axios
        .get(`${import.meta.env.VITE_APP_WORDPRESS_WEBSITE}/wp-json/wp/v2/posts?page=${page}&per_page=10`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            return response.data
        })
}
