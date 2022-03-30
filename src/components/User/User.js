
import { useCookies } from 'react-cookie';
function User(props) {
    const [cookies] = useCookies(['user']);

    //console.log(props.user.length)
    
    // if(props.user.length === 0)
    // {
        return(
            <div className="container-fluid mt--7">
                <div className="row">
                    <div className="col-xl-8 order-xl-1" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                        <div className="card bg-secondary shadow">
                            <form onSubmit={props.handleUser}>
                                <div className="card-header bg-white border-0">
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <h3 className="mb-0">Tài khoản của bạn</h3>
                                        </div>
                                        <div className="col-4 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary">Save</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body bg-white">
                                    <h6 className="heading-small text-muted mb-4">Thông tin cá nhân</h6>
                                    <div className="pl-lg-4">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" for="input-username">Tên đăng nhập</label>
                                                    <input type="text"
                                                        className="form-control form-control-alternative" name="TenDangNhap" 
                                                        value={cookies.Id}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="form-control-label" for="input-email">Họ tên</label>
                                                    <input type="text"
                                                        className="form-control form-control-alternative"name="HoTen" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" for="input-first-name">Ngày sinh</label>
                                                    <input type="date"
                                                        className="form-control form-control-alternative"name="NgaySinh" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" for="input-last-name">Chứng minh nhân dân</label>
                                                    <input type="text" 
                                                        className="form-control form-control-alternative" name="CMND" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" for="input-phone">Số điện thoại</label>
                                                    <input type="text"
                                                        className="form-control form-control-alternative" name="SoDienThoai" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" for="input-last-name">Giới tính</label>
                                                    <br/>
                                                    <div class="form-check-inline">
                                                        <input type="radio" name="GioiTinh" style={{ height: '20px', width: '20px' }}
                                                            value="Nam" checked />&emsp;Nam
                                                    </div>
                                                    <br />
                                                    <div class="form-check-inline">
                                                        <input type="radio" name="GioiTinh" style={{ height: '20px', width: '20px' }}
                                                            value="Nữ" />&emsp;Nữ
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
    
                                    <h6 className="heading-small text-muted mb-4">Địa chỉ</h6>
                                    <div className="pl-lg-4">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" for="input-address">Số nhà</label>
                                                    <input className="form-control form-control-alternative"
                                                        type="text" name="SoNha" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" for="input-city">Phường/xã</label>
                                                    <input type="text" 
                                                        className="form-control form-control-alternative"  name="PhuongXa" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" for="input-country">Quận/huyện</label>
                                                    <input type="text" 
                                                        className="form-control form-control-alternative" name="QuanHuyen" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label className="form-control-label" for="input-country">Thành phố</label>
                                                    <input type="text" className="form-control form-control-alternative" name="ThanhPho" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    //}
    // else
    // {
    //     return (
    //         <div className="container-fluid mt--7">
    //             <div className="row">
    //                 <div className="col-xl-8 order-xl-1" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
    //                     <div className="card bg-secondary shadow">
    //                         <form onSubmit={props.handleUser}>
    //                             <div className="card-header bg-white border-0">
    //                                 <div className="row align-items-center">
    //                                     <div className="col-8">
    //                                         <h3 className="mb-0">Tài khoản của bạn</h3>
    //                                     </div>
    //                                     <div className="col-4 text-right">
    //                                         <button type="submit" className="btn btn-sm btn-primary">Save</button>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="card-body bg-white">
    //                                 <h6 className="heading-small text-muted mb-4">Thông tin cá nhân</h6>
    //                                 <div className="pl-lg-4">
    //                                     <div className="row">
    //                                         <div className="col-lg-6">
    //                                             <div className="form-group focused">
    //                                                 <label className="form-control-label" for="input-username">Tên đăng nhập</label>
    //                                                 <input type="text"
    //                                                     className="form-control form-control-alternative" name="TenDangNhap"
    //                                                     value={cookies.Id} />
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-lg-6">
    //                                             <div className="form-group">
    //                                                 <label className="form-control-label" for="input-email">Họ tên</label>
    //                                                 <input type="text"
    //                                                     className="form-control form-control-alternative" name="HoTen"
    //                                                     value={props.user.HoTen_KH} />
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                     <div className="row">
    //                                         <div className="col-lg-6">
    //                                             <div className="form-group focused">
    //                                                 <label className="form-control-label" for="input-first-name">Ngày sinh</label>
    //                                                 <input type="date"
    //                                                     className="form-control form-control-alternative" name="NgaySinh"
    //                                                     value={props.user.NgaySinh_KH} />
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-lg-6">
    //                                             <div className="form-group focused">
    //                                                 <label className="form-control-label" for="input-last-name">Chứng minh nhân dân</label>
    //                                                 <input type="text"
    //                                                     className="form-control form-control-alternative" name="CMND"
    //                                                     value={props.user.CMND_KH} />
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                     <div className="row">
    //                                         <div className="col-lg-6">
    //                                             <div className="form-group focused">
    //                                                 <label className="form-control-label" for="input-phone">Số điện thoại</label>
    //                                                 <input type="text"
    //                                                     className="form-control form-control-alternative" name="SoDienThoai"
    //                                                     value={props.user.SoDienThoai_KH} />
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-lg-6">
    //                                             <div className="form-group focused">
    //                                                 <label className="form-control-label" for="input-last-name">Giới tính</label>
    //                                                 <br />
    //                                                 {
    //                                                     props.user.GioiTinh_KH === "Nam" &&
    //                                                     <>
    //                                                         <div class="form-check-inline">
    //                                                             <input type="radio" name="GioiTinh" style={{ height: '20px', width: '20px' }}
    //                                                                 value="Nam" checked />&emsp;Nam
    //                                                         </div>
    //                                                         <br />
    //                                                         <div class="form-check-inline">
    //                                                             <input type="radio" name="GioiTinh" style={{ height: '20px', width: '20px' }}
    //                                                                 value="Nữ" />&emsp;Nữ
    //                                                         </div>
    //                                                     </>
    //                                                 }

    //                                                 {
    //                                                     props.user.GioiTinh_KH === "Nữ" &&
    //                                                     <>
    //                                                         <div class="form-check-inline">
    //                                                             <input type="radio" name="GioiTinh" style={{ height: '20px', width: '20px' }}
    //                                                                 value="Nam" />&emsp;Nam
    //                                                         </div>
    //                                                         <br />
    //                                                         <div class="form-check-inline">
    //                                                             <input type="radio" name="GioiTinh" style={{ height: '20px', width: '20px' }}
    //                                                                 value="Nữ" checked />&emsp;Nữ
    //                                                         </div>
    //                                                     </>
    //                                                 }

    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                                 <hr className="my-4" />

    //                                 <h6 className="heading-small text-muted mb-4">Địa chỉ</h6>
    //                                 <div className="pl-lg-4">
    //                                     <div className="row">
    //                                         <div className="col-md-12">
    //                                             <div className="form-group focused">
    //                                                 <label className="form-control-label" for="input-address">Số nhà</label>
    //                                                 <input className="form-control form-control-alternative"
    //                                                     type="text" name="SoNha" value={props.user.SoNha_KH} />
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                     <div className="row">
    //                                         <div className="col-lg-4">
    //                                             <div className="form-group focused">
    //                                                 <label className="form-control-label" for="input-city">Phường/xã</label>
    //                                                 <input type="text"
    //                                                     className="form-control form-control-alternative" name="PhuongXa"
    //                                                     value={props.user.PhuongXa_KH} />
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-lg-4">
    //                                             <div className="form-group focused">
    //                                                 <label className="form-control-label" for="input-country">Quận/huyện</label>
    //                                                 <input type="text"
    //                                                     className="form-control form-control-alternative" name="QuanHuyen"
    //                                                     value={props.user.QuanHuyen_KH} />
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-lg-4">
    //                                             <div className="form-group">
    //                                                 <label className="form-control-label" for="input-country">Thành phố</label>
    //                                                 <input type="text" className="form-control form-control-alternative" name="ThanhPho"
    //                                                     value={props.user.ThanhPho_KH} />
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                                 <hr className="my-4" />
    //                             </div>
    //                         </form>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }
}

export default User;