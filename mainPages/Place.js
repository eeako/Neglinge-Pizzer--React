import React from "react";

//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2037.6589225091543!2d18.28926401616225!3d59.288551781644706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7f637efd70db%3A0x59e0942a009111c2!2sStockholmsv%C3%A4gen%203%2C%20133%2035%20Saltsj%C3%B6baden!5e0!3m2!1ssv!2sse!4v1676629600043!5m2!1ssv!2sse" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

class Place extends React.Component {
    render() {
        return (
            <div>

                <div id="placeGrid-container">

                    <div id="addressContainer">
                        <h2>Address:</h2>
                        <p>Stockholmsvägen 3, 133 35 Saltsjöbaden</p>
                    </div>
                    

                </div>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
                <script src="script.js"></script>
            </div>
        )
    }
}

export default Place;
