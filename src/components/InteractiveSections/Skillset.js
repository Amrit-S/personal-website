import React from "react";

import SectionTitle from "../SectionTitle";
import SkillEntry from "../SkillEntry";

export default function Skillset() {

    return (
        <section id="skillset-section">
            <SectionTitle text="Skillset" />
            <h3 style={{textAlign: "center"}}>
                        <span style={{fontSize: "24px", fontWeight: "bold"}}> &#10077;</span>
                        Knowledge is not skill. Knowledge plus ten thousand times is skill.
                        <span style={{fontSize: "24px", fontWeight: "bold"}}>&#10078;</span>
                        <br/><br/>
                        <i> —Shinichi Suzuki </i>
            </h3>
            <hr/>
            <h4> Tools/Libraries </h4>
            <div className="skillset-subsection">
                <div>
                    <SkillEntry rating={4} title="ReactJs"/>
                    <SkillEntry rating={4} title="Visual Studio"/>
                    <SkillEntry rating={4} title="GitHub/Git"/>
                    <SkillEntry rating={4} title="MongoDB"/>
                    <SkillEntry rating={4} title="Mongoose"/>
                    <SkillEntry rating={4} title="Jupyter Notebooks"/>
                    <SkillEntry rating={3.5} title="Express"/>
                    <SkillEntry rating={3.5} title="Node.js"/>
                    <SkillEntry rating={3.5} title="Material UI"/>
                    <SkillEntry rating={3} title="Bootstrap"/>
                </div>
                <div>
                    <SkillEntry rating={3} title="jQuery"/>
                    <SkillEntry rating={3} title="Keras/Tensorflow"/>
                    <SkillEntry rating={3} title="Figma"/>
                    <SkillEntry rating={3} title="Command Line"/>
                    <SkillEntry rating={3} title="GDB"/>
                    <SkillEntry rating={3} title="Valgrind"/>
                    <SkillEntry rating={2.5} title="MySQL"/>
                    <SkillEntry rating={2.5} title="SQLite"/>
                    <SkillEntry rating={2.5} title="Vim"/>
                    <SkillEntry rating={2} title="Android Studio"/>
                </div>
            </div>
            <hr/>
            <h4> Python Libraries </h4>
            <div className="skillset-subsection">
                <div>
                    <SkillEntry rating={4} title="Matplotlib"/>
                    <SkillEntry rating={3.5} title="CV2"/>
                    <SkillEntry rating={3} title="NumPy"/>
                </div>
                <div>
                    <SkillEntry rating={3} title="PIL"/>
                    <SkillEntry rating={3} title="Pandas"/>
                </div>
            </div>
            <hr/>
            <h4> Experience </h4>
            <div className="skillset-subsection">
                <div>
                    <SkillEntry rating={4.5} title="JSON"/>
                    <SkillEntry rating={4.5} title="Agile SCRUM"/>
                </div>
                <div>
                    <SkillEntry rating={3.5} title="SOLID Principles"/>
                    <SkillEntry rating={3.5} title="UML"/>
                </div>
            </div>
            <hr/>
            <h4> Languages </h4>
          
            <h5 style={{marginTop: "0"}}> Technical </h5>
            <div className="skillset-subsection">
                <div>
                    <SkillEntry rating={4.5} title="Python"/>
                    <SkillEntry rating={4} title="HTML5"/>
                    <SkillEntry rating={4} title="CSS3"/>
                    <SkillEntry rating={3.5} title="JavaScript"/>
                </div>
                <div>
                    <SkillEntry rating={3.5} title="Java"/>
                    <SkillEntry rating={3} title="C++"/>
                    <SkillEntry rating={3} title="C#"/>
                    <SkillEntry rating={2.5} title="SQL"/>
                </div>
            </div>
            <hr style={{width: "75%", marginTop: "20px"}}/>
            <h5> Non-Technical </h5>
            <div className="skillset-subsection">
                <div>
                    <SkillEntry rating={5} title="English"/>
                    <SkillEntry rating={5} title="Punjabi"/>
                </div>
                <div>
                    <SkillEntry rating={4} title="Hindi/Urdu"/>
                </div>
            </div>
          

            
        </section>
    );
}