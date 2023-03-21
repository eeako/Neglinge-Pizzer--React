import React from "react";

/* Background pictures */
import makePizza from '../pictureFolder/makePizza.jpg'
import firePizza from '../pictureFolder/firePizza.jpg'
import pepperoniPizza from '../pictureFolder/pepperoniPizza.jpg'

let slideIndex = 1;
let time = 5000;
function autoChange(){ changeSlide(1)}

var timer = setInterval(autoChange, time);


function changeSlide(n){
    clearInterval(timer);
    timer = setInterval(autoChange, time);

    slideIndex += n;
    showSlide();
}

function showSlide(){
    
    if(slideIndex > 3){
        slideIndex = 1;
    }
    if(slideIndex < 1){
        slideIndex = 3;
    }
    switch(slideIndex){
        case 1:
            console.log("1")
            document.getElementById("start").style.backgroundImage = `url(${makePizza})`;
            break;
        case 2:
            console.log("2")
            document.getElementById("start").style.backgroundImage = `url(${firePizza})`;
            break;
        case 3:
            console.log("3")
            document.getElementById("start").style.backgroundImage = `url(${pepperoniPizza})`;
            break;
    }

}

function randomFont(){

    var fonts = ["Arial", "Times New Roman", "Lucida Handwriting", "Copperplate", "Papyrus"];
    var randFont = Math.floor(Math.random()*fonts.length);
    document.getElementById("logo").style.fontFamily = fonts[randFont];

}

class HomePage extends React.Component{
    render(){
        return (
            <div id="homeBody">
                <div id="homeGrid-container">
                    <main id="start">
                        
                        <h1 id="logo" onMouseOver={randomFont}>** Pizzeria&nbsp;Neglinge **</h1>
                        <a id="prev" onClick={() => changeSlide(-1)}>&#10094;</a>
                        <a id="next" onClick={() => changeSlide(1)}>&#10095;</a>
                    </main>
                    <aside id="welcome">
                        <h2 id="welcomeText">Välkommen till oss vid Neglinge Station!</h2>
                    </aside>
                    <article id="contactInfo">
                        <div id="contact">
                            <h2>Kontakta oss:</h2>
                                <p>Tel.&nbsp;08-&nbsp;717&nbsp;04&nbsp;60</p>
                        </div>
                        <div id="open">
                            <h2>Öppettider:</h2>
                                <p>Mån&nbsp;-&nbsp;Fre: 11-&nbsp;21</p>
                                <p>Lör&nbsp;-&nbsp;Sön: 12-&nbsp;21</p>
                        </div>
                    </article>
                    <figure id="saucePicContainer">
                        <img id="saucePic" src={require("../pictureFolder/sauce.png")} alt="sauce on pizza"/>
                    </figure>
                    
                </div>
            </div>
          );
    }
}

export default HomePage;