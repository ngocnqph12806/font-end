import {ServerAPI} from "./AxiosAPI";

const ProductAPI = {
    getAll() {
        let url = `/product`;
        return ServerAPI.get(url);
    },
    getFieldFilterById(id) {
        let url = `/product/${id}?field-filter`;
        return ServerAPI.get(url)
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
    },
    saveReview(obj) {
        let url = `/reviews`
        return ServerAPI.post(url, obj);
    },
    filterAll(obj) {
        let url = `/product`;
        return ServerAPI.get(url, obj);
    }
}

export default ProductAPI