import React from 'react';
import TopBarHeader from "./headder/TopBarHeader";
import NavBarHeader from "./headder/NavBarHeader";

const HeaderDOM = (props) => {
    return (
        <>
            <header className="header">
                <TopBarHeader/>
                <NavBarHeader
                    listCategories={props.listCategories}
                    cart={props.cart}
                    setCart={props.setCart}
                    totalPriceCart={props.totalPriceCart}
                />
                {/* End .header-middle */}
            </header>
            {/* End .header */}
        </>
    );
};

export default HeaderDOM;
