import React, {useEffect} from 'react';
import '.././App.css';
import landingright from '.././images/enterprise.gif';
import mainimage from '.././images/newback.jpg';
import aboutimage from '.././images/aboutus.png';
import webdesignimage from '.././images/websitedesign.gif';
import seoimage from '.././images/Seoservice.gif';
import marketingimage from '.././images/digitalmark.gif';
import workimage from '.././images/preview.gif';
import useWebAnimations, {fadeInUp, bounceIn}  from "@wellyshen/use-web-animations";
import Aos from 'aos';
import "aos/dist/aos.css";

export default function LandingPage() {

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);

    var mainref, serviceref1, serviceref2, serviceref3;
    {
        const {keyframes, timing} = fadeInUp;
        mainref = useWebAnimations({
            keyframes,
            timing: {
                ...timing,
                duration: timing.duration - 0.75,
            },
        });
    }
    // {
    //     const {keyframes, timing} = zoomIn;
    //     aboutref = useWebAnimations({
    //         keyframes,
    //         timing: {
    //             ...timing,
    //             duration: timing.duration - 0.75,
                
    //         }
    //     });
    // }
    
    {        
        const {keyframes, timing} = bounceIn;
        serviceref1 = useWebAnimations({
            keyframes,
            timing: {
                ...timing,
                duration: timing.duration - 0.75,
            }
        });
      
    }
    

    {
        const {keyframes, timing} = bounceIn;
        serviceref2 = useWebAnimations({
            keyframes,
            timing: {
                ...timing,
                duration: timing.duration - 0.75,
            }
        });
    }

    {
        const {keyframes, timing} = bounceIn;
        serviceref3 = useWebAnimations({
            keyframes,
            timing: {
                ...timing,
                duration: timing.duration - 0.75,
            }
        });
    }
    const service1play = () => {
        serviceref1.getAnimation().play();
    }
    const service2play = () => {
        serviceref2.getAnimation().play();
    }
    const service3play = () => {
        serviceref3.getAnimation().play();
    }
    return(
        <div>
            <div >
                <img id="main" alt="main" src={mainimage} />
                <div id="landingleft">
                    <h1 ref={mainref.ref} style={{color: "white", textAlign: "left", paddingLeft: "220px", paddingTop: "70px"}}>Innovative and <br />intelligent technology <br />solutions and <br />services</h1>
                </div>
                <div data-aos="fade-left" id="lright">
                    <img id="landingright" alt="enterpr" src={landingright} />
                </div>
            </div>
            <div id="about">
                <div id="labout">
                    <img id="aboutleft" alt="aboutimag" src={aboutimage} />
                </div>
                <div id="aboutright" data-aos="zoom-in" >
                    <h1 id="abhed">About</h1>
                    <p style={{ color: "purple", textAlign: "left", paddingRight: "50px" }}>A highly specialized Management team with over 20 combined years of experience in the Healthcare industry with proven ability to optimally combine digital technology, skilled resources and efficient business processes to implement creative as well as proven market solutions to suit an ever-evolving market. Our forte has been to successfully tailor our solutions to support your needs whether it is in the space of Consulting, Product Management or Service Delivery</p>
                </div>
            </div>
            <div id="services">
                <h1 id="servhead">Services</h1>
                <div data-aos="zoom-out-right" onMouseOver={service1play}  id="leftserv">
                    <img ref={serviceref1.ref} id="servimages" alt="webdesign" src={webdesignimage} />
                    <h3 id="servtitle">Website Designing</h3>
                </div>
                <div data-aos="zoom-out-up" onMouseOver={service2play}  id="middleserv">
                    <img ref={serviceref2.ref} id="servimages" alt="seo" src={seoimage} />
                    <h3 id="servtitle">Search Engine Optimization</h3>
                </div>
                <div data-aos="zoom-out-left" onMouseOver={service3play}  id="rightserv">
                    <img ref={serviceref3.ref} id="servimages" alt="digital market" src={marketingimage} />
                    <h3 id="servtitle">Digital Marketing</h3>
                </div>
            </div>
            <div data-aos="flip-left" id="footerimg" >
                <img id="workimage" alt="workhome" src={workimage} />
            </div>
            
        </div>
    );
}