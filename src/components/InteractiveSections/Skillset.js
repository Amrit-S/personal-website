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
                    <SkillEntry rating={4} title="Keras/Tensorflow"/>
                    <SkillEntry rating={4} title="Jupyter Notebooks"/>
                    <SkillEntry rating={4} title="Node.js"/>
                    <SkillEntry rating={4} title="jQuery"/>
                    <SkillEntry rating={4} title="Bootstrap"/>
                </div>
                <div>
                    <SkillEntry rating={4} title="Material UI"/>
                    <SkillEntry rating={4} title="Figma"/>
                    <SkillEntry rating={4} title="Express"/>
                    <SkillEntry rating={4} title="Command Line"/>
                    <SkillEntry rating={4} title="MySQL"/>
                    <SkillEntry rating={4} title="SQLite"/>
                    <SkillEntry rating={4} title="GDB"/>
                    <SkillEntry rating={4} title="Valgrind"/>
                    <SkillEntry rating={4} title="Vim"/>
                    <SkillEntry rating={4} title="Android Studio"/>
                </div>
            </div>
            <hr/>
            <h4> Python Libraries </h4>
            <div className="skillset-subsection">
                <div>
                    <SkillEntry rating={4} title="Matplotlib"/>
                    <SkillEntry rating={4} title="CV2"/>
                    <SkillEntry rating={4} title="NumPy"/>
                </div>
                <div>
                    <SkillEntry rating={4} title="PIL"/>
                    <SkillEntry rating={4} title="Pandas"/>
                </div>
            </div>
            <hr/>
            <h4> Experience </h4>
            <div className="skillset-subsection">
                <div>
                    <SkillEntry rating={4} title="JSON"/>
                    <SkillEntry rating={4} title="Agile SCRUM"/>
                </div>
                <div>
                    <SkillEntry rating={4} title="SOLID Principles"/>
                    <SkillEntry rating={4} title="UML"/>
                </div>
            </div>
            <hr/>
            <h4> Languages </h4>
          
            <h5 style={{marginTop: "0"}}> Technical </h5>
            <div className="skillset-subsection">
                <div>
                    <SkillEntry rating={4} title="HTML5"/>
                    <SkillEntry rating={4} title="CSS3"/>
                    <SkillEntry rating={4} title="Python"/>
                    <SkillEntry rating={4} title="JavaScript"/>
                </div>
                <div>
                    <SkillEntry rating={4} title="Java"/>
                    <SkillEntry rating={4} title="C++"/>
                    <SkillEntry rating={4} title="SQL"/>
                    <SkillEntry rating={4} title="C#"/>
                </div>
            </div>
            <hr style={{width: "75%", marginTop: "20px"}}/>
            <h5> Non-Technical </h5>
            <div className="skillset-subsection">
                <div>
                    <SkillEntry rating={4} title="English"/>
                    <SkillEntry rating={4} title="Punjabi"/>
                </div>
                <div>
                    <SkillEntry rating={4} title="Hindi/Urdu"/>
                </div>
            </div>
          

            
        </section>
    );
}