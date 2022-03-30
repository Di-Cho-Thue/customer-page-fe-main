import CustomerInfo from "./CustomerInfo";
import OrderInfo from "./OrderInfo";
function Checkout(props) {
    return (
        <section className="checkout spad" style={{padding: '0'}}>
            <div className="container">
                <div className="checkout__form">
                    <h4>Chi tiết thanh toán</h4>
                    <form onSubmit={props.handlePlaceOrder}>
                        <div className="row">
                            <CustomerInfo Customer={props.Customer}
                            handleChangeKhuyenMai={props.handleChangeKhuyenMai}/>
                            <OrderInfo Order={props.Order}/> 
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Checkout;