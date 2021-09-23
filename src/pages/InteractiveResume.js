 import React from "react";
 import "../css/InteractiveResume.css";

 import MapMarker from "../components/MapMarker";
 import SectionTitle from "../components/SectionTitle";

 import PersonalHeadshot from "../media/headshot.jpg";
 
 export default function InteractiveResume() {
     return (
         <div>
             {/* Section #1 - Intro/Title */}
             <section id="title-section">
                 <section id="title-text">
                    <h1 style={{fontSize: "60px", margin: "0"}}> Amrit Kaur Singh </h1>
                    <hr/>
                    <h2 style={{fontSize: "30px"}}> Interactive Resume </h2>
                 </section>

                 <section id="title-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                 </section>
             </section>

             <div id="content-body">
                 <div id="left-column"></div>
                 <div id="middle-column">

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
                                    Do not take life too seriously. You will never get out if it alive even if you try.
                                    </span>
                                    
                                    <span style={{fontSize: "24px", fontWeight: "bold"}}>&#10078;</span>
                                    <br/><br/>
                                    <span style={{textAlign: "right", textAnchor: "end"}}> <i> —Elebert Hubbard </i> </span>
                                </p>
                                
                            </div>
                        </div>
                    </section>

                 </div >
                 <div id="right-column">

                 </div>
             </div>
         </div>
     );
 }
 