import { Get } from "../helpers/apiHelper"

export const getCategories = async () => {
    const products = await Get({ url: "https://server.moreo.pk/wp-json/wc/v3/products/categories" })
    return products
}
