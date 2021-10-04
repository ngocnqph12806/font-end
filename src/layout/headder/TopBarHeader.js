import React from 'react';
import {NavLink} from "react-router-dom";

const TopBarHeader = () => {
    return (
        <div className="header-top">
            <div className="container">
                <div className="header-left">
                    <div className="header-dropdown">
                        <NavLink to="#">Usd</NavLink>
                        <div className="header-menu">
                            <ul>
                                <li><NavLink to="#">Eur</NavLink></li>
                                <li><NavLink to="#">Usd</NavLink></li>
                            </ul>
                        </div>
                        {/* End .header-menu */}
                    </div>
                    {/* End .header-dropdown */}
                    <div className="header-dropdown">
                        <NavLink to="#">VI</NavLink>
                        <div className="header-menu">
                            <ul>
                                <li><NavLink to="#">Tiếng Việt</NavLink></li>
                                <li><NavLink to="#">English</NavLink></li>
                            </ul>
                        </div>
                        {/* End .header-menu */}
                    </div>
                    {/* End .header-dropdown */}
                </div>
                {/* End .header-left */}
                <div className="header-right">
                    <ul className="top-menu">
                        <li>
                            <NavLink to="#">Links</NavLink>
                            <ul>
                                <li><NavLink to="tel:#"><i className="icon-phone"/>Call: +0123 456 789</NavLink></li>
                                <li><NavLink to="wishlist.html"><i className="icon-heart-o"/>My
                                    Wishlist <span>(3)</span></NavLink></li>
                                <li><NavLink to="about.html">About Us</NavLink></li>
                                <li><NavLink to="contact.html">Contact Us</NavLink></li>
                                <li><NavLink to="#signin-modal" data-toggle="modal"><i className="icon-user"/>Login</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    {/* End .top-menu */}
                </div>
                {/* End .header-right */}
            </div>
            {/* End .container */}
        </div>
    );
};

export default TopBarHeader;
