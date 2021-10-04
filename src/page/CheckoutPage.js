import React from 'react';
import CheckoutView from "../view/CheckoutView";
import $ from 'jquery'

const CheckoutPage = (props) => {

    const fnUseCodeVouher = () => {
        let code = document.getElementById('add-code-voucher-checkout').value
        if (code === null || code === undefined || code.trim() === '') {
            console.log("Mã giảm giá không được để trống")
            return;
        }
        props.setCodeVoucher(code) ? console.log("Đã áp dụng code") : console.log("Code không hợp lệ")
    }

    const fnSaveCheckout = () => {
        console.log($('.collapse.show')[0].id)
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
        if(props.codeVoucher!==null && props.codeVoucher!==undefined){
            obj['idVoucher'] = props.codeVoucher.id
            obj['codeVoucher'] = props.codeVoucher.code
            obj['priceVoucher'] = props.codeVoucher.priceSale
        }
        console.log(obj)
    }

    return (
        <>
            <CheckoutView
                cart={props.cart}
                totalPriceCart={props.totalPriceCart}
                codeVoucher={props.codeVoucher}
                fnUseCodeVouher={fnUseCodeVouher}
                fnSaveCheckout={fnSaveCheckout}
            />
        </>
    );
};

export default CheckoutPage;
