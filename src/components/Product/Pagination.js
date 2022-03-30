import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function Pagination(props) {
    let params = useParams()
    return (
        <div className="product__pagination">
            <Link to={{pathname: `/loaisanpham/${params.id}/0/12`}}>1</Link>
            <Link to={{pathname: `/loaisanpham/${params.id}/1/12`}}>2</Link>
            <Link to={{pathname: `/loaisanpham/${params.id}/2/12`}}>3</Link>
            {/* <Link to="#"><i className="fa fa-long-arrow-right"></i></Link> */}
        </div>
    );
}

export default Pagination;