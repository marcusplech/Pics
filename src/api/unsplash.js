import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID dLjMK2iF6TEcYF3SPjkdzYg7GJBL4ocjPOT4vcdTD5M",
    },
});
