import jwt_decode from 'jwt-decode';

export const saveTokenStorage = (data) => {
    return sessionStorage.setItem('jwt', JSON.stringify(data));
}
export const getTokenStorage = () => {
    return JSON.parse(sessionStorage.getItem('jwt'));
}
export const removeTokenStorage = () => {
    return sessionStorage.removeItem('jwt');
}
export const jwtDecode = accessToken => {
    return jwt_decode(accessToken)
}