import { Link } from "react-router-dom";

function ProductDiscountItem(props) {
    return (
        <div className={["", props.classType].join(" ")}
            {...props}>
            <div class="product__discount__item">
                <div class="product__discount__item__pic set-bg"
                    data-setbg="img/product/discount/pd-1.jpg">
                    <div class="product__discount__percent">-20%</div>
                    <ul class="product__item__pic__hover">
                        <li><Link to="#"><i class="fa fa-heart"></i></Link></li>
                        <li><Link to="#"><i class="fa fa-retweet"></i></Link></li>
                        <li><Link to="#"><i class="fa fa-shopping-cart"></i></Link></li>
                    </ul>
                </div>
                <div class="product__discount__item__text">
                    <span>Dried Fruit</span>
                    <h5><Link to="#">Raisin’n’nuts</Link></h5>
                    <div class="product__item__price">$30.00 <span>$36.00</span></div>
                </div>
            </div>
        </div>
    );
}

export default ProductDiscountItem;