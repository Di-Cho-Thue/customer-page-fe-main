import HeroBanner from "./HeroBanner";
import { useNavigate } from "react-router-dom";
function HeroSearch() {

    const navigate = useNavigate();
    function handleSearch(e)
    {
        navigate("/sanpham/" + e.target.TimKiem.value + "/0/12")
    }

    return (
        <div className="col-lg-9">
            <div className="hero__search">
                <div className="hero__search__form">
                    <form onSubmit={handleSearch}>
                        <div className="hero__search__categories">
                            Tất cả
                            <span className="arrow_carrot-down"></span>
                        </div>
                        <input type="text" placeholder="What do you need?" name="TimKiem"></input>
                        <button type="submit" className="site-btn">SEARCH</button>
                    </form>
                </div>
                <div className="hero__search__phone">
                    <div className="hero__search__phone__icon">
                        <i className="fa fa-phone"></i>
                    </div>
                    <div className="hero__search__phone__text">
                        <h5>+65 11.188.888</h5>
                        <span>support 24/7 time</span>
                    </div>
                </div>
            </div>
            <HeroBanner />
        </div>
    );
}

export default HeroSearch;