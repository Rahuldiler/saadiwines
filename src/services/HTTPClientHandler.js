import axios from "axios";

export default class HTTPClientHandler {
    constructor() {
        axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL
        if (typeof window !== "undefined") {
            this.token = window.localStorage.getItem("jwtToken");
        } else {
            this.token = null;
        }

    }

    get = async (options) => {
        let headers = options.headers;
        headers = options.isSecured ? {...headers, Authorization: `Bearer ${this.token}`} : headers;
        return await axios.get(options.url, {params: options.params, headers});
    }

    post = async (options) => {
        let headers = options.headers;
        headers = options.isSecured ? {...headers, Authorization: `Bearer ${this.token}`} : headers;
        return await axios.post(
            options.url,
            options.payload,
            {
                params: options.params,
                headers
            }
        )
    }
    put = async (options) => {
        let headers = options.headers;
        headers = options.isSecured ? {...headers, Authorization: `Bearer ${this.token}`} : headers;
        return await axios.put(options.url,
            options.payload,
            {
                params: options.params,
                headers
            }
        )
    }
    delete = async (options) => {
        let headers = options.headers;
        headers = options.isSecured ? {...headers, Authorization: `Bearer ${this.token}`} : headers;
        return await axios.post(options.url,
            {
                params: options.params,
                headers
            }
        )
    }
}