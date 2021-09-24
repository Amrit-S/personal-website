import React from "react";

import MapMarker from "../MapMarker";
import SectionTitle from "../SectionTitle";

import PersonalHeadshot from "../../media/headshot.jpg";

export default function About() {
    return (
        <section id="about-section">
            <SectionTitle text="At A Glance" />
            <h3> Web Developer &bull; Student ML Researcher &bull; Baja Blast Enthusiast</h3>
            <hr/>
            <div className="about-info">
                <div>  
                    <div className="headshot-backdrop"></div>
                    <img src={PersonalHeadshot} alt="Amrit Headshot" width="250px" height="auto" style={{margin: "-330px 30px 0px 30px"}} />
                    
                    <p> 
                        <MapMarker/>
                        San Diego, USA
                    </p>
                </div>
                <div style={{textAlign: "left"}}>  
                    <h4> About Me </h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    In tellus integer feugiat scelerisque varius morbi enim. Nunc mi ipsum faucibus vitae aliquet nec. Ut morbi tincidunt augue interdum 
                    velit euismod in. Pharetra convallis posuere morbi leo urna molestie. Sapien faucibus et molestie ac feugiat sed lectus vestibulum 
                    mattis. Fermentum et sollicitudin ac orci phasellus. Donec ac odio tempor orci. Scelerisque eu ultrices vitae auctor eu augue. 
                    Enim ut sem viverra aliquet eget. At quis risus sed vulputate odio ut enim blandit.
                    <br/><br/>
                    <h4> Personal Philosophy </h4>
                    <p style={{textAlign: "center"}}>
                        <span style={{fontSize: "24px", fontWeight: "bold"}}> &#10077; </span>
                        <span style={{fontSize: "20px", textAlign: "right"}}>
                        Do not take life too seriously. You will never get out of it alive even if you try.
                        </span>
                        
                        <span style={{fontSize: "24px", fontWeight: "bold"}}>&#10078;</span>
                        <br/><br/>
                        <i> —Elebert Hubbard </i>
                    </p>
                </div>
            </div>
        </section>
    );
}