import React from "react";

class Pizza extends React.Component {
    render() {
        return (
            <div>
                <div id="specMenuGrid-container">
                    <div className="selectedMenu">
                        <h1>Pizza meny</h1>
                    </div>

                    <div className="pizzaSpec">
                        <h3>90kr&nbsp;Margarita</h3>
                        <h4>Vegetarisk</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Consectetur, natus ullam assumenda ad commodi laboriosam repellendus, </p>
                    </div>
                    <div className="pizzaSpec">
                        <h3>90kr&nbsp;Vesuvio</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Consectetur, natus ullam assumenda ad commodi laboriosam repellendus,</p>
                    </div>
                    <div className="pizzaSpec">
                        <h3>90kr&nbsp;Hawaii</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Consectetur, natus ullam assumenda ad commodi laboriosam repellendus, </p>
                    </div>
                    <div className="pizzaSpec">
                        <h3>90kr&nbsp;Vegeteriana</h3>
                        <h4>Vegetarisk</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Consectetur, natus ullam assumenda ad commodi laboriosam repellendus,</p>
                    </div>
                </div>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
                <script src="script.js"></script>
            </div>
        )
    }
}

export default Pizza;