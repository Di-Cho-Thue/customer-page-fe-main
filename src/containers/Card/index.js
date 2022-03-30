import { useState, useEffect } from "react";
import axios from "axios";
import { Img } from "react-image";
import { Link } from "react-router-dom";
import Swal from "sweetalert";
import { numberFormatter } from "../../components/Utility/NumberUtility";
import { useCookies } from 'react-cookie';
function Card() {
    const [cardItem, setCardItem] = useState([]);
    const [loading, setloading] = useState(false);
    const [cookies] = useCookies(['user']);
    const requestCardItemUrl = `${process.env.REACT_APP_API_URL}/giohang/khachhang/` + cookies.Id;


    useEffect(() => {
        const fetchCardItem = async () => {
            setloading(true)
            const result = await axios(
                requestCardItemUrl,
            );
            setCardItem(result.data);
            setloading(false)
        };
        fetchCardItem();

    }, []);

    async function updateAmountProduct(e, masanpham, soluong) {
        e.preventDefault();
        const putURL = "http://localhost:8080/api/giohang/soluong/" + cookies.Id + "/" + masanpham + "/" + soluong
        // await axios(putURL, {
        //     method: "PUT",
        //     credentials: 'include',
        //     mode: 'no-cors',
        //     headers: {
        //         'Content-Type': 'application/json; charset=utf-8',
        //     }
        // }).then(result => console.log(result))
        // .catch(error => console.log(error));
        console.log(putURL)
        console.log(e.target.quantity.value)
        // console.log(e.target.quantity.value)
    }

    async function deleteProduct(e, makhachhang, masanpham) {
        e.preventDefault();

        Swal({
            title: "Question",
            text: "Bạn có muốn xóa sản phẩm không?",
            icon: "warning",
        }).then(async (ok) => {
            if (ok) {
                const URL = "http://localhost:8080/api/giohang/" + makhachhang + "/" + masanpham
                await axios(URL, {
                    method: "DELETE",
                    credentials: 'include',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                    }
                }).then(result =>
                    Swal({
                        title: "Success",
                        text: "Xóa sản phẩm thành công!",
                        icon: "success",
                    }).then((ok) => {

                    }))
                    .catch(error => Swal({
                        title: "Error!",
                        text: "Xóa sản phẩm không thành công!",
                        icon: "error",
                    }));
            }
        })
    }

    const uniqueObjects = [...new Map((cardItem || []).map(item => [item.MaGianHang, item])).values()]

    return loading ? null : (
        <div className="tab-content">
            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                <div className="product__details__tab__desc">
                    <h3 style={{
                        textAlign: 'center'
                    }}>GIỎ HÀNG</h3>
                    {
                        uniqueObjects.map((item) => (
                            <div className="container" style={{
                                border: 'solid 1px black',
                                padding: '20px',
                                marginTop: '20px',
                                marginBottom: '20px'
                            }} >
                                <div className="row" >
                                    <div className="col-lg-12">
                                        <div className="shoping__cart__table">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <h4 className="shoping__product" style={{ textAlign: 'left' }}>Mã cửa hàng: {item.MaGianHang} &emsp; Tên cửa hàng: {item.TenGianHang}</h4>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        (cardItem || []).filter(p => p.MaGianHang === item.MaGianHang).map((product) => (
                                                            <tr>
                                                                <td className="shoping__cart__item" style={{ padding: '10px' }}>
                                                                    <Img alt="" src={`${product.HinhAnh}`} style={{
                                                                        backgroundImage: "url(" + `${product.HinhAnh}` + ")",
                                                                        backgroundPosition: 'center',
                                                                        backgroundSize: 'cover',
                                                                        backgroundRepeat: 'no-repeat',
                                                                        height: '70px',
                                                                        width: '70px'
                                                                    }}></Img>
                                                                    <h5>{product.TenSanPham}</h5>
                                                                </td>
                                                                <td className="shoping__cart__price">
                                                                    {numberFormatter(product.GiaSanPham)}
                                                                </td>
                                                                <td className="shoping__cart__quantity">
                                                                    <div className="quantity buttons_added">
                                                                        <input type="button" value="-" className="minus" onClick={(e) => updateAmountProduct(e, product.MaSanPham, "2")}></input>
                                                                        <input type="text" step="1" min="1" max="" name="quantity" value={product.SoLuong} title="Qty"
                                                                            className="input-text qty text" size="4"
                                                                            onChange={(e) => updateAmountProduct(e, product.MaSanPham, "2")}></input>
                                                                        <input type="button" value="+" className="plus" onClick={(e) => updateAmountProduct(e, product.MaSanPham, "2")}></input>
                                                                    </div>
                                                                </td>
                                                                <td className="shoping__cart__total">
                                                                    {numberFormatter(product.DonGia)}
                                                                </td>
                                                                <td className="shoping__cart__item__close">
                                                                    <button type="button" className="icon_close btn btn-warning" onClick={(e) => deleteProduct(e, cookies.Id, product.MaSanPham)}></button>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="shoping__checkout" style={{
                                            margin: '0',
                                            height: '72px',
                                            width: '150%',
                                            marginLeft: '167%'
                                        }}>
                                            <ul>
                                                <li><Link to={{ pathname: `/thanhtoan/${item.MaGianHang}` }} className="btn btn-success" style={{
                                                    width: '150px'
                                                }}>Mua hàng</Link> &emsp; &emsp; &emsp;
                                                    Thanh toán: &emsp; &emsp;{numberFormatter(item.TongTien)}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div >
            </div >
        </div>
    );

}

export default Card;