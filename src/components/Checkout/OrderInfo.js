import { useParams } from "react-router-dom";
import { numberFormatter, numberNoCurrency } from "../Utility/NumberUtility";
function OrderInfo(props) {
    let params = useParams()

    return (
        <div className="col-lg-6 col-md-6">
            <div className="checkout__order">
                <h4>Đơn hàng của bạn</h4>
                <div className="checkout__order__products">Products <span>Total</span></div>
                <ul>
                    {
                        props.Order.map((order) => (
                            <li>{order.TenSanPham}<span>{ numberFormatter(order.DonGia) }</span></li>
                        ))
                    }
                </ul>
                <div className="checkout__order__subtotal">Subtotal <span> {
                    props.Order.filter((item) => item.MaGianHang === params.magianhang).slice(0, 1).map((order) => (
                        <>
                            <input type="text" name="ThanhTien" id="ThanhTien" value={numberNoCurrency(order.TongTien)} style={{
                                backgroundColor: 'transparent',
                                borderColor: 'transparent',
                                textAlign: 'right'
                            }}></input>
                            {/* <p>{order.TongTien}</p> */}
                        </>
                    ))
                    } </span></div>
                <div className="checkout__order__total">Total &emsp;&emsp;&emsp;&emsp;
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <small>-<input type="text" name="PhanTram" id="PhanTram" value="0" style={{
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        textAlign: 'right',
                        width: '30px'
                    }}></input>%</small> <span>{props.Order.filter((item) => item.MaGianHang === params.magianhang).slice(0, 1).map((order) => (
                        <input type="text" name="TongTien" id="TongTien" value={numberNoCurrency(order.TongTien)} style={{
                            backgroundColor: 'transparent',
                            borderColor: 'transparent',
                            textAlign: 'right',
                            width: '150px'
                        }}></input>))}
                    </span></div>

                <button type="submit" className="site-btn">ĐẶT HÀNG</button>
            </div>
        </div>
    );
}

export default OrderInfo;