import React, {useEffect, useState} from 'react';
import ListProductView from "../view/ListProductView";
import {useParams} from "react-router-dom";

const ListProductPage = (props) => {

    let {idPath, path} = useParams();

    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        if (idPath !== null && idPath !== undefined && path !== null && path !== undefined) {
            console.log('vào đây')
            props.listCategories.map(category => category.idPath === Number(idPath) && category.path === path ? setListProducts(category.products) : null)
        } else {
            setListProducts(props.listProducts)
        }
    }, [idPath, path, props.listProducts, props.listCategories]);


    return (
        <>
            <ListProductView
                listProducts={listProducts}
                listCategories={props.listCategories}
                filterPrice={props.filterPrice}
                filterColor={props.filterColor}
            />
        </>
    );
};

export default ListProductPage;
