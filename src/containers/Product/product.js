import { useState, useEffect } from "react";
import ProductGrid from "../../components/Product/ProductGrid"
import { useParams } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);
  let params = useParams()
  function fetchProduct() {
    const requestUrl = `${process.env.REACT_APP_API_URL}/sanpham/` + params.thongtin + "/0/12";
    fetch(requestUrl)
      .then(res => res.json())
      .then(
        (data) => {
          setProducts(data);
        },
        (err) => {
          
        }
      )
  }

  useEffect(() => {
    //fetch to get totalPages and first page (contain {limit datas})
    fetchProduct()
  }, []);

  return (
    <ProductGrid products={products} />
  );
}

export default Product;
