import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function HeroCategories() {
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
                    setCategories(data.slice(0,11));
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
        <div className="col-lg-3">
            <div className="hero__categories">
                <div className="hero__categories__all">
                    <i className="fa fa-bars"></i>
                    <span>Danh mục</span>
                </div>
                <ul>
                    {categories.map((category) => (
                        <li><Link to={{pathname: `loaisanpham/${category.maloaisanpham}/0/12`}}>{category.tenloaisanpham}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HeroCategories;