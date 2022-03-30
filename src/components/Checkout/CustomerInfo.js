
function CustomerInfo(props) {
    return (
        <div className="col-lg-6 col-md-6">
            <div className="row">
                <div className="col-lg-6">
                    <div className="checkout__input">
                        <p>Họ tên<span>*</span></p>
                        <input type="text" value={props.Customer.hoten_kh} required></input>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="checkout__input">
                        <p>Số điện thoại<span>*</span></p>
                        <input type="text" value={props.Customer.sodienthoai_kh} required></input>
                    </div>
                </div>
            </div>
            <div className="checkout__input">
                <p>Địa chỉ<span>*</span></p>
                <input type="text" placeholder="Street Address, Apartment, suite, unite ect (optinal)" 
                className="checkout__input__add" value={props.Customer.sonha_kh} required></input>
            </div>
            <div className="checkout__input">
                <p>Phường/Xã<span></span></p>
                <input type="text" value={props.Customer.phuongxa_kh}></input>
            </div>
            <div className="checkout__input">
                <p>Quận/Huyện<span>*</span></p>
                <input type="text" value={props.Customer.quanhuyen_kh} required></input>
            </div>
            <div className="checkout__input">
                <p>Thị trấn/Thành phố<span>*</span></p>
                <input type="text" value={props.Customer.thanhpho_kh} required></input>
            </div>
            <div className="checkout__input">
                <p>Mã khuyến mãi<span></span></p>
                <input type="text" name="KhuyenMai" id="KhuyenMai" onChange={props.handleChangeKhuyenMai} ></input>
            </div>
            <div className="checkout__input__checkbox">
                <label for="diff-acc">
                    Ship to a different address?
                    <input type="checkbox" id="diff-acc"></input>
                    <span className="checkmark"></span>
                </label>
            </div>
            <div className="checkout__input">
                <p>Hình thức thanh toán<span></span></p>
                <div class="form-check-inline">
                    <input type="radio" name="HinhThucThanhToan" style={{ height: '20px', width: '20px' }}
                        value="Thanh toán trực tiếp" checked />&emsp;Thanh toán khi nhận hàng
                </div>
                <br />
                <div class="form-check-inline">
                    <input type="radio" name="HinhThucThanhToan" style={{ height: '20px', width: '20px' }}
                        value="Thanh toán trực tuyến" />&emsp;Thanh toán trực tuyến
                </div>
            </div>
        </div>
    );
}

export default CustomerInfo;