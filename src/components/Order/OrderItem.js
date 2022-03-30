import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import OrderProduct from "./OrderProduct";
import { numberFormatter } from "../Utility/NumberUtility";
import { useCookies } from 'react-cookie';
import Swal from "sweetalert";
const OrderItem = (props) => {

    const [orderProduct, setOrderProduct] = useState([]);
    const [cookies] = useCookies(['user']);

    const requestOrderItemUrl = "http://localhost:8080/api/sanpham/donhang/khachhang/" + cookies.Id + "/" + `${props.Order.MaDonHang}`
    useEffect(() => {
        const fetchOrderProduct = async () => {
            const result = await axios(
                requestOrderItemUrl,
            );
            setOrderProduct(result.data);
        };
        fetchOrderProduct();
    }, []);

    async function handleHuyDon(e, madonhang) {
        e.preventDefault();
        const URL = "http://localhost:8080/api/donhang/huydonhang/" + madonhang
        console.log(URL)
        await axios(URL, {
            method: "PUT",
            credentials: 'include',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(result =>
            Swal({
                title: "Success",
                text: "Hủy đơn hàng thành công!",
                icon: "success",
            }).then((ok) => {

            }))
            .catch(error => Swal({
                title: "Error!",
                text: "Hủy đơn hàng không thành công!",
                icon: "error",
            }));
    }
    return (
        <>
            <div className="container" style={{
                border: 'solid 1px black',
                padding: '20px'
            }}>
                <div className="row" >
                    <div className="col-lg-12">
                        <div className="shoping__cart__table">
                            <table>
                                <thead>
                                    <tr>
                                        <h4 className="shoping__product" style={{ width: '800px', textAlign: 'left' }}
                                        >ID: {props.Order.MaDonHang}  &emsp; ID Shop: {props.Order.GianHang}
                                            &emsp; Tình trạng: {props.Order.TinhTrangDon}
                                        </h4>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orderProduct.map((product) => (
                                            <OrderProduct product={product} MaDonHang={props.Order.MaDonHang} />
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
                            padding: '10px',
                            height: '50px',
                            width: '316%',
                            margin: '0'
                        }}>
                            <ul>
                                <li>
                                    {/* <div style={{width: '600px'}}>

                                    </div> */}
                                    <div style={{ display: 'inline-block' }}>
                                        {props.Order.TinhTrangDon === "Đã giao hàng" &&
                                            <Link className="btn btn-warning" to={{ pathname: "/khachhangdanhgia/" + `${props.Order.MaDonHang}` + "/" + `${props.Order.GianHang}` }} >Đánh giá</Link>}&nbsp;
                                        {props.Order.TinhTrangDon === "Đã giao hàng" &&
                                            <Link className="btn btn-danger" to="#">Khiếu nại</Link>}
                                    </div>
                                    {props.Order.TinhTrangDon === "Chờ xác nhận" &&
                                        <button className="btn btn-danger" onClick={(e) => handleHuyDon(e, props.Order.MaDonHang)}>Hủy đơn</button>}
                                    <span>Tổng đơn: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                        {numberFormatter(props.Order.TongTien)} </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
        </>
    );
};

export default OrderItem;