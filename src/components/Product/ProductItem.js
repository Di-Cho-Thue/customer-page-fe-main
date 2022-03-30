import { Link } from "react-router-dom";
import { numberFormatter } from "../Utility/NumberUtility";
function ProductItem(props) {
    return (
        <div className={["", props.classType].join(" ")}
            {...props}>
            <div className="product__item">
                <div className="product__item__pic set-bg" data-setbg={props.hinhanh} style={{
                    backgroundImage: "url(" + `${props.hinhanh}` + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <ul className="product__item__pic__hover">
                        <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                    </ul>
                </div>
                <div className="product__item__text">
                    <h6><Link key={props.masanpham} to={{pathname: `/sanpham/${props.masanpham}`}}>{props.tensanpham}</Link></h6>
                    <h5>{ numberFormatter(props.giasanpham) }</h5>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;