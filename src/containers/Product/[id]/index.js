import { useState, useEffect } from "react";
import ProductDetail from "../../../components/Product/ProductDetails/ProductDetail";
import { useLocation } from "react-router-dom";
import axios from "axios";
function Details() {
    const [productDetail, setProductDetail] = useState({});
    const [loading, setloading] = useState(false);

    const location = useLocation();

    const requestUrl = `${process.env.REACT_APP_API_URL}${location.pathname}`

    useEffect(() => {
        const fetchData = async () => {
            setloading(true)
            const result = await axios(
                requestUrl,
            );
            setProductDetail(result.data);
            setloading(false)
        };

        fetchData();
    }, []);
    return loading ? null : (
        <>
            <ProductDetail ProductDetail={productDetail} />
        </>
    );
}

export default Details;