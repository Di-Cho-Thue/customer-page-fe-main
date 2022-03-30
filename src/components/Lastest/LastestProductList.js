import LastestProductItem from "./LastestProductItem";
function LastestProductList(props) {
    return (
        <div className={["", props.classType].join(" ")}
        {...props}>
            <div className="latest-product__text">
                <h4>{props.title}</h4>
                <div className="latest-product__slider owl-carousel">
                    <div className="latest-product__slider__item">
                        <LastestProductItem />
                        <LastestProductItem />
                        <LastestProductItem />
                    </div>
                    <div className="latest-product__slider__item">
                        <LastestProductItem />
                        <LastestProductItem />
                        <LastestProductItem />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LastestProductList;