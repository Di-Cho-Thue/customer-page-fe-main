import { Link } from "react-router-dom";
function Signin(props) {
    return (
        <div class="page-wrapper">
            <div class="page-content--bge5">
                <div class="container">
                    <div class="login-wrap">
                        <div class="login-content">
                            <div class="login-logo">
                                <h3>Đăng nhập</h3>
                            </div>
                            <div class="login-form">
                                <form onSubmit={props.handleSignin}>
                                    <div class="form-group">
                                        <input class="au-input au-input--full" type="text" name="TenDangNhap" placeholder="Tên đăng nhập"></input>
                                    </div>
                                    <div class="form-group">
                                        <input class="au-input au-input--full" type="password" name="MatKhau" placeholder="Mật khẩu"></input>
                                    </div>
                                    <div class="login-checkbox">
                                        <label>
                                            <input type="checkbox" name="remember" />Remember Me
                                        </label>
                                        <label>
                                            <Link to="#">Forgotten Password?</Link>
                                        </label>
                                    </div>
                                    <button class="au-btn au-btn--block au-btn--green m-b-20" type="submit">Đăng nhập</button>
                                </form>
                                <div class="register-link">
                                    <p>
                                        Don't you have account?
                                        <Link to="/dangky">Sign Up Here</Link>
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

export default Signin;