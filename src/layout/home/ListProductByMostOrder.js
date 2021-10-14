import React from 'react';
import {Link} from "react-router-dom";

const ListProductByMostOrder = (props) => {
    return (
        <div>
            <div className="mb-6"/>
            {/* End .mb-6 */}
            <div className="container">
                <div className="heading heading-center mb-3">
                    <h2 className="title-lg">Mua nhiều nhất</h2>{/* End .title */}
                </div>
                {/* End .heading */}
                <div className="tab-content tab-content-carousel">
                    <div className="tab-pane p-0 fade show active" id="trendy-all-tab" role="tabpanel"
                         aria-labelledby="trendy-all-link">
                        <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                             data-toggle="owl" data-owl-options="{
                                &quot;nav&quot;: false,
                                &quot;dots&quot;: true,
                                &quot;margin&quot;: 20,
                                &quot;loop&quot;: false,
                                &quot;responsive&quot;: {
                                &quot;0&quot;: {
                                  &quot;items&quot;:2
                                },
                                &quot;480&quot;: {
                                  &quot;items&quot;:2
                                },
                                &quot;768&quot;: {
                                  &quot;items&quot;:3
                                },
                                &quot;992&quot;: {
                                  &quot;items&quot;:4
                                },
                                &quot;1200&quot;: {
                                  &quot;items&quot;:4,
                                  &quot;nav&quot;: true,
                                  &quot;dots&quot;: false
                                }
                                }
                            }">
                            {
                                props.listProductOrderByMost !== null && props.listProductOrderByMost !== undefined ?
                                    props.listProductOrderByMost.map((product, index) => (
                                        <div className="product product-11 text-center" key={`abc${index}`}>
                                            <figure className="product-media">
                                                <Link to={`/product/${product.idPath}/${product.path}`}>
                                                    {
                                                        product.images !== null && product.images !== undefined ?
                                                            product.images.map((img, index) => (
                                                                index === 0 ?
                                                                    <img key={index} src={img.path} alt={product.name}/>
                                                                    : index === 1 ?
                                                                        <img key={index} src={img.path} alt={product.name}
                                                                             className="product-image-hover"/>
                                                                        : null
                                                            ))
                                                            : null
                                                    }
                                                </Link>
                                                <div className="product-action-vertical">
                                                    <button className="btn-product-icon icon-heart"
                                                            onClick={() => props.fnWishlist(product)}>
                                                        <span>Thêm yêu thích</span>
                                                    </button>
                                                </div>
                                                {/* End .product-action-vertical */}
                                            </figure>
                                            {/* End .product-media */}
                                            <div className="product-body">
                                                <h3 className="product-title">
                                                    <Link to={`/product/${product.idPath}/${product.path}`}>
                                                        {product.name}
                                                    </Link>
                                                </h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    {product.price}
                                                </div>
                                                {/* End .product-price */}
                                            </div>
                                            {/* End .product-body */}
                                            <div className="product-action">
                                                <button className="btn-product btn-cart"
                                                        onClick={() => props.fnAddCart(1, product)}>
                                                    <span>Thêm giỏ hàng</span>
                                                </button>
                                            </div>
                                            {/* End .product-action */}
                                        </div>
                                    )) : null
                            }
                            {/* End .product */}
                        </div>
                        {/* End .owl-carousel */}
                    </div>
                    {/* .End .tab-pane */}
                </div>
                {/* End .tab-content */}
            </div>
            {/* End .container */}
        </div>
    );
};

export default ListProductByMostOrder;
