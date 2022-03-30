import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert";
const Complain = (props) => {

    async function handlePostComplain(e) {
        e.preventDefault();
        let complain = {
            MaKhieuNai: 'KN00207437',
            NoiDung: e.target.reason_complain.value,
            CachGiaiQuyet: e.target.ratio.value,
            TinhTrangGiaiQuyet: 'Chưa giải quyết',
            HinhAnhChungMinh: e.target.hinhanh.value,
            MaDonHang: 'DH67864121'//props.orderdetail.madonhang
        }
        console.log(complain)
        await axios("http://localhost:8080/api/khieunai", {
            method: "POST",
            credentials: 'include',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            data: JSON.stringify(complain),
        }).then(result =>
            Swal({
                title: "Success",
                text: "Khiếu nại đơn hàng thành công!",
                icon: "success",
            }).then((ok) => {
                if (ok) {
                    window.location.reload();
                }
            }))
            .catch(error => Swal({
                title: "Error!",
                text: "Khiếu nại đơn hàng không thành công! Vui lòng thử lại!",
                icon: "error",
            }));
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <strong>Khiếu nại đơn hàng</strong>
                        </div>
                        <div className="card-body card-block">
                            <form action="" method="post" enctype="multipart/form-data" className="form-horizontal">
                                <div className="row form-group">
                                    <div className="col col-md-3">
                                        <label for="text-input" className=" form-control-label">
                                            Nhập vào lí do bạn muốn khiếu nại về đơn hàng...</label>
                                    </div>
                                    <div className="col-12 col-md-9">
                                        <textarea name="reason_conplain" id="textarea-input" rows="9" placeholder="..." className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col col-md-3">
                                        <label for="file-multiple-input" className=" form-control-label">Hình ảnh chứng minh</label>
                                    </div>
                                    <div className="col-12 col-md-9">
                                        <input type="file" id="images" name="images" multiple="" className="form-control-file"></input>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col col-md-3">
                                        <label className=" form-control-label">Bạn muốn được hỗ trợ như thế nào?</label>
                                    </div>
                                    <div className="col col-md-9">
                                        <div className="form-check-inline form-check">
                                            <label for="inline-radio1" className="form-check-label ">
                                                <input type="radio" id="inline-radio1" name="radio" value="Hoàn tiền" className="form-check-input"></input>Hoàn tiền
                                            </label>
                                            &emsp;&emsp;
                                            <label for="inline-radio2" className="form-check-label ">
                                                <input type="radio" id="inline-radio2" name="radio" value="Mua lại sản phẩm khác" className="form-check-input"></input>Mua lại sản phẩm khác (sản phẩm cũ và giá không đổi)
                                            </label>
                                            &emsp;&emsp;
                                            <label for="inline-radio3" className="form-check-label ">
                                                <input type="radio" id="inline-radio3" name="radio" value="Giải quyết riêng" className="form-check-input"></input>Nói chuyện trực tiếp với bên bán để thống nhất cách giải quyết
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    &emsp;<label>Đảm bảo những thông tin được cung cấp là chính xác và hãy suy nghĩ thật kĩ trước khi gửi những thông tin này đi!</label>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#staticModal">
                                <i className="fa fa-dot-circle-o"></i> Confirm
                            </button>
                            <button type="reset" className="btn btn-danger btn-sm">
                                <i className="fa fa-ban"></i> Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Complain;