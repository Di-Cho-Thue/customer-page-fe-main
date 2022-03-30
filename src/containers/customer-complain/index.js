import { useState, useEffect } from "react";
import Complain from "../../components/Complain/Complain"
import { useLocation } from "react-router-dom";
import axios from "axios";
function ComplainPage() {
    const [orderdetail, setOrderdetail] = useState([]);

    const location = useLocation();

    const requestUrl = 'http://localhost:8080/api/donhang'

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                requestUrl,
            );

            setOrderdetail(result.data);
        };

        fetchData();
    }, [orderdetail]);

    return (
        <Complain orderdetail={orderdetail} />
    );
}

export default ComplainPage;