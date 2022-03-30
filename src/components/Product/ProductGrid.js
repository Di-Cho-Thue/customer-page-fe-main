import ProductList from "../Product/ProductList";
import Pagination from "./Pagination";
import ProductDiscount from "./ProductDiscount/ProductDiscount";
import Sidebar from "../Sidebar/Sidebar";
import FilterItem from "./FilterItem";

function ProductGrid(props) {
    return (
        <section class="product spad" style={{padding: '0'}}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-5">
                        <Sidebar />
                    </div>
                    <div class="col-lg-9 col-md-7">
                        {/* <ProductDiscount /> */}
                        <FilterItem />
                        <div class="row">
                            <ProductList products={props.products} />
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductGrid;

