import axios from "axios";

export default class HTTPClientHandler {
    constructor() {
        console.log(process.env.NEXT_PUBLIC_API_URL);
        axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL
    }

    get = async (options) => {
        return await axios.get(options.url, {params: options.params, headers: options.headers})
    }

    post = async (options) => {
        return await axios.post(
            options.url,
            options.payload,
            {
                baseURL: this.baseURL,
                params: options.params,
                headers: options.headers
            }
        )
    }
    put = async (options) => {
        return await axios.post(options.url,
            options.payload,
            {
                params: options.params,
                headers: options.headers
            }
        )
    }
    delete = async (options) => {
        return await axios.post(options.url,
            {
                params: options.params,
                headers: options.headers
            }
        )
    }
}
