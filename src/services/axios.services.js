import axios from "axios";
export const AxiosTodo = async ({ url, method, body, idParams }) => {
    const urls = idParams ? `${url}${idParams}` : `${url}`;
    const response = await axios({
        method,
        url: urls,
        data: body,
    });
    return response.data;
}
