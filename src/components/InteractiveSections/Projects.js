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
                webLink="hello"
                githubLink="lsjf;dfad"
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
                title="Dyanmics"
                img={Pic}
                shortDes="Personalized website and internal modification tool for a non-profit."
                projType = "Team Project"
                role="Project Manager &bull; Developer "
                >
                </ProjEntry>
            </div>
            <br/> <br/>
            <hr/>
            <h4> Completed </h4>

            <div className="grid-layout">
            <ProjEntry
                title="UWEAST"
                img={Pic}
                shortDes="Personalized website and internal modification tool for a non-profit."
                projType = "Team Project"
                role="Project Manager &bull; Developer "
                >
                </ProjEntry>

            <ProjEntry
                title="DMEK"
                img={Pic}
                shortDes="Personalized website and internal modification tool for a non-profit."
                projType = "Team Project"
                role="Project Manager &bull; Developer "
                >
                </ProjEntry>
            </div>
        </section>
    );
}