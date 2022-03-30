import OrderItem from "./OrderItem";

const OrderList = (props) => {
    return (
        <div className="tab-pane active" id={props.id} role="tabpanel" >
            <div className="product__details__tab__desc">
                {
                    props.OrderList.map((order) => (
                        <OrderItem key={order.MaDonHang} Order={order}/>
                    ))
                }
            </div>
        </div>
    );
};

export default OrderList;