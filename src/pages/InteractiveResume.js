 import React from "react";
 import "../css/InteractiveResume.css";

 import SectionLayout from "../components/SectionLayout";
 import About from "../components/InteractiveSections/About";
 import Education from "../components/InteractiveSections/Education";
 import Work from "../components/InteractiveSections/Work";
 import Projects from "../components/InteractiveSections/Projects";
 
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
                 <SectionLayout>
                     <About/>
                 </SectionLayout>
                 <SectionLayout bgColor="#d3d3d3">
                     <Education/>
                 </SectionLayout>
                 <SectionLayout>
                     <Work/>
                 </SectionLayout>
                 <SectionLayout bgColor="#d3d3d3">
                     <Projects/>
                 </SectionLayout>
             </div>
         </div>
     );
 }
 