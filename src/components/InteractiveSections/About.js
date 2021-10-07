import React from "react";

import MapMarker from "../MapMarker";
import SectionTitle from "../SectionTitle";

import PersonalHeadshot from "../../media/headshot.jpg";

export default function About() {

    return (
        <section id="about-section">
            <SectionTitle text="At A Glance" />
            <h3> Web Developer &bull; Student ML Researcher &bull; Avid Learner </h3>
            <hr/>
            <div className="about-info">
                <div id="headshot-container">  
                    <div className="headshot-backdrop"></div>
                    <img src={PersonalHeadshot} alt="Amrit Headshot" width="250px" height="auto" />
                    <div className="info">
                        {/* <p> <MapMarker/> San Diego, USA</p> */}
                        
                        <p className="hover-underline-animation"> <img src="https://img.icons8.com/material-outlined/24/000000/github.png" width="25" height="25"/> &nbsp; Amrit-S </p>
                        <p className="hover-underline-animation"> <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png" width="25" height="25" /> &nbsp; amrit-kaur-singh </p>
                    </div>
                </div>
                <div style={{textAlign: "left"}}>  
                    <h4> About Me </h4>
                    I'm currently a 4th year Computer Science major studying at UC San Diego, and will
                    be graduating in the upcoming fall of this year! I'm super excited to be joining industry full time soon, and 
                    am actively seeking a company that will be a great cultural fit. 
                    
                    <br/><br/>
                    Since my freshman year of college, I worked 
                    as a researcher and software developer for a biomedical lab on campus, recently finishing a deep learning project 
                    on early detection of DMEK graft rejections utilizing CNNs. Through a campus organization, I've also developed and managed a 
                    couple of web development projects for some local non-profits, including customized websites, 
                    food ordering applications, and internal management tools. 

                    <br/><br/>
                    I also love long walks out in nature, gourging on Taco Bell's Baja Blast Freezes, and multi-tasking on the latest
                    Turkish drama alongside a good book. Currently it's Nietzsche's <i> Thus Spoke Zarathusthra </i>.

                    <br/><br/>
                    <h4> Personal Philosophy </h4>
                    <p style={{textAlign: "center"}}>
                        <span style={{fontSize: "24px", fontWeight: "bold"}}> &#10077; </span>
                        <span style={{fontSize: "18px", textAlign: "right"}}>
                        Don't take life too seriously. You will never get out of it alive.
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