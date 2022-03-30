import { useState, useEffect } from "react";
import axios from "axios";
import Orders from "../../components/Order/Orders";
import { useParams } from "react-router-dom";
import { useCookies } from 'react-cookie';
function Order() {
    let params = useParams()
    const [orderItem, setOrderItem] = useState([]);
    const [cookies] = useCookies(['user']);
    const requestOrderItemUrl = "http://localhost:8080/api/donhang/khachhang/" + cookies.Id;
    
    useEffect(() => {
        const fetchOrderItem = async () => {
            const result = await axios(
                requestOrderItemUrl,
            );
            setOrderItem(result.data);
        };
        fetchOrderItem();
    }, []);

    return (
        <div class="tab-content">
            <div class="tab-pane active" id="tabs-1" role="tabpanel">
                <div class="product__details__tab__desc">
                    {/* <h3 style={{
                        textAlign: 'center'
                    }}>ĐƠN HÀNG</h3> */}
                    {
                        params.tinhtrang !== "Tất cả" 
                        ? <Orders AllOrders={orderItem.filter((item) => item.TinhTrangDon === params.tinhtrang.toString())} />
                        : <Orders AllOrders={orderItem}/>
                    }
                </div >
            </div >
        </div>
    );

}

export default Order;