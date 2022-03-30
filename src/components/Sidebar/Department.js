
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Department() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function fetchData() {
        const requestUrl = `${process.env.REACT_APP_API_URL}/loaisanpham`
        console.log(requestUrl)
        fetch(requestUrl)
            .then(res => res.json())
            .then(
                (data) => {
                    setCategories(data);
                },
                (err) => {
                    setError(err);
                }
            )
    }

    useEffect(() => {
        setLoading(true);
        //fetch to get totalPages and first page (contain {limit datas})
        fetchData()

        setLoading(false);
    }, []);
    return (
        <>
            <h4>Danh mục sản phẩm</h4>
                <ul>
                {categories.map((category) => (
                    <li><Link to={{pathname: `/loaisanpham/${category.maloaisanpham}/0/12`}}>{category.tenloaisanpham}</Link></li>
                ))}
                </ul>
        </>
    );
}

export default Department;