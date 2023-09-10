import { Get } from "../helpers/apiHelper"

export const getProducts = async () => {
    const products = await Get({ url: "https://server.moreo.pk/wp-json/wc/v3/products" })
    return products
}

export const getProduct = async (id) => {
    const product = await Get({ url: `https://server.moreo.pk/wp-json/wc/v3/products/${id}` })
    return product
}
