import React from 'react';
import {Link} from "react-router-dom";

const DetailProductView = (props) => {

    return (
        <>
            <div>
                <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                    <div className="container d-flex align-items-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/index.html">Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to="/product">Products</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">{props.product.name}</li>
                        </ol>
                        {/*<nav className="product-pager ml-auto" aria-label="Product">*/}
                        {/*    <Link className="product-pager-link product-pager-prev" to="#" aria-label="Previous"*/}
                        {/*       tabIndex={-1}>*/}
                        {/*        <i className="icon-angle-left"/>*/}
                        {/*        <span>Prev</span>*/}
                        {/*    </Link>*/}
                        {/*    <Link className="product-pager-link product-pager-next" to="#" aria-label="Next"*/}
                        {/*       tabIndex={-1}>*/}
                        {/*        <span>Next</span>*/}
                        {/*        <i className="icon-angle-right"/>*/}
                        {/*    </Link>*/}
                        {/*</nav>*/}
                        {/* End .pager-nav */}
                    </div>
                    {/* End .container */}
                </nav>
                {/* End .breadcrumb-nav */}
                <div className="page-content">
                    <div className="container">
                        <div className="product-details-top">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="product-gallery product-gallery-separated">
                                        {/*<span className="product-label label-sale">Sale</span>*/}
                                        <figure className="product-separated-item">
                                            {
                                                props.product.images != null
                                                    ? props.product.images.map((img, index) =>
                                                        index === 0 ? (
                                                            <>
                                                                <img key={index} src={img.path}
                                                                     data-zoom-image={img.path}
                                                                     alt={img.nameProduct}/>
                                                                <Link to="#" id="btn-separated-gallery"
                                                                      className="btn-product-gallery">
                                                                    <i className="icon-arrows"/>
                                                                </Link>
                                                            </>
                                                        ) : ""
                                                    ) : null
                                            }
                                        </figure>
                                        {
                                            props.product.images != null
                                                ? props.product.images.map((img, countImg) => (
                                                    <>
                                                        <figure key={countImg} className="product-separated-item">
                                                            <img src={img.path} data-zoom-image={img.path}
                                                                 alt={img.nameProduct}/>
                                                        </figure>
                                                    </>
                                                )) : null
                                        }
                                    </div>
                                    {/* End .product-gallery */}
                                </div>
                                {/*<div className="col-md-6">*/}
                                {/*    <div className="product-gallery product-gallery-separated">*/}
                                {/*        <span className="product-label label-sale">Sale</span>*/}
                                {/*        <figure className="product-separated-item">*/}
                                {/*            <img src="/assets/images/products/single/sticky/1.jpg" data-zoom-image="/assets/images/products/single/sticky/1-big.jpg" alt="product image" />*/}
                                {/*            <Link to="#" id="btn-separated-gallery" className="btn-product-gallery">*/}
                                {/*                <i className="icon-arrows" />*/}
                                {/*            </Link>*/}
                                {/*        </figure>*/}
                                {/*        <figure className="product-separated-item">*/}
                                {/*            <img src="/assets/images/products/single/sticky/2.jpg" data-zoom-image="/assets/images/products/single/sticky/2-big.jpg" alt="product image" />*/}
                                {/*        </figure>*/}
                                {/*        <figure className="product-separated-item">*/}
                                {/*            <img src="/assets/images/products/single/sticky/3.jpg" data-zoom-image="/assets/images/products/single/sticky/3-big.jpg" alt="product image" />*/}
                                {/*        </figure>*/}
                                {/*        <figure className="product-separated-item">*/}
                                {/*            <img src="/assets/images/products/single/sticky/4.jpg" data-zoom-image="/assets/images/products/single/sticky/4-big.jpg" alt="product image" />*/}
                                {/*        </figure>*/}
                                {/*    </div>/!* End .product-gallery *!/*/}
                                {/*</div>/!* End .col-md-6 *!/*/}
                                {/* End .col-md-6 */}
                                <div className="col-md-6">
                                    <div className="product-details sticky-content">
                                        <h1 className="product-title">{props.product.name}</h1>{/* End .product-title */}
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val"
                                                     style={{width: `${props.product.pointReview}%`}}/>
                                                {/* End .ratings-val */}
                                            </div>
                                            {/* End .ratings */}
                                            <Link className="ratings-text" to="#product-accordion" id="review-link">
                                                ({props.product.reviews !== null && props.product.reviews !== undefined && props.product.reviews !== ''
                                                ? props.product.reviews.length : 0} đánh giá)
                                            </Link>
                                        </div>
                                        {/* End .rating-container */}
                                        <div className="product-price">
                                            <span className="new-price">{props.product.price} đ</span>
                                            {/*<span className="old-price">$310.00</span>*/}
                                        </div>
                                        {/* End .product-price */}
                                        <div className="product-content">
                                            <p>{props.product.categoryDetails}</p>
                                        </div>
                                        {/* End .product-content */}
                                        {/*<div className="product-countdown" data-until="2019, 10, 29"/>*/}
                                        {/* End .product-countdown */}
                                        {/*<div className="details-filter-row details-row-size">*/}
                                        {/*    <label htmlFor="size">Size:</label>*/}
                                        {/*    <div className="select-custom">*/}
                                        {/*        <select name="size" id="size" className="form-control">*/}
                                        {/*            <option value="#" selected="selected">Select a size</option>*/}
                                        {/*            <option value="s">Small</option>*/}
                                        {/*            <option value="m">Medium</option>*/}
                                        {/*            <option value="l">Large</option>*/}
                                        {/*            <option value="xl">Extra Large</option>*/}
                                        {/*        </select>*/}
                                        {/*    </div>*/}
                                        {/*    /!* End .select-custom *!/*/}
                                        {/*    <Link to="#" className="size-guide"><i className="icon-th-list"/>size*/}
                                        {/*        guide</Link>*/}
                                        {/*</div>*/}
                                        {/* End .details-filter-row */}
                                        <div className="details-filter-row details-row-size">
                                            <label htmlFor="qty">Số lượng:</label>
                                            <div className="product-details-quantity">
                                                <input type="number" id="qty" className="form-control" defaultValue={1}
                                                       min={1} max={10} step={1} data-decimals={0} required/>
                                            </div>
                                            {/* End .product-details-quantity */}
                                        </div>
                                        {/* End .details-filter-row */}
                                        <div className="product-details-action">
                                            <button className="btn-product btn-cart" onClick={props.fnAddCart}><span>Thêm vào giỏ hàng</span>
                                            </button>
                                            <div className="details-action-wrapper">
                                                <a className="btn-product btn-wishlist" title="Wishlist"
                                                   onClick={props.fnWishlist} style={{cursor: "pointer"}}>
                                                    <span>Thêm yêu thích</span>
                                                </a>
                                                <a href="#" className="btn-product btn-compare" title="Compare"><span>Thêm bảng so sánh</span></a>
                                            </div>
                                            {/* End .details-action-wrapper */}
                                        </div>
                                        {/* End .product-details-action */}
                                        <div className="product-details-footer">
                                            <div className="product-cat">
                                                <span>Thể loại:</span>
                                                <Link
                                                    to={`category/${props.product.idPathCategory}/${props.product.pathCategory}`}>
                                                    {props.product.nameCategory}
                                                </Link>
                                            </div>
                                            {/* End .product-cat */}
                                            <div className="social-icons social-icons-sm">
                                                <span className="social-label">Chia sẻ:</span>
                                                <a to="#" className="social-icon" title="Facebook" target="_blank">
                                                    <i className="icon-facebook-f"/>
                                                </a>
                                                <a href="#" className="social-icon" title="Twitter" target="_blank">
                                                    <i className="icon-twitter"/>
                                                </a>
                                                <a href="#" className="social-icon" title="Instagram" target="_blank">
                                                    <i className="icon-instagram"/>
                                                </a>
                                                <a href="#" className="social-icon" title="Pinterest" target="_blank">
                                                    <i className="icon-pinterest"/>
                                                </a>
                                            </div>
                                        </div>
                                        {/* End .product-details-footer */}
                                        <div className="accordion accordion-plus product-details-accordion"
                                             id="product-accordion">
                                            <div className="card card-box card-sm">
                                                <div className="card-header" id="product-desc-heading">
                                                    <h2 className="card-title">
                                                        <a className="collapsed" role="button" data-toggle="collapse"
                                                           href="#product-accordion-desc" aria-expanded="false"
                                                           aria-controls="product-accordion-desc">
                                                            Mô tả
                                                        </a>
                                                    </h2>
                                                </div>
                                                {/* End .card-header */}
                                                <div id="product-accordion-desc" className="collapse"
                                                     aria-labelledby="product-desc-heading"
                                                     data-parent="#product-accordion">
                                                    <div className="card-body">
                                                        <div className="product-desc-content"
                                                             dangerouslySetInnerHTML={{__html: props.product.description}}>
                                                        </div>
                                                        {/* End .product-desc-content */}
                                                    </div>
                                                    {/* End .card-body */}
                                                </div>
                                                {/* End .collapse */}
                                            </div>
                                            {/* End .card */}
                                            <div className="card card-box card-sm">
                                                <div className="card-header" id="product-info-heading">
                                                    <h2 className="card-title">
                                                        <a role="button" data-toggle="collapse"
                                                           href="#product-accordion-info" aria-expanded="true"
                                                           aria-controls="product-accordion-info">
                                                            Thông số kỹ thuật
                                                        </a>
                                                    </h2>
                                                </div>
                                                {/* End .card-header */}
                                                <div id="product-accordion-info" className="collapse show"
                                                     aria-labelledby="product-info-heading"
                                                     data-parent="#product-accordion">
                                                    <div className="card-body">
                                                        <div className="product-desc-content">
                                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                                                Donec odio. Quisque volutpat mattis eros. Nullam
                                                                malesuada erat ut turpis. Suspendisse urna viverra non,
                                                                semper suscipit, posuere a, pede. Donec nec justo eget
                                                                felis facilisis fermentum. Aliquam porttitor mauris sit
                                                                amet orci. </p>
                                                            <h3>Fabric &amp; care</h3>
                                                            <ul>
                                                                <li>100% Polyester</li>
                                                                <li>Do not iron</li>
                                                                <li>Do not wash</li>
                                                                <li>Do not bleach</li>
                                                                <li>Do not tumble dry</li>
                                                                <li>Professional dry clean only</li>
                                                            </ul>
                                                            <h3>Size</h3>
                                                            <p>S, M, L, XL</p>
                                                        </div>
                                                        {/* End .product-desc-content */}
                                                    </div>
                                                    {/* End .card-body */}
                                                </div>
                                                {/* End .collapse */}
                                            </div>
                                            {/* End .card */}
                                            <div className="card card-box card-sm">
                                                <div className="card-header" id="product-shipping-heading">
                                                    <h2 className="card-title">
                                                        <a className="collapsed" role="button" data-toggle="collapse"
                                                           href="#product-accordion-shipping" aria-expanded="false"
                                                           aria-controls="product-accordion-shipping">
                                                            Chính sách bảo hành
                                                        </a>
                                                    </h2>
                                                </div>
                                                {/* End .card-header */}
                                                <div id="product-accordion-shipping" className="collapse"
                                                     aria-labelledby="product-shipping-heading"
                                                     data-parent="#product-accordion">
                                                    <div className="card-body">
                                                        <div className="product-desc-content">
                                                            <p>We deliver to over 100 countries around the world. For
                                                                full details of the delivery options we offer, please
                                                                view our <Link to="#">Delivery information</Link><br/>
                                                                We hope you’ll love every purchase, but if you ever need
                                                                to return an item you can do so within a month of
                                                                receipt. For full details of how to make a return,
                                                                please view our <Link to="#">Returns information</Link>
                                                            </p>
                                                            <Link to={props.product.pathUserManual} className="h3"
                                                                  target="_blank">
                                                                Link tải file bảo hành
                                                            </Link>
                                                        </div>
                                                        {/* End .product-desc-content */}
                                                    </div>
                                                    {/* End .card-body */}
                                                </div>
                                                {/* End .collapse */}
                                            </div>
                                            {/* End .card */}
                                            <div className="card card-box card-sm">
                                                <div className="card-header" id="product-review-heading">
                                                    <h2 className="card-title">
                                                        <a className="collapsed" role="button" data-toggle="collapse"
                                                           href="#product-accordion-review" aria-expanded="false"
                                                           aria-controls="product-accordion-review">
                                                            Đánh giá
                                                            ({props.product.reviews !== null && props.product.reviews !== undefined && props.product.reviews !== ''
                                                            ? props.product.reviews.length : 0})
                                                        </a>
                                                    </h2>
                                                </div>
                                                {/* End .card-header */}
                                                <div id="product-accordion-review" className="collapse"
                                                     aria-labelledby="product-review-heading"
                                                     data-parent="#product-accordion">
                                                    <div className="card-body">
                                                        <div className="reviews">
                                                            {
                                                                props.product.reviews !== null && props.product.reviews !== undefined ?
                                                                    props.product.reviews.map((review, index) => (
                                                                        <>
                                                                            <div className="review"
                                                                                 key={index}>
                                                                                <div className="row no-gutters">
                                                                                    <div className="col-auto">
                                                                                        <h4>
                                                                                            <Link
                                                                                                to="#">{review.nameUser}</Link>
                                                                                        </h4>
                                                                                        <div
                                                                                            className="ratings-container">
                                                                                            <div className="ratings">
                                                                                                <div
                                                                                                    className="ratings-val"
                                                                                                    style={{width: `${review.point}%`}}/>
                                                                                                {/* End .ratings-val */}
                                                                                            </div>
                                                                                            {/* End .ratings */}
                                                                                        </div>
                                                                                        {/* End .rating-container */}
                                                                                        <span
                                                                                            className="review-date">{review.dateCreated}</span>
                                                                                    </div>
                                                                                    {/* End .col */}
                                                                                    <div className="col">
                                                                                        <h4 dangerouslySetInnerHTML={{__html: review.description}}></h4>
                                                                                        {/* End .review-content */}
                                                                                        <div
                                                                                            className="review-action row">
                                                                                            {
                                                                                                review.images !== null && review.images !== undefined ?
                                                                                                    review.images.map((path, count) => (
                                                                                                        <div
                                                                                                            className="card">
                                                                                                            <img
                                                                                                                key={count}
                                                                                                                src={path}
                                                                                                                alt={props.product.name}
                                                                                                                style={{maxHeight: '250px'}}/>
                                                                                                        </div>
                                                                                                    ))
                                                                                                    : ""
                                                                                            }
                                                                                        </div>
                                                                                        {/* End .review-action */}
                                                                                    </div>
                                                                                    {/* End .col-auto */}
                                                                                </div>
                                                                                {/* End .row */}
                                                                            </div>
                                                                            {/* End .review */}
                                                                        </>
                                                                    )) : ""
                                                            }
                                                        </div>
                                                        {/* End .reviews */}
                                                    </div>
                                                    {/* End .card-body */}
                                                </div>
                                                {/* End .collapse */}
                                            </div>
                                            {/* End .card */}
                                        </div>
                                        {/* End .accordion */}
                                    </div>
                                    {/* End .product-details */}
                                </div>
                                {/* End .col-md-6 */}
                            </div>
                            {/* End .row */}
                        </div>
                        {/* End .product-details-top */}
                        <hr className="mt-3 mb-5"/>
                        <h2 className="title text-center mb-4">You May Also Like</h2>{/* End .title text-center */}
                        <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                             data-toggle="owl" data-owl-options="{
                                                   &quot;nav&quot;: false,
                                                   &quot;dots&quot;: true,
                                                   &quot;margin&quot;: 20,
                                                   &quot;loop&quot;: false,
                                                   &quot;responsive&quot;: {&quot;0&quot;: {&quot;items&quot;:1},
                                                   &quot;480&quot;: {&quot;items&quot;:2},
                                                   &quot;768&quot;: {&quot;items&quot;:3},
                                                   &quot;992&quot;: {&quot;items&quot;:4},
                                                   &quot;1200&quot;: {
                                                   &quot;items&quot;:4,
                                                   &quot;nav&quot;: true,
                                                   &quot;dots&quot;: false
                                                   }}}">
                            {
                                props.listProductOfCategory != null && props.listProductOfCategory !== undefined
                                    ? props.listProductOfCategory.map((product, count) => (
                                        count < 10 ?
                                            <div className="product product-7">
                                                <figure className="product-media">
                                                    <span className="product-label label-new">{product.nameBrand}</span>
                                                    <Link to="product.html">
                                                        <img src="assets/images/products/product-4.jpg" alt={product.name}
                                                             className="product-image"/>
                                                    </Link>
                                                    <div className="product-action-vertical">
                                                        <Link to="#"
                                                              className="btn-product-icon btn-wishlist btn-expandable">
                                                            <span>add to wishlist</span>
                                                        </Link>
                                                        <Link to="popup/quickView.html"
                                                              className="btn-product-icon btn-quickview"
                                                              title="Quick view">
                                                            <span>Quick view</span>
                                                        </Link>
                                                        <Link to="#" className="btn-product-icon btn-compare"
                                                              title="Compare">
                                                            <span>Compare</span>
                                                        </Link>
                                                    </div>
                                                    {/* End .product-action-vertical */}
                                                    <div className="product-action">
                                                        <Link to="#" className="btn-product btn-cart">
                                                            <span>add to cart</span>
                                                        </Link>
                                                    </div>
                                                    {/* End .product-action */}
                                                </figure>
                                                {/* End .product-media */}
                                                <div className="product-body">
                                                    <div className="product-cat">
                                                        <Link to="#">Women</Link>
                                                    </div>
                                                    {/* End .product-cat */}
                                                    <h3 className="product-title">
                                                        <Link to="product.html">
                                                            Brown paperbag waist <br/>pencil skirt
                                                        </Link>
                                                    </h3>
                                                    {/* End .product-title */}
                                                    <div className="product-price">
                                                        $60.00
                                                    </div>
                                                    {/* End .product-price */}
                                                    <div className="ratings-container">
                                                        <div className="ratings">
                                                            <div className="ratings-val" style={{width: '20%'}}/>
                                                            {/* End .ratings-val */}
                                                        </div>
                                                        {/* End .ratings */}
                                                        <span className="ratings-text">( 2 Reviews )</span>
                                                    </div>
                                                    {/* End .rating-container */}
                                                    <div className="product-nav product-nav-dots">
                                                        <Link to="#" className="active" style={{background: '#cc9966'}}>
                                                            <span className="sr-only">Color name</span>
                                                        </Link>
                                                        <Link to="#" style={{background: '#7fc5ed'}}>
                                                            <span className="sr-only">Color name</span>
                                                        </Link>
                                                        <Link to="#" style={{background: '#e8c97a'}}>
                                                            <span className="sr-only">Color name</span>
                                                        </Link>
                                                    </div>
                                                    {/* End .product-nav */}
                                                </div>
                                                {/* End .product-body */}
                                            </div>
                                            : ""
                                    ))
                                    : ""
                            }
                            {/* End .product */}
                        </div>
                        {/* End .owl-carosel */}
                    </div>
                    {/* End .container */}
                </div>
                {/* End .page-content */}
            </div>
        </>
    );
};

export default DetailProductView;
