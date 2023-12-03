import axios from 'axios'

export const getCategoryList = () => {
    return axios
        .get(`${import.meta.env.VITE_APP_WORDPRESS_WEBSITE}/wp-json/wp/v2/categories`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            return response.data
        })
}
