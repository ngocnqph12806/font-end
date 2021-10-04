import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import SideBarListProduct from "../layout/product/SideBarListProduct";

const ListProductView = ({listProducts, listCategories, filterPrice, filterColor}) => {

    const [introProduct, setIntroProduct] = useState();


    useEffect(() => {
        const showIntroProduct = () => (
            listProducts.map((product, index) => (
                <>
                    <div className="col-6 col-md-4 col-lg-4" key={index}>
                        <div className="product product-7 text-center">
                            <figure className="product-media">
                                <span className="product-label label-new">
                                    {product.nameBrand}
                                </span>
                                <Link to={`/product/${product.idPath}/${product.path}`}>
                                    {
                                        product.images.map((image, count) => (
                                            count === 0
                                                ?
                                                <img src={image.path} alt={product.name} key={count + image.toString()}
                                                     className="product-image"/>
                                                : ''
                                        ))
                                    }
                                </Link>
                                <div className="product-action-vertical">
                                    <Link to="#"
                                          className="btn-product-icon btn-wishlist btn-expandable">
                                        <span>add to wishlist</span>
                                    </Link>
                                    <Link to="popup/quickView.html"
                                          className="btn-product-icon btn-quickview"
                                          title="Quick view"><span>Quick view</span></Link>
                                    <Link to="#" className="btn-product-icon btn-compare" title="Compare">
                                        <span>Compare</span>
                                    </Link>
                                </div>
                                {/* End .product-action-vertical */}
                                <div className="product-action">
                                    <Link to="#" className="btn-product btn-cart"><span>add to cart</span></Link>
                                </div>
                                {/* End .product-action */}
                            </figure>
                            {/* End .product-media */}
                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to={`/category/${product.idPathCategory}/${product.pathCategory}`}>
                                        {product.nameCategory}
                                    </Link>
                                </div>
                                {/* End .product-cat */}
                                <h3 className="product-title">
                                    <Link to={`/product/${product.idPath}/${product.path}`}>
                                        {product.name}
                                    </Link>
                                </h3>{/* End .product-title */}
                                <div className="product-price">
                                    {product.price}
                                </div>
                                {/* End .product-price */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val"
                                             style={{width: `${product.pointReview}%`}}/>
                                        {/* End .ratings-val */}
                                    </div>
                                    {/* End .ratings */}
                                    <span className="ratings-text">
                                        ({product.reviews !== null && product.reviews !== undefined && product.reviews !== ''
                                        ? product.reviews.length : 0} Đánh giá )
                                    </span>
                                </div>
                                {/* End .rating-container */}
                            </div>
                            {/* End .product-body */}
                        </div>
                        {/* End .product */}
                    </div>
                    {/* End .col-sm-6 col-lg-4 */}
                </>
            ))
        )
        setIntroProduct(showIntroProduct())
    }, [listProducts]);


    return (
        <>
            <div>
                <div className="page-header text-center"
                     style={{backgroundImage: 'url("/assets/images/page-header-bg.jpg")'}}>
                    <div className="container">
                        <h1 className="page-title">Grid 3 Columns<span>Shop</span></h1>
                    </div>
                    {/* End .container */}
                </div>
                {/* End .page-header */}
                <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/index.html">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Shop</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Grid 3 Columns</li>
                        </ol>
                    </div>
                    {/* End .container */}
                </nav>
                {/* End .breadcrumb-nav */}
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="toolbox">
                                    <div className="toolbox-left">
                                        <div className="toolbox-info">
                                            Showing <span>9 of 56</span> Products
                                        </div>
                                        {/* End .toolbox-info */}
                                    </div>
                                    {/* End .toolbox-left */}
                                    <div className="toolbox-right">
                                        <div className="toolbox-sort">
                                            <label htmlFor="sortby">Sort by:</label>
                                            <div className="select-custom">
                                                <select name="sortby" id="sortby" className="form-control"
                                                        defaultValue={`rating`}>
                                                    <option value="popularity">Most Popular</option>
                                                    <option value="rating">Most Rated</option>
                                                    <option value="date">Date</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* End .toolbox-sort */}
                                    </div>
                                    {/* End .toolbox-right */}
                                </div>
                                {/* End .toolbox */}
                                <div className="products mb-3">
                                    <div className="row justify-content-center">
                                        {introProduct}
                                    </div>
                                    {/* End .row */}
                                </div>
                                {/* End .products */}
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <Link className="page-link page-link-prev" to="#" aria-label="Previous"
                                                  tabIndex={-1} aria-disabled="true">
                                                <span aria-hidden="true">
                                                    <i className="icon-long-arrow-left"/>
                                                </span>
                                                Prev
                                            </Link>
                                        </li>
                                        <li className="page-item active" aria-current="page">
                                            <Link className="page-link" to="#">1</Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item-total">of 6</li>
                                        <li className="page-item">
                                            <Link className="page-link page-link-next" to="#" aria-label="Next">
                                                Next <span aria-hidden="true"><i
                                                className="icon-long-arrow-right"/></span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* End .col-lg-9 */}
                            <SideBarListProduct
                                listCategories={listCategories}
                                filterPrice={filterPrice}
                                filterColor={filterColor}
                            />
                        </div>
                        {/* End .row */}
                    </div>
                    {/* End .container */}
                </div>
                {/* End .page-content */}
            </div>
        </>
    );
};

export default ListProductView;
