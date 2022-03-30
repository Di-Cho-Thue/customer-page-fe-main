import Lastest from "./Lastest";
import TopRated from "./TopRated";
import Review from "./Review";
function LastestProducts() {
    return (
        <section className="latest-product spad">
            <div className="container">
                <div className="row">
                    <Lastest />
                    <TopRated />
                    <Review />
                </div>
            </div>
        </section>
    );
}

export default LastestProducts;