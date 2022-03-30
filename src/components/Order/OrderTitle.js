import { Link } from "react-router-dom";
const OrderTitle = () => {
    return (
        <>
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                    <Link className="nav-link active" data-toggle="tab" to="/donhang/Tất cả" role="tab"
                        aria-selected="true">Tất cả</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" data-toggle="tab" to="/donhang/Chờ xác nhận" role="tab"
                        aria-selected="false">Chờ xác nhận</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" data-toggle="tab" to="/donhang/Đang lấy hàng" role="tab"
                        aria-selected="false">Đang lấy hàng</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" data-toggle="tab" to="/donhang/Đang giao hàng" role="tab"
                        aria-selected="false">Đang giao hàng</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" data-toggle="tab" to="/donhang/Đã giao hàng" role="tab"
                        aria-selected="false">Đã giao hàng</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" data-toggle="tab" to="/donhang/Đã hủy" role="tab"
                        aria-selected="false">Đã hủy</Link>
                </li >
                <li className="nav-item">
                    <Link className="nav-link" data-toggle="tab" to="/donhang/Hoàn trả" role="tab"
                        aria-selected="false">Hoàn trả</Link>
                </li >
            </ul >
        </>

    );
};

export default OrderTitle;