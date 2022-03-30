import { Link, useLocation } from "react-router-dom";
function HeroBanner() {
    const location = useLocation()

    if (location.pathname === "/") {
        return (
            <div className="hero__item" style={{
                backgroundImage: "url(" + "/statics/img/hero/banner.jpg" + ")",
            }}>
                <div className="hero__text">
                    <span>FRUIT FRESH</span>
                    <h2>Vegetable <br />100% Organic</h2>
                    <p>Free Pickup and Delivery Available</p>
                    <Link to="#" className="primary-btn">SHOP NOW</Link>
                </div>
            </div>
        );
    }
    return <></>
}

export default HeroBanner;