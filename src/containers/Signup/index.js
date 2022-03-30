import Signup from "../../components/Signup/Signup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert";
import { useCookies } from 'react-cookie';
function SignupPage() {
    const navigate = useNavigate()
    const [cookies, setCookie] = useCookies(['user']);
    function handleMatKhauDoiChieu(e) {
        e.preventDefault();
        const pass = e.target.MatKhau.value;
        const repass = e.target.MatKhauDoiChieu.value;
    }
    async function handleSignup(e) {
        e.preventDefault();
        let signup = {
            username: e.target.TenDangNhap.value,
            password: e.target.MatKhau.value,
            role: "ROLE_CUSTOMER"
        }
        console.log(signup)

        await axios("http://localhost:8080/api/auth/signup", {
            method: "POST",
            credentials: 'include',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            data: JSON.stringify(signup)
        }).then(res => {
            console.log("Đăng ký thành công!")
            Swal({
                title: "Success",
                text: "Đăng ký tài khoản thành công!",
                icon: "success",
            }).then((ok) => {
                if (ok) {
                    setCookie('Username', signup.username, { path: '/' });
                    setCookie('Id', res.data.id, { path: '/' });
                    navigate("/dangnhap")
                }
            })
            navigate("/dangnhap")

        }).catch(error => {
            Swal({
                title: "Error",
                text: "Đăng ký tài khoản không thành công!",
                icon: "error",
            }).then((ok) => {
                if (ok) {
                    window.location.reload();
                }
            })
        })
    }

    return (
        <Signup
            handleSignup={handleSignup}
            handleMatKhauDoiChieu={handleMatKhauDoiChieu}
        />
    );
}

export default SignupPage;