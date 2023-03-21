import React from "react";

class Menu extends React.Component {
    render() {
        return (
            <div>
                <div id="menuGrid-container">

                    <a href="menu/pizza" className="menu" id="pizzaMenu">
                        <div className="menuNav">
                            <h3>Pizza</h3>
                        </div>
                    </a>
                    <a href="menu/grill" className="menu" id="grillMenu">
                        <div className="menuNav">
                            <h3>Grill</h3>
                        </div>
                    </a>
                    <a href="menu/lunch" className="menu" id="lunchMenu">
                        <div className="menuNav">
                            <h3>Lunch</h3>
                        </div>
                    </a>
                    <a href="menu/sallad" className="menu" id="salladMenu">
                        <div className="menuNav">
                            <h3>Sallad</h3>
                        </div>
                    </a>
                </div>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
                <script src="script.js"></script>

            </div>
        )
    }
}

export default Menu;
