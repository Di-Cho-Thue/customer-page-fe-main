import OrderTitle from "./OrderTitle";
import OrderList from "./OrderList";

const Orders = (props) => {
    return (
        <div className="container" style={{ backgroundColor: 'white' }}>
            <div className="row">
                <div className="col-lg-12">
                    <div className="product__details__tab">
                        <OrderTitle />
                        <div className="tab-content">
                            <OrderList id="tabs-1" OrderList={props.AllOrders}/>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Orders;

