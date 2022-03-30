import { Link } from "react-router-dom";
function CategoryItem(props) {
    return (
        <div className="col-lg-3">
            <div className="categories__item set-bg" data-setbg={props.category.hinhanhloaisanpham} style={{
                backgroundImage: "url(" + `${props.category.hinhanhloaisanpham}` + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <h5><Link to={{pathname: `loaisanpham/${props.category.maloaisanpham}/0/12`}}>{props.category.tenloaisanpham}</Link></h5>
            </div>
        </div>
    );
}

export default CategoryItem;