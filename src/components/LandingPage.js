import React from 'react';
import '.././App.css';
import landingright from '.././images/enterprise.gif';
import mainimage from '.././images/newback.jpg';

export default function LandingPage() {
    return(
        <div>
            <div >
                <img id="main" alt="main" src={mainimage} />
            
            <div id="landingleft">
                <h1 style={{color: "white", textAlign: "left", paddingLeft: "220px", paddingTop: "70px"}}>Innovative and <br />intelligent technology <br />solutions and <br />services</h1>
            </div>
            <div id="lright">
                <img id="landingright" alt="enterpr" src={landingright} />
            </div>

            </div>
        </div>
    );
}