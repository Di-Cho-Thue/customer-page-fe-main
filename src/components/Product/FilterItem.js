function FilterItem() {
    return (
        <div className="filter__item">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="filter__sort">
                        <span>Sort By</span>
                        <select>
                            <option value="0">Default</option>
                            <option value="0">Default</option>
                        </select>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6">
                    <div className="filter__option">
                        <span className="icon_grid-2x2"></span>
                        <span className="icon_ul"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterItem;