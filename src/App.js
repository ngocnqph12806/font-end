import RouterDOM from "./Router";
import React, {useEffect, useState} from 'react';
import ProductAPI from "./service/ProductAPI";
import {
    getLocalStorage,
    getSessionStorage,
    removeSessionStorage,
    saveLocalStorage,
    saveSessionStorage
} from "./service/UtilsAPI";
import BannerAPI from "./service/BannerAPI";
import CategoryAPI from "./service/CategoryAPI";
import VoucherAPI from "./service/VoucherAPI";
import UserAPI from "./service/UserAPI";
import OrderAPI from "./service/OrderAPI";
import jwt_decode from "jwt-decode";
import {WishlistAPI} from "./service/WishlistAPI";

const App = () => {

    const [codeVoucher, setCodeVoucher] = useState();

    const [cart, setCart] = useState([]);

    const [objFilter, setObjFilter] = useState({});

    const [totalPriceCart, setTotalPriceCart] = useState(0);

    const [listProducts, setListProducts] = useState([]);

    const [listBanners, setListBanners] = useState([]);

    const [listCategories, setListCategories] = useState([]);

    const [listOrders, setListOrders] = useState([]);

    const [userLogin, setUserLogin] = useState();

    const [infoCheckout, setInfoCheckout] = useState({fullName: "", phoneNumber: "", email: ""});

    const [listWishlist, setListWishlist] = useState([]);

    useEffect(() => {
        const getAccesstoken = async () => {
            try {
                let token = getSessionStorage("access_token")
                if (token !== null && token !== undefined && token !== '') {
                    let {data: {access_token}} = await UserAPI.checkLogin();
                    saveSessionStorage("access_token", access_token);
                    setUserLogin(jwt_decode(access_token).sub)
                }
            } catch (e) {
                console.log('Xác nhận accesstoen thất bại')
            }
        }
        getAccesstoken().then(r => null);
        const getListBanner = async () => {
            try {
                let {data} = await BannerAPI.getAll();
                setListBanners(data)
            } catch (e) {
                console.log("Không thể đọc danh sách banner")
            }
        }
        getListBanner().then(r => null);
        const getListCategories = async () => {
            try {
                let {data} = await CategoryAPI.getAll();
                setListCategories(data)
            } catch (e) {
                console.log("Không thể đọc danh sách loại sản phẩm")
            }
        }
        getListCategories().then(r => null)
        const getListProducts = async () => {
            try {
                let response = await ProductAPI.getAll();
                setListProducts([...response.data])
            } catch (e) {
                console.log("Không thể đọc danh sách sản phẩm");
            }
        }
        getListProducts().then(r => null);
        const getCartStorage = () => {
            let cartStorage = getLocalStorage("cart_storage")
            console.log(cartStorage)
            setCart(cartStorage)
        }
        getCartStorage()
    }, []);

    useEffect(() => {
        if (cart !== null && cart !== undefined && cart.length >= 0) {
            fnSetCoceVoucher(codeVoucher).then(r => null)
        }
    }, [cart]);

    useEffect(() => {
        if (userLogin !== null && userLogin !== undefined && userLogin.trim() !== '') {
            const fnGetAllOrdersByUserLogin = async () => {
                let {data} = await OrderAPI.findAllOrderByUserLogin();
                setListOrders(data)
            }
            const fnGetAllWishlistsByUserLogin = async () => {
                let {data} = await WishlistAPI.findAllWishlistByUserLogin();
                setListWishlist(data)
            }
            const fnGetIdByUserLogin = async () => {
                let {data} = await UserAPI.getIdByUsernameLogin(userLogin);
                saveSessionStorage("id_user_login", data)
            }
            fnGetIdByUserLogin().catch(e => console.log('Lỗi get id'))
            fnGetAllOrdersByUserLogin().catch(e => console.log('lỗi get list order'));
            fnGetAllWishlistsByUserLogin().catch(e => console.log(' lỗi get list wishlist'));
        }
    }, [userLogin]);

    const fnSetLogin = async (username, password) => {
        try {
            let {data: {access_token}} = await UserAPI.login(username, password)
            console.log('Đăng nhập thành công')
            console.log(access_token)
            saveSessionStorage("access_token", access_token)
            setUserLogin(username)
            return true;
        } catch (e) {
            removeSessionStorage("access_token")
            setUserLogin(username)
        }
        return false;
    }

    const fnSetInfoCheckout = async () => {
        try {
            let {data} = await UserAPI.getInfoCheckout();
            setInfoCheckout(data);
        } catch (e) {
            console.log('get info checkkout error')
        }
    }

    const fnSetCoceVoucher = async (voucher) => {
        // setCodeVoucher(code)
        if (voucher !== null && voucher !== undefined
            && voucher.code !== null && voucher.code !== undefined && voucher.code !== '') {
            try {
                let {data} = await VoucherAPI.getByCode(voucher)
                setCodeVoucher(data)
                let total = cart.reduce((a, v) => a = a + v.product.price * v.quantity, 0)
                let result = Number(total) - Number(data.priceSale)
                if (Number(Number(total) - Number(data.priceSale)) < 0) {
                    result = 0;
                }
                setTotalPriceCart(result)
                return true;
            } catch (e) {
                console.log("Mã giảm giá không tồn tại")
            }
        }
        let total = cart.reduce((a, v) => a = a + v.product.price * v.quantity, 0)
        setTotalPriceCart(Number(total))
        setCodeVoucher({id: null, code: "", priceSale: 0})
        return false;
    }

    const fnSetCart = (obj) => {
        saveLocalStorage("cart_storage", obj);
        setCart(obj);
        // setTotalPriceCart(cart.reduce((a, v) => a = a + v.product.price * v.quantity, 0))
        fnSetCoceVoucher(codeVoucher).then(r => null)
    }

    const fnAddCart = (quantity, product) => {
        let objCart = cart;
        let objNewCart = {
            product:
                {
                    id: product.id,
                    name: product.name,
                    idPath: product.idPath,
                    path: product.path,
                    price: product.price,
                    image: product.images !== null && product.images !== undefined && product.images.length > 0
                        ? product.images[0].path : ""
                }
            , quantity: Number(quantity)
        }
        if (objCart !== null && objCart !== undefined) {
            if (objCart.length > 0) {
                for (let i = 0; i < objCart.length; i++) {
                    if (objCart[i].product.id !== null && objCart[i].product.id !== undefined && objCart[i].product.id === product.id) {
                        quantity = Number(objCart[i].quantity) + Number(quantity);
                        if (Number(objCart[i].quantity) >= 10) {
                            console.log('Số lượng đã đạt tối đa')
                            return;
                        }
                        if (Number(quantity) > 10) {
                            quantity = 10
                        }
                        objCart[i].quantity = quantity
                        fnSetCart(objCart);
                        console.log('Lưu thành công')
                        return;
                    }
                }
                let objFake = [...objCart, objNewCart]
                fnSetCart(objFake);
                return;
            }
        }
        let objFake = [objNewCart]
        fnSetCart(objFake);
        console.log('Lưu thành công')
    }

    return (
        <>
            <RouterDOM
                listProducts={listProducts}
                listBanners={listBanners}
                listCategories={listCategories}
                objFilter={objFilter}
                cart={cart}
                fnAddCart={fnAddCart}
                setCart={fnSetCart}
                totalPriceCart={totalPriceCart}
                setCodeVoucher={fnSetCoceVoucher}
                codeVoucher={codeVoucher}
                userLogin={userLogin}
                fnSetLogin={fnSetLogin}
                infoCheckout={infoCheckout}
                fnSetInfoCheckout={fnSetInfoCheckout}
                listWishlist={listWishlist}
                setListWishlist={setListWishlist}
                listOrders={listOrders}
                setListOrders={setListOrders}
            />
        </>
    );
};

export default App;

