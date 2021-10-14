import React, {useEffect, useState} from 'react';
import HomeView from "../view/HomeView";
import ProductAPI from "../service/ProductAPI";
import $ from 'jquery'
import {WishlistAPI} from "../service/WishlistAPI";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

const HomePage = (props) => {

    let history = useHistory();

    const [listAllProducts, setListAllProducts] = useState([]);

    const [listProductOrderByMost, setListProductOrderByMost] = useState([]);

    const [numberPageListAllProductNow, setNumberPageListAllProductNow] = useState(0);

    useEffect(() => {
        fnGetAllProduct().then()
        fnGetProductByMostOrder().then()
    }, []);


    useEffect(() => {
        fnGetAllProduct().then()
    }, [numberPageListAllProductNow]);

    const fnGetAllProduct = async () => {
        await ProductAPI.filterAndSort("", numberPageListAllProductNow, 9, "", "")
            .then(s => {
                let {data} = s
                setListAllProducts([...listAllProducts, ...data])
                if (data.length < 9) {
                    let idBtnLoadMoreProduct = $('#load-more-product')
                    idBtnLoadMoreProduct[0].hidden = true
                }
            }).catch(e => {
                console.log("get list false")
            })
    }

    const fnGetProductByMostOrder = async () => {
        await ProductAPI.getByMostOrder()
            .then(s => {
                let {data} = s
                console.log(data)
                setListProductOrderByMost(data)
            }).catch(e => {
                console.log("get list false")
            })
    }

    const fnLoadMoreProduct = () => {
        let numberPage = numberPageListAllProductNow + 1
        setNumberPageListAllProductNow(numberPage)
    }

    // const fnWishlist = (product) => {
    //     if (props.userLogin !== null && props.userLogin !== undefined && props.userLogin !== '') {
    //         let objWishlist = {idProduct: product.id}
    //         WishlistAPI.update(objWishlist)
    //             .then(r => {
    //                     if (r.data) {
    //                         props.setListWishlist([...props.listWishlist, objWishlist])
    //                         console.log("Đã thêm yêu thích")
    //                     } else {
    //                         if (props.listWishlist !== null && props.listWishlist !== undefined) {
    //                             let arrWishlistFake = props.listWishlist.filter(e => e.idProduct !== objWishlist.idProduct)
    //                             props.setListWishlist(arrWishlistFake);
    //                         }
    //                         console.log("Đã huỷ yêu thích")
    //                     }
    //                 }
    //             )
    //     } else {
    //         history.push("/login")
    //     }
    // }

    return (
        <>
            <HomeView
                listAllProducts={listAllProducts}
                listProductOrderByMost={listProductOrderByMost}
                fnLoadMoreProduct={fnLoadMoreProduct}
                fnAddCart={props.fnAddCart}
                fnWishlist={props.fnWishlist}
                listCategories={props.listCategories}
            />
        </>
    );
};

export default HomePage;
