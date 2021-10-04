import {ServerAPI} from "./AxiosAPI";

const ProductAPI = {
    getAll() {
        let url = `/product`;
        return ServerAPI.get(url);
    },
    getPage(p, s) {
        let url = `/product?_p=${p}&_s=${s}`;
        return ServerAPI.get(url);
    },
    getPageAndSort(p, s, field, sort) {
        let url = `/product?_p=${p}&_s=${s}&field=${field}&sort=${sort}`;
        return ServerAPI.get(url);
    },
    search(value) {
        let url = `/product?_s=${value}`;
        return ServerAPI.get(url);
    },
    filter(value) {
        let url = `/product?${value}`;
        return ServerAPI.get(url);
    },
    getById(id) {
        let url = `/product/${id}`;
        return ServerAPI.get(url);
    }
}

export default ProductAPI