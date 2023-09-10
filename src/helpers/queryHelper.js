export const queryStringToObject = (url) => {
    const urlSearchParams = new URLSearchParams(url.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params
}