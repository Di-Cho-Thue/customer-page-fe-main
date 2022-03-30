import { Link } from "react-router-dom";
function Signup(props) {
    return (
        <div class="page-wrapper">
            <div class="page-content--bge5">
                <div class="container">
                    <div class="login-wrap">
                        <div class="login-content">
                            <div class="login-logo">
                                <h3>Đăng ký</h3>
                            </div>
                            <div class="login-form">
                                <form onSubmit={props.handleSignup}>
                                    <div class="form-group">
                                        <label>Tên đăng nhập</label>
                                        <input class="au-input au-input--full" type="text" name="TenDangNhap" placeholder=""></input>
                                    </div>
                                    <div class="form-group">
                                        <label>Mật khẩu</label>
                                        <input class="au-input au-input--full" type="password" name="MatKhau" placeholder=""></input>
                                    </div>
                                    <div class="form-group">
                                        <label>Nhập lại mật khẩu</label>
                                        <input class="au-input au-input--full" type="password" name="MatKhauDoiChieu" 
                                        onKeyUp={props.handleMatKhauDoiChieu} placeholder=""></input>
                                    </div>
                                    <div class="login-checkbox">
                                        <label>
                                            <input type="checkbox" name="remember" />Remember Me
                                        </label>
                                        <label>
                                            <Link to="#">Forgotten Password?</Link>
                                        </label>
                                    </div>
                                    <button class="au-btn au-btn--block au-btn--green m-b-20" type="submit">Đăng ký</button>
                                </form>
                                <div class="register-link">
                                    <p>
                                        Don't you have account?
                                        <Link to="#">Sign Up Here</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Signup;