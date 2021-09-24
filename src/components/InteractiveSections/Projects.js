import React from "react";

import SectionTitle from "../SectionTitle";
import ProjEntry from "../ProjEntry";

import Pic from "../../media/Sakyadhita.png";

export default function Projects() {

    return (
        <section id="projects-section">
            <SectionTitle text="Projects" />
            <h3 style={{textAlign: "center"}}>
                        <span style={{fontSize: "24px", fontWeight: "bold"}}> &#10077;</span>
                        For the strength of the Pack is the Wolf and the strength of the Wolf
                        is the Pack.   
                        <span style={{fontSize: "24px", fontWeight: "bold"}}>&#10078;</span>
                        <br/><br/>
                        <i> —Mowgli, The Jungle Book </i>
            </h3>
            <hr/>
            <h4> Ongoing </h4>
            <div className="grid-layout">
                <ProjEntry
                title="Sakyadhita"
                img={Pic}
                shortDes="Personalized website and internal modification tool for a non-profit."
                githubLink="https://www.google.com/"
                dates="Mar 2021 - Present"
                projDetails="Team &bull; Project Manager"
                >
                    <div>
                        <h1> AMIRIT KLSJF:LSDJ </h1>
                        <p> Hello my name is Amrit </p>
                        <h1> AMIRIT KLSJF:LSDJ </h1>
                        <p> Hello my name is Amrit </p>
                        <h1> AMIRIT KLSJF:LSDJ </h1>
                        <p> Hello my name is Amrit </p>
                        <h1> AMIRIT KLSJF:LSDJ </h1>
                        <p> Hello my name is Amrit </p>
                    </div>
                </ProjEntry>

                <ProjEntry
                title="Personal Website"
                img={Pic}
                shortDes="Personalized website and internal modification tool for a non-profit."
                webLink="https://www.google.com/"
                githubLink="https://www.google.com/"
                dates="Sept 2021"
                projDetails="Individual"
                >
                </ProjEntry>
            </div>
            <br/> <br/>
            <hr/>
            <h4> Completed </h4>

            <div className="grid-layout">
            <ProjEntry
                title="Early Detection of DMEK Graft Rejection"
                img={Pic}
                shortDes="Personalized website and internal modification tool for a non-profit."
                webLink="https://www.google.com/"
                githubLink="https://www.google.com/"
                dates="Mar 19 -"
                projDetails="Team &bull; Project Manager"
                >
                </ProjEntry>
            <ProjEntry
                title="UWEAST Community Kitchen"
                img={Pic}
                shortDes="Personalized website and internal modification tool for a non-profit."
                webLink="https://www.google.com/"
                githubLink="https://www.google.com/"
                dates="Mar 19 -"
                projDetails="Team &bull; Project Manager"
                >
                </ProjEntry>
            
            <ProjEntry
                title="Dynamics Dance Team"
                img={Pic}
                shortDes="Personalized website and internal modification tool for a non-profit."
                webLink="https://www.google.com/"
                githubLink="https://www.google.com/"
                dates="Mar 19 -"
                projDetails="Team &bull; Project Manager"
                >
                </ProjEntry>

            <ProjEntry
                title="TSE Internal Recruitment Tool"
                img={Pic}
                shortDes="Personalized website and internal modification tool for a non-profit."
                githubLink="https://www.google.com/"
                dates="Mar 19 -"
                projDetails="Team &bull; Project Manager"
                >
                </ProjEntry>
            </div>
        </section>
    );
}