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
                        <p> <b> Client Background </b> <br/> 
                        
                        Sakyadhita is a women centric Buddhist non-profit that centers around
                        community wellness. Their current <a href="https://www.sakyadhita.org/" target="_blank" rel="noopener noreferrer"> website </a> is very visually outdated, and relies on external technical maintenance
                        for any small updates.
                        </p>
                        <p> <b> Project Goals </b> <br/> 
                        
                        Project outcome was to do a complete modern redesign of the website, and provide 
                        an internal web tool that allows authorized members to log in and be able to make modifications to the
                        website directly. 
                        </p>
                        <p>
                            <b> Est. Completion Date: </b> Dec. 2021 
                        </p>
                        <p>
                            <b> Tech Stack: </b> SERN 
                        </p>
                        <p>
                            <b> Dependencies: </b> PayPal Smart Buttons, Material UI, Bootstrap
                        </p>
                        <p>
                            <b> Hosting: </b> DreamHost 
                        </p>

                        <p>
                            <b> Team: </b> 1 Project Manager, 6 Developers, 1 HS Intern 
                        </p>

                        <b> Responsibilties </b>
                        <ul>
                            <li> <p> Constructed project timeline, designed backend schemas/composition, and assigned tasks to developers in addition to PR code review  </p></li>
                            <li> <p> Communicated with client for feature clarifications/adjustments, tech stack negotiations, and periodic progress demos </p></li>
                            <li> <p> Developed Home Page, Contact Page (email automation), and website footer, including responsive desktop and mobile layouts </p></li>
                        </ul>
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
                    <div>
                        <p> <b> Est. Completion Date: </b> Oct. 2021 </p>
                        <p> <b> Tech Stack: </b> ReactJS </p>
                        <p> <b> Hosting: </b> Heroku </p>
                    </div>
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
                    {url: "https://barakabilal.herokuapp.com", img: EXTERNAL_LINK_ICON, title: EXTERNAL_LINK_TITLE},
                    {url: "https://github.com/TritonSE/UWEAST-Community-Kitchen", img: GITHUB_ICON, title: GITHUB_TITLE}
                ]}
                dates="Oct 2020 - Jan 2021"
                projDetails="Team &bull; Project Manager"
                >
                     <div>
                        <p> <b> Client Background </b> <br/> 
                        
                        United Women of East Africa (UWEAST) is a non-profit that provides health services and educational 
                        opportunities for the East African community. It had started a local community kitchen 
                        in San Diego featuring various East African foods, and wanted to expand it to a more
                        functional catering and order service. 

                        </p>
                        <p> <b> Project Goals </b> <br/> 
                        
                        Project outcome was to create a food ordering web application that allowed customers to browse the
                        menu, customize their selection, and pay for their order. It should further duel as an internal 
                        management tool for the operators, allowing authorized users to edit the menu and view placed orders.  
                        </p>
                        <p>
                            <b> Tech Stack: </b> MERN 
                        </p>
                        <p>
                            <b> Dependencies: </b> PayPal Smart Buttons, Material UI, Bootstrap
                        </p>
                        <p>
                            <b> Hosting: </b> Heroku 
                        </p>

                        <p>
                            <b> Team: </b> 1 Project Manager, 7 Developers 
                        </p>

                        <b> Responsibilties </b>
                        <ul>
                            <li> <p> Constructed project timeline, designed backend schemas/composition, and assigned tasks to developers in addition to PR code review  </p></li>
                            <li> <p> Communicated with client for feature clarifications/adjustments, tech stack negotiations, and periodic progress demos </p></li>
                            <li> <p> Developed Home Page, Contact Page (email automation), and website footer, including responsive desktop and mobile layouts </p></li>
                        </ul>
                    </div>
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