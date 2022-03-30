import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ShipperInfoPage = () => {
    const [shipperInfo, setshipperInfo] = useState({});
    console.log("🚀 ~ file: index.js ~ line 6 ~ ShipperInfoPage ~ shipperInfo", shipperInfo)

    const [searchParams] = useSearchParams();
    const requestUrl = `${process.env.REACT_APP_API_ENDPOINT_CSHARP}/nguoigiaohang/${searchParams.get("id")}`;


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                requestUrl,
            );
            setshipperInfo(result.data);
        }
        fetchData();
    }, [searchParams]);



    return (
        <div className="container " style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            border: 'solid 1px green',
            borderRadius: '16px',
            boxShadow: '0px 0px 10px #888888',
            width: 500,
            marginBottom: 32, padding: 16
        }} >

            <p style={{
                display: 'block',
                marginTop: 8,
                fontWeight: 600
            }}>Mã người giao hàng: {shipperInfo.manguoigiaohang}</p>
            <p style={{
                display: 'block',
                marginTop: 8,
                fontWeight: 600
            }}>Họ tên người giao hàng: {shipperInfo.hoten_ngh}</p>

            <p style={{
                display: 'block',
                marginTop: 8
            }}>Phường, xã vị trí người giao hàng: {shipperInfo.phuongxa_ngh}</p>
            <p style={{
                display: 'block',
                marginTop: 8
            }}>Quận, huyện vị trí người giao hàng:  {shipperInfo.quanhuyen_ngh}</p>
            <p style={{
                display: 'block',
                marginTop: 8
            }}>Thành phố vị trí người giao hàng: {shipperInfo.thanhpho_ngh}</p>
            <p style={{
                display: 'block',
                marginTop: 8
            }}>Tình trạng duyệt: {shipperInfo.tinhtrangduyet}</p>
            <p style={{
                display: 'block',
                marginTop: 8
            }}>Tình trạng hoạt động: {shipperInfo.tinhtranghoatdong}</p>
            <p style={{
                display: 'block',
                marginTop: 8,
                fontWeight: 600
            }}>Đánh giá của người giao hàng: {shipperInfo.danhgia_ngh}</p>

        </div>
    )
}

export default ShipperInfoPage;