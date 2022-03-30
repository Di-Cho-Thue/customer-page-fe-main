import { Link } from "react-router-dom";
import { Img } from "react-image";
function LastestProductItem() {
    return (
        <Link to="#" className="latest-product__item">
            <div className="latest-product__item__pic">
                <Img src="/statics/img/latest-product/lp-1.jpg" alt=""></Img>
            </div>
            <div className="latest-product__item__text">
                <h6>Crab Pool Security</h6>
                <span>$30.00</span>
            </div>
        </Link>
    );
}

export default LastestProductItem;