import React from 'react';
import {ServerAPI} from "./AxiosAPI";

const OrderAPI = {
    getAllByUser() {
        let url = `/orders?single`;
        return ServerAPI.get(url);
    },
    getById(id) {
        let url = `/orders?id=${id}`;
        return ServerAPI.get(url);
    },
    add(obj) {
        let url = `/orders`
        return ServerAPI.post(url, obj)
    },
    update(obj) {
        let url = `/orders/${obj.id}`
        return ServerAPI.post(url, obj)
    }
};

export default OrderAPI;
