import { useState, useEffect } from "react";
import ProductGrid from "../../../components/Product/ProductGrid"
import { useLocation } from "react-router-dom";
import axios from "axios";
function ProductType() {
    const [products, setProducts] = useState([]);

    const location = useLocation();

    const requestUrl = `${process.env.REACT_APP_API_URL}/sanpham${location.pathname}`

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                requestUrl,
            );

            setProducts(result.data);
        };

        fetchData();
    }, [products]);

    return (
        <ProductGrid products={products} />
    );
}

export default ProductType;
