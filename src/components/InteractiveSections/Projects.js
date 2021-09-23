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
                        Alone we can do so little. Together we can do so much.  
                        <span style={{fontSize: "24px", fontWeight: "bold"}}>&#10078;</span>
                        <br/><br/>
                        <i> —Helen Keller </i>
            </h3>
            <hr/>
            <h4> Ongoing </h4>
            <div className="grid-layout">
                <ProjEntry
                title="Sakyadhita"
                img={Pic}
                shortDes="Personalized website and internal modification tool for a non-profit."
                projType = "Team Project"
                role="Project Manager &bull; Developer "
                >
                </ProjEntry>

                <ProjEntry
                title="Dyanmics"
                img={Pic}
                shortDes="Personalized website and internal modification tool for a non-profit."
                projType = "Team Project"
                role="Project Manager &bull; Developer "
                >
                </ProjEntry>

                <ProjEntry
                title="UWEAST"
                img={Pic}
                shortDes="Personalized website and internal modification tool for a non-profit."
                projType = "Team Project"
                role="Project Manager &bull; Developer "
                >
                </ProjEntry>
            </div>
            <h4> Completed </h4>
        </section>
    );
}