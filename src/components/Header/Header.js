import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { numberFormatter } from "../Utility/NumberUtility";
import { Img } from "react-image";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
function Header() {
    const [amountProduct, setAmountProduct] = useState([]);
    const [totalProductPrice, setTotalProductPrice] = useState([]);
    const [amountOrder, setAmountOrder] = useState([]);
    const [cookies, setCookies, removeCookie] = useCookies(['user']);
    console.log("🚀 ~ file: Header.js ~ line 13 ~ Header ~ cookies", cookies)
    const navigate = useNavigate();

    const requestAmountCardUrl = `${process.env.REACT_APP_API_URL}/giohang/khachhang/amountAll/` + cookies.Id
    const requestTotalUrl = `${process.env.REACT_APP_API_URL}/giohang/khachhang/sumDonGia/` + cookies.Id
    const requestAmountOrderUrl = `http://localhost:8080/api/donhang/khachhang/amountAll/` + cookies.Id

    useEffect(() => {
        const fetchAmountCard = async () => {
            const result = await axios(
                requestAmountCardUrl,
            );

            setAmountProduct(result.data);
        };

        const fetchTotal = async () => {
            const result = await axios(
                requestTotalUrl,
            );

            setTotalProductPrice(result.data);
        };

        const fetchAmountOrder = async () => {
            const result = await axios(
                requestAmountOrderUrl,
            );

            setAmountOrder(result.data);
        };

        fetchAmountCard();
        fetchTotal();
        fetchAmountOrder();

    }, [navigate, requestAmountCardUrl, requestAmountOrderUrl, requestTotalUrl]);

    function handldeLogout() {
        removeCookie('Username', { path: '/' });
        removeCookie('Password', { path: '/' });
        removeCookie('Id', { path: '/' });
        removeCookie('user', { path: '/' });
        window.location.reload()
    }
    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__left">
                                <ul>
                                    <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                                    <li>Free Shipping for all Order of $99</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__right">
                                <div className="header__top__right__social">
                                    <Link to="#"><i className="fa fa-facebook"></i></Link>
                                    <Link to="#"><i className="fa fa-twitter"></i></Link>
                                    <Link to="#"><i className="fa fa-linkedin"></i></Link>
                                    <Link to="#"><i className="fa fa-pinterest-p"></i></Link>
                                </div>

                                <div className="header__top__right__auth">
                                    {!cookies?.Id && <Link to="/dangnhap"><i className="fa fa-user"></i>Đăng nhập</Link>}
                                    {cookies?.Id &&
                                        <div style={{ display: 'inline-flex' }}>
                                            <Link to={{ pathname: "/khachhang/" + cookies.Id }}><i className="fa fa-user"></i>{cookies.Username}</Link> &ensp; <button onClick={handldeLogout} className="btn btn-warning">Đăng xuất</button>
                                        </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="header__logo">
                            <Img src="/statics/img/logo.png" alt="" to="./"></Img>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="header__menu">
                            <ul>
                                <li className="active"><Link to="./">Trang chủ</Link></li>
                                <li><Link to="/giohang">Giỏ hàng</Link></li>
                                <li><Link to="./donhang/Tất cả">Đơn hàng</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__cart">
                            <ul>
                                <li><Link to="/donhang/Tất cả"><i className="fa fa-shopping-bag" title="Đơn hàng"></i> <span>{amountOrder}</span></Link></li>
                            </ul>
                            <ul>
                                <li><Link to="/giohang"><i className="fa fa-shopping-cart" title="Giỏ hàng"></i> <span>{amountProduct}</span></Link></li>
                            </ul>
                            <div className="header__cart__price">item: <span> {numberFormatter(totalProductPrice)}</span></div>
                        </div>
                    </div>
                </div>
                <div className="humberger__open">
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </header>
    );
}

export default Header;