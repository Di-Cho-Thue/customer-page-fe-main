import ProductItem from "./ProductItem";

function ProductList(props) {
    return (
        <>
            {props.products.map((product) => (
                <ProductItem classType="col-lg-4 col-md-6 col-sm-6"
                    masanpham={product.masanpham}
                    tensanpham={product.tensanpham}
                    giasanpham={product.giasanpham}
                    danhgia={product.danhgiasanpham}
                    hinhanh={product.hinhanh}
                    soluongton={product.soluongton}
                    key={props.masanpham}
                />
            ))}
        </>
    );
}

export default ProductList;