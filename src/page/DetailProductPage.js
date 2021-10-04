import React, {useEffect, useState} from 'react';
import DetailProductView from "../view/DetailProductView";
import {useParams} from "react-router-dom";
import {WishlistAPI} from "../service/WishlistAPI";
import UserAPI from "../service/UserAPI";

const DetailsProductPage = (props) => {

    const [product, setProduct] = useState({});

    const [listProductOfCategory, setListProductOfCategory] = useState([]);

    let {idPath, path} = useParams();

    useEffect(() => {
        if (idPath !== null && idPath !== undefined && path !== null && path !== undefined) {
            props.listProducts.map(product => product.idPath === Number(idPath) && product.path === path ? setProduct(product) : null)
        }
    }, [idPath, path, props.listProducts]);

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        props.listProducts !== null && props.listProducts !== undefined
            ? props.listProducts.filter(e => e.idCategory === product.idCategory
                ? setListProductOfCategory([...listProductOfCategory, e])
                : null)
            : null
    }, [product]);

    const fnAddCart = () => {
        let quantity = document.getElementById('qty').value
        let objCart = props.cart;
        console.log(objCart)
        if (objCart !== null && objCart !== undefined && objCart.length > 0) {
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
                    props.setCart(objCart);
                    console.log('Lưu thành công')
                    return;
                }
            }
        }
        let objFake = [...objCart, {
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
        }]
        props.setCart(objFake);
        console.log('Lưu thành công')
    }

    const fnWishlist = async () => {
        let {data: {access_token}} = await UserAPI.login("username", "12345678")
        console.log(access_token)
        console.log('đã đăng nhập')
        // let objWishlist = {idProduct: product.id, idVisit: "123"}
        // console.log(objWishlist)
        // let result = WishlistAPI.save(objWishlist);
        // console.log(result)
    }

    return (
        <>
            <DetailProductView
                product={product}
                listProductOfCategory={listProductOfCategory}
                fnAddCart={fnAddCart}
                fnWishlist={fnWishlist}
            />
        </>
    );
};

export default DetailsProductPage;
