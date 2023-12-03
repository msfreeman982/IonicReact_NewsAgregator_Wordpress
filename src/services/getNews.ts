import axios from 'axios'

export const getNewsList = () => {
    return axios
        .get(`${import.meta.env.VITE_APP_WORDPRESS_WEBSITE}/wp-json/wp/v2/posts?orderby=date`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            return response.data
        })
}
