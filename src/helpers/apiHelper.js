import axios from "axios"
import Oauth1Helper from "./authHelper";

export const Get = async ({ url, method = "GET", params }) => {
    const request = {
        url,
        method,
    };

    const authHeader = Oauth1Helper.getAuthHeaderForRequest(request);

    const { data } = await axios.get(request.url, {
        headers: authHeader,
    });

    return data
}
