import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert";
import { numberFormatter } from "../../Utility/NumberUtility";
import { useCookies } from 'react-cookie';
function ProductDetailInfo(props) {
    const [cookies] = useCookies(['user']);
    async function handleAddToCard(e) {
        e.preventDefault();

        let product = {
            MaKhachHang: cookies.Id,
            MaSanPham: props.product.masanpham,
            // DonGia: props.product.giasanpham,
            SoLuong: parseInt(e.target.quantity.value),
        }

        await axios("http://localhost:8080/api/giohang", {
            method: "POST",
            credentials: 'include',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            data: JSON.stringify(product),
        }).then(result =>
            Swal({
                title: "Success",
                text: "Thêm vào giỏ hàng thành công!",
                icon: "success",
            }).then((ok) => {
                if (ok) {
                    window.location.reload();
                }
            }))
            .catch(error => Swal({
                title: "Error!",
                text: "Thêm vào giỏ hàng không thành công!",
                icon: "error",
            }));
    }

    return (
        <div className="col-lg-6 col-md-6">
            <div className="product__details__text">
                <h3>{props.product.tensanpham}</h3>
                <div className="product__details__rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <span>(18 reviews)</span>
                </div>
                <div className="product__details__price"> {numberFormatter(props.product.giasanpham)}</div>
                <p>{props.product.motasanpham}</p>
                <form onSubmit={handleAddToCard}>
                    <div className="product__details__quantity" >
                        <div className="quantity buttons_added">
                            <input type="button" value="-" className="minus"></input>
                            <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" className="input-text qty text" size="4" pattern="" inputmode=""></input>
                            <input type="button" value="+" className="plus"></input>
                        </div>
                    </div>
                    <button type="submit" className="primary-btn">THÊM VÀO GIỎ HÀNG</button>
                    <Link to="#" className="heart-icon"><span className="icon_heart_alt"></span></Link>
                </form>
                <ul>
                    <li><b>Availability</b> <span>{props.product.soluongton}</span></li>
                    <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                    <li><b>Weight</b> <span>0.5 kg</span></li>
                    <li><b>Share on</b>
                        <div className="share">
                            <Link to="#"><i className="fa fa-facebook"></i></Link>
                            <Link to="#"><i className="fa fa-twitter"></i></Link>
                            <Link to="#"><i className="fa fa-instagram"></i></Link>
                            <Link to="#"><i className="fa fa-pinterest"></i></Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );

}
export default ProductDetailInfo;