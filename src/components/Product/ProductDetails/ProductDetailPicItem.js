import { Img } from "react-image";


function ProductDetailPicItem(props) {
    return (
        <div className="product__details__pic__item">
            <Img className="product__details__pic__item--large"
                src={`${props.product.hinhanh}`} alt="" style={{
                    backgroundImage: "url(" + `${props.product.hinhanh}` + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}></Img>
        </div>
    );
}

export default ProductDetailPicItem;