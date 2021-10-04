import React from 'react';
import {LoginAPI, ServerAPI} from "./AxiosAPI";

const UserAPI = {
    login(username, password) {
        let url = `/login`
        return LoginAPI.post(url, `username=${username}&password=${password}`)
    },
    getById(id) {
        let url = `/users/${id}`
        return ServerAPI.get(url)
    },
    add(obj){
      let url = `/users`
      return ServerAPI.post(url, obj)
    },
    update(obj) {
        let url = `/users/${obj.id}`;
        return ServerAPI.get(url, obj)
    },
    changePassword(oldPassword, newPassword) {
        let url = `/users/change-password`
        return ServerAPI.post(url, {newPassword: newPassword, oldPassword: oldPassword})
    }
};

export default UserAPI;
