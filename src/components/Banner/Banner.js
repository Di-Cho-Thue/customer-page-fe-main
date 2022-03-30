import { Img } from "react-image";
function Banner() {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="banner__pic">
                            <Img src="/statics/img/banner/banner-1.jpg" alt=""></Img>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="banner__pic">
                            <Img src="/statics/img/banner/banner-2.jpg" alt=""></Img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;