import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '60b8fa37f0bc4226a25f6d41e9760b88'
    }
})
