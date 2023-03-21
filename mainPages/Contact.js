import React from "react";
import Worker from "../components/Worker";

/**
 * Fname: onFocus="fnameFocus()" onblur="fnameBlur()"
 * Emal: onfocus="emailFocus()" onblur="emailBlur()"
 * 
 * 
 * 
 * <div id="drag" className="ui-widget-content">
                        <div className="square"></div>
                        <div className="square"></div>
                    </div>
 */

class Contact extends React.Component {
    render() {
        return (
            <div>
                <div id="contactGrid-container">
                    <div id="contactPage">
                        <h2>Maila oss om åsikter eller frågor: </h2>
                    </div>
                    <div id="contactForm">
                        <form action="https://www.youtube.com/watch/SeMVoSDLjG0">
                            <label htmlFor="fname">Namn: </label><br />
                            <input type="text" id="fname" className="textInput" name="fname" /><br />
                            <label htmlFor="email">Email</label><br />
                            <input type="text" id="email" className="textInput" name="email" /><br />
                            <input type="submit" value="Skicka" />
                        </form>
                    </div>
                    <table>
                        <thead>
                            <th>Bagare</th>
                            <th>Mail</th>
                            <th>Arbetsområde</th>
                        </thead>
                        <tbody>
                            <Worker name="Lena"></Worker>
                            <Worker name="Anders"></Worker>
                            <Worker name="Mio"></Worker>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Contact;
