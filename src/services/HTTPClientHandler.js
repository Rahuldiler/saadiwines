import axios from "axios";

export default class HTTPClientHandler {
    constructor() {
        axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL
        this.headers = {}
    }

    getToken(){
        if (typeof window !== "undefined") {
            return  window.localStorage.getItem("jwtToken");
        } else {
            return  null;
        }
    }

    get = async (options) => {
        let headers = {...options.headers, ...this.headers};
        headers = options.isSecured ? {...headers, Authorization: `Bearer ${this.getToken()}`} : headers;
        return await axios.get(options.url, {params: options.params, headers});
    }

    post = async (options) => {
        let headers = {...options.headers, ...this.headers};
        headers = options.isSecured ? {...headers, Authorization: `Bearer ${this.getToken()}`} : headers;
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
        let headers = {...options.headers, ...this.headers};
        headers = options.isSecured ? {...headers, Authorization: `Bearer ${this.getToken()}`} : headers;
        return await axios.put(options.url,
            options.payload,
            {
                params: options.params,
                headers
            }
        )
    }
    delete = async (options) => {
        let headers = {...options.headers, ...this.headers};
        headers = options.isSecured ? {...headers, Authorization: `Bearer ${this.getToken()}`} : headers;
        return await axios.delete(options.url,
            {
                params: options.params,
                headers
            }
        )
    }
}
