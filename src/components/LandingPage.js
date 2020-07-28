import React from 'react';
import '.././App.css';
import landingright from '.././images/enterprise.gif';
import mainimage from '.././images/newback.jpg';
import aboutimage from '.././images/aboutus.png';
import useWebAnimations, {fadeInUp} from "@wellyshen/use-web-animations";

export default function LandingPage() {
    const {keyframes, timing} = fadeInUp;
    const {ref} = useWebAnimations({
        keyframes,
        timing: {
            ...timing,
            duration: timing.duration - 0.75,
        },
    });
    return(
        <div>
            <div >
                <img id="main" alt="main" src={mainimage} />
                <div id="landingleft">
                    <h1 ref={ref} style={{color: "white", textAlign: "left", paddingLeft: "220px", paddingTop: "70px"}}>Innovative and <br />intelligent technology <br />solutions and <br />services</h1>
                </div>
                <div id="lright">
                    <img id="landingright" alt="enterpr" src={landingright} />
                </div>
            </div>
            <div id="about">
                <div id="labout">
                    <img id="aboutleft" alt="aboutimag" src={aboutimage} />
                </div>
                <div id="aboutright">
                    <h1 id="abhed">About</h1>
                    <p style={{ color: "purple", textAlign: "left", paddingRight: "50px" }}>A highly specialized Management team with over 20 combined years of experience in the Healthcare industry with proven ability to optimally combine digital technology, skilled resources and efficient business processes to implement creative as well as proven market solutions to suit an ever-evolving market. Our forte has been to successfully tailor our solutions to support your needs whether it is in the space of Consulting, Product Management or Service Delivery</p>
                </div>

            </div>
        </div>
    );
}