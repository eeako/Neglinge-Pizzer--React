import React from "react";

/**
 * Play/Pause: onClick={window['playPause']}
 * Restart: onClick="restart()"
 * Mute: onClick="muteOnOff()"
 */

class About extends React.Component {
    render() {
        return (
            <div>
                <div id="aboutUsGrid-container">
                    <figure>
                        <img id="cartoon" src={require("../pictureFolder/tecknad.png")} alt="cartoon waiter holding pizza" />
                    </figure>
                    <article id="abt1">
                        <h2>Hur skapades pizzerian</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint deleniti fuga necessitatibus quasi in qui nemo recusandae assumenda iusto distinctio sunt, incidunt reprehenderit harum omnis voluptate sed illum labore aperiam.</p>
                    </article>
                    <article id="abt2">
                        <h2>Vi är hållbara</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque molestiae asperiores itaque aut dicta atque et nihil rerum aliquam delectus?
                            Ipsum nulla in eveniet harum? Perferendis ipsam perspiciatis nam nihil.</p>
                    </article>

                    <figure id="videoContainer">
                        <video id="thatOmori">
                            <source src={require("../pictureFolder/burntPizza.mp4")} type="video/mp4" />
                            Your browser does not support HTML video
                        </video>
                        <div id="buttonGroup">
                            <button >Play/Pause</button>
                            <button >Restart</button>
                            <button >Mute/Unmute</button>
                        </div>
                    </figure>

                </div>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
                <script src="script.js"></script>
            </div>
        );
    }
}

export default About;
