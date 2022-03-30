import { useState, useEffect } from "react";
import axios from "axios";
import Checkout from "../../components/Checkout/Checkout";
import { useParams, useNavigate } from "react-router-dom";
import nodeDate from "date-and-time";
import Swal from "sweetalert";
import { useCookies } from 'react-cookie';
function CheckoutPage() {
    const [customer, setCustomer] = useState([]);
    const [cardItem, setCardItem] = useState([]);
    const [cookies] = useCookies(['user']);
    let params = useParams();
    const navigate = useNavigate();
    let MaUuDai = null;

    const requestCustomerUrl = `${process.env.REACT_APP_API_URL}/khachhang/` + cookies.Id;
    const requestCardItemUrl = `${process.env.REACT_APP_API_URL}/giohang/khachhang/` + cookies.Id;

    useEffect(() => {
        const fetchCustomerItem = async () => {
            const result = await axios(
                requestCustomerUrl,
            );

            setCustomer(result.data);
        };

        const fetchCardItem = async () => {
            const result = await axios(
                requestCardItemUrl,
            );
            setCardItem(result.data.filter((item) => item.MaGianHang === params.magianhang && item.MaKhachHang === cookies.Id));
        };

        fetchCustomerItem();
        fetchCardItem();

    }, []);

    function randomMaDonHang() {
        return "DH" + (Math.floor((Math.random() * 100000000) + 1)).toString();
    }

    async function checkMaDonHang(madonhang) {
        const requestCheckCodeUrl = "http://localhost:8080/api/donhang/kiemtra/" + madonhang

        const result = await axios(
            requestCheckCodeUrl,
        );
        return result.data;
    }

    async function checkMaUuDai(mauudai) {
        const requestCheckCodeUrl = "https://localhost:44369/api/uudai/kiemtra/" + mauudai

        console.log(requestCheckCodeUrl)

        const result = await axios(
            requestCheckCodeUrl,
        );
        return result.data;
    }

    async function handleChangeKhuyenMai(e) {
        e.preventDefault();
        let ThanhTien = document.getElementById("ThanhTien").value;
        
        MaUuDai = document.getElementById("KhuyenMai").value;

        console.log(await checkMaUuDai(MaUuDai))

        if(MaUuDai === "" || await checkMaUuDai(MaUuDai) === 0)
        {
            MaUuDai = null;
            document.getElementById("TongTien").value = ThanhTien;
            document.getElementById("PhanTram").value = 0;
        }
        else {
            const requestUuDaieUrl = "https://localhost:44369/api/uudai/" + MaUuDai

            const result = await axios(
                requestUuDaieUrl,
            );

            const uudai = result.data;
            let tienuudai = parseFloat(ThanhTien) * (uudai.phantramkm / 100)
            document.getElementById("PhanTram").value = uudai.phantramkm;
 
            if(tienuudai > uudai.toidakm)
            {
                tienuudai = uudai.toidakm
            }
            document.getElementById("TongTien").value =  (parseFloat(ThanhTien) - parseFloat(tienuudai)).toFixed(3);
        }
        console.log("Khuyến mãi")
    }

    async function handlePlaceOrder(e) {
        e.preventDefault();

        let SanPham = [];
        let now = nodeDate.format(new Date(), 'YYYY-MM-DD hh:mm:ss');
        let MaDonHang = randomMaDonHang();

        while ((await checkMaDonHang(MaDonHang)) !== 0)
        {
            MaDonHang = randomMaDonHang();
            if((await checkMaDonHang(MaDonHang)) === 0)
            {
                break;
            }
        }
        console.log(MaDonHang)

        let Order = {
            madonhang: MaDonHang,
            hinhthucthanhtoan: e.target.HinhThucThanhToan.value,
            ngaylapdon: now,
            tinhtrangdon: "Chờ xác nhận",
            tongtien: e.target.TongTien.value * 1000,
            khuyenmai: MaUuDai,
            makhachhang: cookies.Id,
            manguoigiaohang: null,
            gianhang: params.magianhang
        }

        for (let i = 0; i < cardItem.length; i++) {
            const temp = {
                MaDonHang: MaDonHang,
                MaSanPham: cardItem[i]["MaSanPham"],
                DonGia: cardItem[i]["DonGia"],
                SoLuong: cardItem[i]["SoLuong"],
            }
            SanPham.push(temp)
        }

        try {
            await axios("https://localhost:44369/api/donhang", {
                method: "POST",
                credentials: 'include',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                data: JSON.stringify(Order)
            })

            for (let i = 0; i < SanPham.length; i++) {
                await axios("https://localhost:44369/api/chitietdonhang", {
                    method: "POST",
                    credentials: 'include',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                    data: JSON.stringify(SanPham[i])
                })

                const deleteURL = "http://localhost:8080/api/giohang/" + cookies.Id + "/" + SanPham[i]["MaSanPham"]

                await axios(deleteURL, {
                    method: "DELETE",
                    credentials: 'include',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                    }
                }).then(result =>
                    Swal({
                        title: "Success",
                        text: "Thêm đơn hàng thành công!",
                        icon: "success",
                    }).then((ok) => {
                        navigate("/giohang")
                    }))
            }
        } catch (error) {
            Swal({
                title: "Error!",
                text: "Thêm đơn hàng không thành công!",
                icon: "error",
            })
        }
        console.log(Order)
    }

    return (
        <Checkout
            Customer={customer}
            Order={cardItem}
            handlePlaceOrder={handlePlaceOrder}
            handleChangeKhuyenMai={handleChangeKhuyenMai}
        />
    );

}

export default CheckoutPage;