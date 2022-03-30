

function Colors() {
    return (
        <>
            <h4>Colors</h4>
            <div className="sidebar__item__color sidebar__item__color--white">
                <label for="white">
                    White
                    <input type="radio" id="white"></input>
                </label>
            </div>
            <div className="sidebar__item__color sidebar__item__color--gray">
                <label for="gray">
                    Gray
                    <input type="radio" id="gray"></input>
                </label>
            </div>
            <div className="sidebar__item__color sidebar__item__color--red">
                <label for="red">
                    Red
                    <input type="radio" id="red"></input>
                </label>
            </div>
            <div className="sidebar__item__color sidebar__item__color--black">
                <label for="black">
                    Black
                    <input type="radio" id="black"></input>
                </label>
            </div>
            <div className="sidebar__item__color sidebar__item__color--blue">
                <label for="blue">
                    Blue
                    <input type="radio" id="blue"></input>
                </label>
            </div>
            <div className="sidebar__item__color sidebar__item__color--green">
                <label for="green">
                    Green
                    <input type="radio" id="green"></input>
                </label>
            </div>
        </>
    );
}

export default Colors;