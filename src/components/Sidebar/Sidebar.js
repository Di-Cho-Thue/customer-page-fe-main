import LastestProductList from "../Lastest/LastestProductList";
import PopularSize from "./PopularSize";
import Colors from "./Colors";
import Price from "./Price";
import Department from "./Department";
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__item">
                <Department />
            </div>
            <div className="sidebar__item">
                <Price />
                <div className="sidebar__item sidebar__item__color--option">
                    <Colors />
                </div>
                <div className="sidebar__item">
                    <PopularSize />
                </div>
                {/* <div className="sidebar__item">
                    <LastestProductList title="Latest Products" />
                </div> */}
            </div>
        </div>
    );
}

export default Sidebar;