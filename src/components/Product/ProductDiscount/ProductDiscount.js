import ProductDiscountList from "./ProductDiscountList";
function ProductDiscount() {
    return (
        <div className="product__discount">
            <div className="section-title product__discount__title">
                <h2>Shop result</h2>
            </div>
            <div className="row">
                <div className="product__discount__slider owl-carousel">
                    <ProductDiscountList />
                </div>
            </div>
        </div>
    );
}

export default ProductDiscount;