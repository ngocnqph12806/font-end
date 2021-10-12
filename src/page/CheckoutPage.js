import React, {useEffect} from 'react';
import CheckoutView from "../view/CheckoutView";
import $ from 'jquery'
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import ProductAPI from "../service/ProductAPI";
import OrderAPI from "../service/OrderAPI";

const CheckoutPage = (props) => {

    let history = useHistory();

    useEffect(() => {
        const checkLogin = () => {
            console.log("user: " + props.userLogin)
            if (props.userLogin == null || props.userLogin.trim() === '') {
                history.push("/login")
            }
        }
        checkLogin();
    }, []);


    const fnUseCodeVouher = () => {
        let code = document.getElementById('add-code-voucher-checkout').value
        if (code === null || code === undefined || code.trim() === '') {
            console.log("Mã giảm giá không được để trống")
            return;
        }
        props.setCodeVoucher(code) ? console.log("Đã áp dụng code") : console.log("Code không hợp lệ")
    }

    const fnSaveCheckout = async () => {
        let form = $('#id-form-checkout').serializeArray()
        let obj = {}
        for (let i = 0; i < form.length; i++) {
            obj[form[i].name] = form[i].value
        }
        obj['paymentMethod'] = $('.collapse.show')[0].id
        if (props.cart !== null && props.cart !== undefined && props.cart.length >= 0) {
            let arrCartFake = [props.cart.length];
            let indexArrCartFake = 0;
            for (let i = 0; i < props.cart.length; i++) {
                let objCartFake = {};
                objCartFake['idProduct'] = props.cart[i].product.id
                objCartFake['price'] = props.cart[i].product.price
                objCartFake['priceSale'] = 0
                objCartFake['quantity'] = props.cart[i].quantity
                arrCartFake[indexArrCartFake] = objCartFake
                ++indexArrCartFake
            }
            obj['details'] = arrCartFake
        }
        if (props.codeVoucher !== null && props.codeVoucher !== undefined) {
            obj['idVoucher'] = props.codeVoucher.id
            obj['codeVoucher'] = props.codeVoucher.code
            obj['priceVoucher'] = props.codeVoucher.priceSale
        }
        console.log(obj)
        await OrderAPI.save(obj)
            .then(s => {
                console.log('Thêm hoá đơn thành công')
                props.setCart({});

            })
            .catch(e => {
                console.log('Thêm hoá đơn thất bại')

            });

    }

    const fnClickGetInfoCheckout = (e) => {
        if (e.target.checked) {
            props.fnSetInfoCheckout()
        }
    }

    return (
        <>
            <CheckoutView
                cart={props.cart}
                totalPriceCart={props.totalPriceCart}
                codeVoucher={props.codeVoucher}
                fnUseCodeVouher={fnUseCodeVouher}
                fnSaveCheckout={fnSaveCheckout}
                infoCheckout={props.infoCheckout}
                fnClickGetInfoCheckout={fnClickGetInfoCheckout}
            />
        </>
    );
};

export default CheckoutPage;
