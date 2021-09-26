import React from "react";

import SectionTitle from "../SectionTitle";
import ProjEntry from "../ProjEntry";

import SakyadhitaImg from "../../media/Sakyadhita.png";
import PersonalWebImg from "../../media/Personal-Website.png";
import DMEKImg from "../../media/DMEK-Tool.png";
import UWEASTImg from "../../media/UWEAST.png";
import DynamicsImg from "../../media/Dynamics.png";
import TSERecruitmentImg from "../../media/TSERecruitment.png";


const GITHUB_ICON = "https://img.icons8.com/material-outlined/24/000000/github.png";
const EXTERNAL_LINK_ICON = "https://img.icons8.com/ios-glyphs/128/000000/external-link.png";

const GITHUB_TITLE = "GitHub Source Code";
const EXTERNAL_LINK_TITLE = "External Website";

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
                img={SakyadhitaImg}
                shortDes="Revamped public website and internal modification tool for a Buddhist non-profit built on SERN stack."
                linksArr={[
                    {url: "https://github.com/TritonSE/SI-Website-Revamp", img: GITHUB_ICON, title: GITHUB_TITLE},
                ]}
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
                img={PersonalWebImg}
                shortDes="Built this website using ReactJS. Currently integrating data analytics utilizing MongoDB/Mongoose."
                linksArr={[
                    {url: "https://github.com/Amrit-S/personal-website", img: GITHUB_ICON, title: GITHUB_TITLE}
                ]}
                dates="Sept 2021 - Present"
                projDetails="Individual"
                >
                </ProjEntry>
            </div>
            <br/> <br/>
            <hr/>
            <h4> Completed </h4>

            <div className="grid-layout">
            <ProjEntry
                id="DMEK-Project"
                title="DMEK Analysis Tool"
                img={DMEKImg}
                shortDes="A supplementary analysis tool targeted for early detection of graft rejection in post-DMEK patients, utilizing machine learning techniques."
                linksArr={[
                    {url: "http://3.12.201.71/", img: EXTERNAL_LINK_ICON, title: EXTERNAL_LINK_TITLE},
                    {url: "https://github.com/Amrit-S/analysis-tool-website", img: GITHUB_ICON, title: GITHUB_TITLE}
                ]}
                dates="Jan 2020 - June 2021"
                projDetails="Team &bull; Developer &bull; Researcher"
                >
                </ProjEntry>
            <ProjEntry
                title="Baraka & Bilal Catering"
                img={UWEASTImg}
                shortDes="WebApp that allows for online food ordering of East African cuisine, and site management for a San Diego non-profit. Built on MERN stack."
                linksArr={[
                    {url: "https:google.com", img: EXTERNAL_LINK_ICON, title: EXTERNAL_LINK_TITLE},
                    {url: "https:google.com", img: GITHUB_ICON, title: GITHUB_TITLE}
                ]}
                dates="Oct 2020 - Jan 2021"
                projDetails="Team &bull; Project Manager"
                >
                </ProjEntry>
            
            <ProjEntry
                title="Dynamics Dance Team"
                img={DynamicsImg}
                shortDes="Personalized website for a San Jose based dance studio. Built using ReactJS."
                linksArr={[
                    {url: "https://dynamicsperformanceteam.com/#/", img: EXTERNAL_LINK_ICON, title: EXTERNAL_LINK_TITLE},
                    {url: "https://github.com/TritonSE/DT-Website", img: GITHUB_ICON, title: GITHUB_TITLE}
                ]}
                dates="Jan 2019 - Jun 2019"
                projDetails="Team &bull; Developer"
                >
                </ProjEntry>

            <ProjEntry
                title="TSE Internal Recruitment Tool"
                img={TSERecruitmentImg}
                shortDes="Utilized by an UC San Diego engineering org to streamline their heavy recruitment process."
                dates="Feb 2019 - April 2019"
                projDetails="Team &bull; Developer"
                >
                </ProjEntry>
            </div>
        </section>
    );
}