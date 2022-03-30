

function PopularSize() {
    return (
        <>
            <h4>Popular Size</h4>
            <div className="sidebar__item__size">
                <label for="large">
                    Large
                    <input type="radio" id="large"></input>
                </label>
            </div>
            <div className="sidebar__item__size">
                <label for="medium">
                    Medium
                    <input type="radio" id="medium"></input>
                </label>
            </div>
            <div className="sidebar__item__size">
                <label for="small">
                    Small
                    <input type="radio" id="small"></input>
                </label>
            </div>
            <div className="sidebar__item__size">
                <label for="tiny">
                    Tiny
                    <input type="radio" id="tiny"></input>
                </label>
            </div>
        </>
    );
}

export default PopularSize;