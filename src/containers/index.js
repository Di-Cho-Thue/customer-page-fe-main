import axios from "axios";
import { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Categories from "../components/Categories/Caterories";
function Home() {
    const [categories, setCategories] = useState([]);
    const [loading, setloading] = useState(false);
    const requestUrl = `${process.env.REACT_APP_API_URL}/loaisanpham`
    useEffect(() => {

        const fetchData = async () => {
            setloading(true)
            const result = await axios(
                requestUrl,
            );

            setCategories(result.data);
            setloading(false)
        };

        fetchData();
    }, []);

    const displayCategories = categories.slice(0, 4)

    return loading ? null : (
        <Fragment>
            {displayCategories.length !== 0 && <Categories categories={displayCategories} />}
        </Fragment>
    );
}

export default Home;