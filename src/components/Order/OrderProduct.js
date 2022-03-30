import { Img } from "react-image";
import { numberFormatter } from "../Utility/NumberUtility";
import axios from "axios";
import { useState, useEffect } from "react";
const OrderProduct = (props) => {
    const [soluong, setSoLuong] = useState([]);
    const [dongia, setDonGia] = useState([]);

    useEffect(() => {
        const requestProductUrl = "http://localhost:8080/api/chitietdonhang/" + props.MaDonHang + "/" + props.product.MaSanPham
        const fetchProduct1 = async () => {
            const result = await axios(
                requestProductUrl,
            );
            setSoLuong(result.data[0]["SoLuong"])
        };

        const fetchProduct2 = async () => {
            const result = await axios(
                requestProductUrl,
            );
            setDonGia(result.data[0]["DonGia"])
        };
        fetchProduct1();
        fetchProduct2();
    }, []);
    return (
        <>
            <tr>
                <td className="shoping__cart__item" style={{
                    padding: '10px'
                }}>
                    <Img src={`${props.product.HinhAnh}`} style={{
                        backgroundImage: "url(" + `${props.product.HinhAnh}` + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '70px',
                        width: '70px'
                    }}></Img>
                    <h5>{props.product.TenSanPham}</h5>
                </td>
                <td className="shoping__cart__price">
                    {numberFormatter(props.product.GiaSanPham)}
                </td>
                <td className="shoping__cart__quantity">
                    x{soluong}
                </td>
                <td className="shoping__cart__total">
                    {numberFormatter(dongia)}
                </td>
            </tr>
        </>
    );
};

export default OrderProduct;