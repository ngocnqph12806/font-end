import React from 'react';
import CartView from "../view/CartView";

const CartPage = (props) => {

    const fnChangeQuantity = (e) => {
        let objProductCart = e;
        objProductCart.quantity = Number(document.getElementById(e.product.id).value)
        if (props.cart !== null && props.cart !== undefined && props.cart.length > 0) {
            let arrCartFake = props.cart.map(p => p.product.id === e.product.id ? e : p)
            props.setCart(arrCartFake)
        }
    }

    const fnRemoveProductInCart = (e) => {
        if (props.cart !== null && props.cart !== undefined && props.cart.length > 0) {
            let arrCartFake = props.cart.filter(p => p.product.id !== e.product.id)
            props.setCart(arrCartFake)
        }
    }

    const fnUseCodeVouher = () => {
        let code = document.getElementById('add-code-voucher-cart').value
        if (code === null || code === undefined || code.trim() === '') {
            console.log("Mã giảm giá không được để trống")
            return;
        }
        props.setCodeVoucher({code: code}) ? console.log("Đã áp dụng code") : console.log("Code không hợp lệ")
    }

    return (
        <>
            <CartView
                cart={props.cart}
                setCart={props.setCart}
                totalPriceCart={props.totalPriceCart}
                codeVoucher={props.codeVoucher}
                fnRemoveProductInCart={fnRemoveProductInCart}
                fnChangeQuantity={fnChangeQuantity}
                fnUseCodeVouher={fnUseCodeVouher}
            />
        </>
    );
};

export default CartPage;
