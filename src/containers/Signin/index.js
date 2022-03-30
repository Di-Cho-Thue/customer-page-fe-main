import Signin from "../../components/Signin/Signin";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert";
import { useCookies } from 'react-cookie';
function SigninPage() {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['user']);
    async function handleSignin(e){
        e.preventDefault();
        let signin = {
                username : e.target.TenDangNhap.value,
                password : e.target.MatKhau.value,
                role : "ROLE_CUSTOMER"
        }
        console.log(signin)

        await axios("http://localhost:8080/api/auth/signin", {
                method: "POST",
                credentials: 'include',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                data: JSON.stringify(signin)
            }).then(res => {
                console.log("Đăng nhập thành công!")
                if(res.data.id == null)
                {
                    Swal({
                        title: "Warning",
                        text: "Bạn chưa có tài khoản người dùng, hệ thống chuyển hướng tới trang đăng ký!",
                        icon: "warning",
                    }).then((ok) => {
                        if (ok) {
                            navigate("/dangky")
                        }
                    })
                    navigate("/dangky")
                }
                else
                {
                    setCookie('Username', signin.username, { path: '/' });
                    setCookie('Id', res.data.id, { path: '/' });
                    navigate("/")
                }
                //navigate("/")
            }).catch(error => {
                Swal({
                    title: "Error",
                    text: "Đăng nhập không thành công!",
                    icon: "error",
                }).then((ok) => {
                    if (ok) {
                        window.location.reload();
                    }
                })
            }) 
    }
    return (
        <Signin handleSignin={handleSignin}/>
    );
}

export default SigninPage;