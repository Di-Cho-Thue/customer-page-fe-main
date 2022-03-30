import User from "../../components/User/User";
import { useCookies } from 'react-cookie';
import axios from "axios";
import Swal from "sweetalert";
import { useState, useEffect } from "react";
function UserPage() {
    const [cookies] = useCookies(['user']);
    const [userInfo, setUserInfo] = useState([]);
    // const [exist, setExist] = useState(false);
    //const [loading, setloading] = useState(false);

    // const requestUrl = "http://localhost:8080/api/khachhang/" + cookies.Id

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setloading(true)
    //         const result = await axios(
    //             requestUrl,
    //         );
    //         setUserInfo(result.data[0]);
    //         setloading(false)
    //     };

    //     fetchData();
    // }, []);

    async function handleUser(e) {
        e.preventDefault();
        const user = {
            MaKhachHang: cookies.Id,
            TenDangNhap: null,
            MauKhau: null,
            HoTen_KH: e.target.HoTen.value,
            CMND_KH: e.target.CMND.value,
            NgaySinh_KH: e.target.NgaySinh.value,
            GioiTinh_KH: e.target.GioiTinh.value,
            SoNha_KH: e.target.SoNha.value,
            PhuongXa_KH: e.target.PhuongXa.value,
            QuanHuyen_KH: e.target.QuanHuyen.value,
            ThanhPho_KH: e.target.ThanhPho.value,
            SoDienThoai_KH: e.target.SoDienThoai.value,
        }

        // if (userInfo.length === 0) {
            await axios("http://localhost:8080/api/dangky", {
                method: "POST",
                credentials: 'include',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                data: JSON.stringify(user)
            }).then(res => {
                console.log("Đăng ký thành công!")
                Swal({
                    title: "Success",
                    text: "Thêm thông tin thành công!",
                    icon: "success",
                }).then((ok) => {
                    if (ok) {
                        window.location.reload();
                    }
                })
            }).catch(error => {
                Swal({
                    title: "Error",
                    text: "Thêm thông tin không thành công!",
                    icon: "error",
                }).then((ok) => {
                    if (ok) {
                        window.location.reload();
                    }
                })
            })
        //}
        // else {
        //     await axios("http://localhost:8080/api/khackhang" + cookies.id, {
        //         method: "PUT",
        //         credentials: 'include',
        //         mode: 'no-cors',
        //         headers: {
        //             'Content-Type': 'application/json; charset=utf-8',
        //         },
        //         data: JSON.stringify(user)
        //     }).then(res => {
        //         console.log("Đăng ký thành công!")
        //         Swal({
        //             title: "Success",
        //             text: "Chỉnh sửa thông tin thành công!",
        //             icon: "success",
        //         }).then((ok) => {
        //             if (ok) {
        //                 window.location.reload();
        //             }
        //         })
        //     }).catch(error => {
        //         Swal({
        //             title: "Error",
        //             text: "Chỉnh sửa thông tin không thành công!",
        //             icon: "error",
        //         }).then((ok) => {
        //             if (ok) {
        //                 window.location.reload();
        //             }
        //         })
        //     })
        // }
        console.log(user)
    }

    return (
        <User handleUser={handleUser} />
    );
}

export default UserPage;