import {ServerAPI} from "./AxiosAPI";

export const WishlistAPI = {
    getAllByUser() {
        let url = `/wish-list?single`
        return ServerAPI.get(url)
    },
    update(obj) {
        let url = "/wish-list"
        return ServerAPI.post(url, obj);
    }
}