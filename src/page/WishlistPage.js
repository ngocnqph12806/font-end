import React, {useEffect, useState} from 'react';
import CardProductHome from "../layout/home/CardProductHome";
import {WishlistAPI} from "../service/WishlistAPI";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

const WishlistPage = (props) => {

    let history = useHistory();

    const [listProductWishlist, setListProductWishlist] = useState([]);

    useEffect(() => {
        reloadListWishlist();
    }, []);

    useEffect(() => {
        reloadListWishlist();
    }, [props.listWishlist]);

    function reloadListWishlist() {
        let arrFake = [];
        props.listWishlist.forEach(wishlist => {
            props.listProducts.forEach(product => {
                if (product.id === wishlist.idProduct) {
                    arrFake.push(product)
                }
            })
        })
        setListProductWishlist(arrFake)
    }

    return (
        <>
            <div className="container">
                <h3 className="mt-2 card-title mb-6">Danh sách sản phẩm yêu thích</h3>
                <div className="row mb-3">
                    {
                        listProductWishlist !== null && listProductWishlist !== undefined ?
                            listProductWishlist.map((wishlist, index) => (
                                <CardProductHome
                                    fnAddCart={props.fnAddCart}
                                    fnWishlist={props.fnWishlist}
                                    product={wishlist}
                                    key={`wishlist${index}`}/>
                            )) : null
                    }
                </div>
            </div>
        </>
    );
};

export default WishlistPage;
