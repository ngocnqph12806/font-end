import React, {useEffect, useState} from 'react';
import ListProductView from "../view/ListProductView";
import {useParams} from "react-router-dom";
import $ from 'jquery'
import ProductAPI from "../service/ProductAPI";

const ListProductPage = (props) => {

    let {idPath, path} = useParams();

    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        if (idPath !== null && idPath !== undefined && path !== null && path !== undefined) {
            props.listCategories.map(category => category.idPath === Number(idPath) && category.path === path ? setListProducts(category.products) : null)
        } else {
            setListProducts(props.listProducts)
        }
    }, [idPath, path, props.listProducts, props.listCategories]);

    const fnAddCart = (product) => {
        let quantity = 1
        props.fnAddCart(quantity, product)
    }

    const fnFilterCategory = async () => {
        console.log($('#form-filter-product').serialize())
        let getSerialize = $('#form-filter-product').serialize();
        let {data} = await ProductAPI.filter(getSerialize)
        console.log(data)
       //  console.log()
       //  let getNameFilterCategory = $("[name*='filter-category']")
       //  // eslint-disable-next-line array-callback-return
       //  let arrFilterFake = getNameFilterCategory.filter((index, e) => e.checked);
       //  let idCategory = []
       //  for (let i = 0; i < arrFilterFake.length; i++) {
       //      console.log(arrFilterFake[i].id)
       //      idCategory[i] = arrFilterFake[i].id
       //  }
       //  let obj = {
       //      idCategory: idCategory
       //  }
       // let {data} = await ProductAPI.filterAll(obj);
       //  console.log(data)
    }

    return (
        <>
            <ListProductView
                listProducts={listProducts}
                listCategories={props.listCategories}
                objFilter={props.objFilter}
                fnAddCart={fnAddCart}
                fnFilterCategory={fnFilterCategory}
            />
        </>
    );
};

export default ListProductPage;
