import ProductDetailPicItem from "./ProductDetailPicItem";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductTab from "../../Tab/ProductTab";
function ProductDetail(props) {
    return (
        <section className="product-details spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__pic">
                            <ProductDetailPicItem product={props.ProductDetail}/>
                        </div>
                    </div>
                    <ProductDetailInfo product={props.ProductDetail}/>
                    <ProductTab product={props.ProductDetail}/>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;