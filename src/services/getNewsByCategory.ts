import axios from 'axios'

export const getNewsByCategory = (categoriesId?: number) => {
    return axios
        .get(
            `${import.meta.env.VITE_APP_WORDPRESS_WEBSITE}/wp-json/wp/v2/posts?categories=${categoriesId}&per_page=10`,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        .then((response) => {
            return response.data
        })
}
