import { Link } from "react-router-dom";
import { Img } from "react-image";

function Humberger() {
    return (
        <>
            <div className="humberger__menu__overlay"></div>
            <div className="humberger__menu__wrapper">
                <div className="humberger__menu__logo">
                    <Link to="#"><Img src="img/logo.png" alt=""></Img></Link>
                </div>
                <div className="humberger__menu__cart">
                    <ul>
                        <li><Link to="#"><i className="fa fa-heart"></i> <span>1</span></Link></li>
                        <li><Link to="#"><i className="fa fa-shopping-bag"></i> <span>3</span></Link></li>
                    </ul>
                    <div className="header__cart__price">item: <span>$150.00</span></div>
                </div>
                <div className="humberger__menu__widget">
                    <div className="header__top__right__language">
                        <Img src="img/language.png" alt=""></Img>
                            <div>English</div>
                            <span className="arrow_carrot-down"></span>
                            <ul>
                                <li><Link to="#">Spanis</Link></li>
                                <li><Link to="#">English</Link></li>
                            </ul>
                    </div>
                    <div className="header__top__right__auth">
                        <Link to="#"><i className="fa fa-user"></i> Login</Link>
                    </div>
                </div>
                <nav className="humberger__menu__nav mobile-menu">
                    <ul>
                        <li className="active"><Link to="./index.html">Home</Link></li>
                        <li><Link to="./shop-grid.html">Shop</Link></li>
                        <li><Link to="#">Pages</Link>
                            <ul className="header__menu__dropdown">
                                <li><Link to="./shop-details.html">Shop Details</Link></li>
                                <li><Link to="./shoping-cart.html">Shoping Cart</Link></li>
                                <li><Link to="./checkout.html">Check Out</Link></li>
                                <li><Link to="./blog-details.html">Blog Details</Link></li>
                            </ul>
                        </li>
                        <li><Link to="./blog.html">Blog</Link></li>
                        <li><Link to="./contact.html">Contact</Link></li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap"></div>
                <div className="header__top__right__social">
                    <Link to="#"><i className="fa fa-facebook"></i></Link>
                    <Link to="#"><i className="fa fa-twitter"></i></Link>
                    <Link to="#"><i className="fa fa-linkedin"></i></Link>
                    <Link to="#"><i className="fa fa-pinterest-p"></i></Link>
                </div>
                <div className="humberger__menu__contact">
                    <ul>
                        <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                        <li>Free Shipping for all Order of $99</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Humberger;