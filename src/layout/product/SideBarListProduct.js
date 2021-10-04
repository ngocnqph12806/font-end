import React from 'react';
import {NavLink} from "react-router-dom";

const SideBarListProduct = ({listCategories, filterPrice, filterColor}) => {
    return (
        <>
            <aside className="col-lg-3 order-lg-first">
                <div className="sidebar sidebar-shop">
                    <div className="widget widget-clean">
                        <label>Filters:</label>
                        <a href="#" className="sidebar-filter-clear">Clean All</a>
                    </div>
                    {/* End .widget widget-clean */}
                    <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                            <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true"
                               aria-controls="widget-1">
                                Loại sản phẩm
                            </a>
                        </h3>{/* End .widget-title */}
                        <div className="collapse show" id="widget-1">
                            <div className="widget-body">
                                <div className="filter-items filter-items-count">
                                    {
                                        listCategories.map((category, index) => (
                                            <div className="filter-item" key={index}>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input"
                                                           name="filter-category" id={category.idPath}/>
                                                    <label className="custom-control-label"htmlFor={category.idPath}>
                                                        {category.name}
                                                    </label>
                                                </div>
                                                {/* End .custom-checkbox */}
                                                <span className="item-count">
                                                    {category.products != null ? category.products.length : ""}
                                                </span>
                                            </div>
                                        ))
                                    }
                                    {/* End .filter-item */}
                                </div>
                                {/* End .filter-items */}
                            </div>
                            {/* End .widget-body */}
                        </div>
                        {/* End .collapse */}
                    </div>
                    {/* End .widget */}
                    <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                            <a data-toggle="collapse" href="#widget-4" role="button" aria-expanded="true"
                               aria-controls="widget-4">
                                Màu sắc
                            </a>
                        </h3>{/* End .widget-title */}
                        <div className="collapse show" id="widget-4">
                            <div className="widget-body">
                                <div className="filter-items">
                                    {
                                        filterColor.map((color, index) => (
                                            <div className="filter-item" key={index}>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input"
                                                           id={color}/>
                                                    <label className="custom-control-label"htmlFor={color}>
                                                        {color}
                                                    </label>
                                                </div>
                                                {/* End .custom-checkbox */}
                                            </div>
                                        ))
                                    }
                                </div>
                                {/* End .filter-items */}
                            </div>
                            {/* End .widget-body */}
                        </div>
                        {/* End .collapse */}
                    </div>
                    {/* End .widget */}
                    <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                            <a data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true"
                               aria-controls="widget-5">
                                Giá
                            </a>
                        </h3>{/* End .widget-title */}
                        <div className="collapse show" id="widget-5">
                            <div className="widget-body">
                                <div className="filter-price">
                                    <div className="filter-price-text">
                                        Khoảng giá:
                                        <span id="filter-price-range"/>
                                    </div>
                                    {/* End .filter-price-text */}
                                    <div id="price-slider" data-min={filterPrice.min} data-max={filterPrice.max}/>
                                    {/* End #price-slider */}
                                </div>
                                {/* End .filter-price */}
                            </div>
                            {/* End .widget-body */}
                        </div>
                        {/* End .collapse */}
                    </div>
                    {/* End .widget */}
                </div>
                {/* End .sidebar sidebar-shop */}
            </aside>
            {/* End .col-lg-3 */}
        </>
    );
};

export default SideBarListProduct;
