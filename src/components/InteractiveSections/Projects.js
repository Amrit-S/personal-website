import React from "react";

import SectionTitle from "../SectionTitle";
import ProjEntry from "../ProjEntry";

import SakyadhitaImg from "../../media/Sakyadhita.png";
import PersonalWebImg from "../../media/Personal-Website.png";
import DMEKImg from "../../media/DMEK-Tool.png";
import UWEASTImg from "../../media/UWEAST.png";
import DynamicsImg from "../../media/Dynamics.png";


const GITHUB_ICON = "https://img.icons8.com/material-outlined/24/000000/github.png";
const EXTERNAL_LINK_ICON = "https://img.icons8.com/ios-glyphs/128/000000/external-link.png";
const FIGMA_ICON = "https://img.icons8.com/ios-glyphs/30/000000/figma.png";

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
                        <p> <b> Non-Profit: </b>  Sakyadhita </p> 
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
                            <b> Hosting: </b> DreamHost (Site), DropBox (Image)
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
            </div>
            <br/> <br/>
            <hr/>
            <h4> Completed </h4>

            <div className="grid-layout">

            <ProjEntry
                title="Personal Website"
                img={PersonalWebImg}
                shortDes="Built this website from scratch using ReactJS."
                linksArr={[
                    {url: "https://github.com/Amrit-S/personal-website", img: GITHUB_ICON, title: GITHUB_TITLE}
                ]}
                dates="Sept 2021"
                projDetails="Individual"
                >
                    <div>
                        <p> <b> Tech Stack: </b> ReactJS </p>
                        <p> <b> Hosting: </b> Heroku </p>
                    </div>
                </ProjEntry>

            <ProjEntry
                id="DMEK-Project"
                title="DMEK Analysis Tool"
                img={DMEKImg}
                shortDes="A supplementary analysis tool targeted for early detection of graft rejection in post-DMEK patients, utilizing machine learning techniques."
                linksArr={[
                    {url: "http://3.12.201.71/", img: EXTERNAL_LINK_ICON, title: EXTERNAL_LINK_TITLE},
                    {url: "https://github.com/Amrit-S/analysis-tool-website", img: GITHUB_ICON, title: GITHUB_TITLE},
                    {url: "https://www.figma.com/file/tOMep8DOHaqf0vQUR9J7Rc/Talke-Lab---DMEK-Analysis-Tool", img: FIGMA_ICON, title: "Figma Designs"}
                ]}
                dates="Jan 2020 - June 2021"
                projDetails="Team &bull; Developer &bull; Researcher"
                >
                    <div>
                        <p> <b> DMEK Background </b> <br/> 
                            
                            Descemet Membrane Endothelial Keratoplasty (DMEK) is a corneal transplant procedure that uses the 
                            working corneal endothelium of a donor to help correct vision loss. Though 
                            uncommon, it has the potential danger of having the recipient eye reject 
                            the donor graft, resulting in possible infection, swelling, or hemorrhage. Consequently, it 
                            is necessary for physicians to monitor patients for any signs of graft 
                            rejection up to a year (or more) after surgery. 
                        </p>

                        <p> <b> Project Goals & Dataset </b> <br/> 
                        
                            We collaborated with <a href="https://www.niios.com/niios/team/" target="_blank" rel="noopener noreferrer"> Dr. Gerrit Melles of the NIIOS institute </a> in figuring out a way to detect
                            graft rejection in post-DMEK patients as early as possible, as the traditional montitoring 
                            process requires monthly check-ups for up to a couple of years. This is because graft rejection 
                            tends to be quite slow to show signficant symptoms, and is often quite individualistic to the
                            patient itself. 
                            <br/><br/>
                            As Dr. Melles is one of the primary 
                            corneal surgeons for DMEK surgery, he provided us with time series endothelial images
                            from some previously diagnosed DMEK patients, including their ultimate status on rejection. 
                            The goal was to utilize various machine learning techniques on this data set
                            to hopefully develop a faster and reliable approach to DMEK rejection.
                        </p>

                        <p> <b> Analysis Tool WebApplication </b> </p>

                        <p>
                            <b> Tech Stack: </b> ERN 
                        </p>
                        <p>
                            <b> Dependencies: </b> TFJS, Bootstrap
                        </p>
                        <p>
                            <b> Hosting: </b> AWS EC2 Instance (Deep Learning AMI)
                        </p>

                        <p>
                            <b> Team: </b> 2 Developers/Researchers 
                        </p>

                        <b> Responsibilties </b>
                        <ul>
                            <li> <p> Utilized JavaScript's child spawn library and tfjs library to execute image segmentation code in python on server, pipelining results using callbacks </p></li>
                            <li> <p> Developed Analysis Input, Segmentation, and Graphical Results pages on site, including underlying progression logic and server API calls </p></li>
                            <li> <p> Coded Navigation Bar and highly customized DropBox component on site  </p> </li>
                            <li> <p> Designed website layout and aesthetics using Figma  </p> </li>
                            <li> <p> Deployed on EC2 instance utilizing nginx with contininous integration   </p> </li>
                        </ul>

                        <p> <b> Research </b> <br/><br/>

                            <b> Approach #1: CNNs & Transfer Learning </b> <br/>

                                As the data set compromised of limited, classified images, transfer learning was employed on 
                                various convolutional neural networks, focusing on freezing the more universal bottom layers
                                and then retraining the upper layers to the dataset. This was used in conjunction with 
                                hyperparameter tuning, gradient descent, and k-fold cross validation to optomize accuracy while minimizing 
                                overfitting. 
                                <br/><br/>
                                Best results given by a retrained VGG16 model, outputting a general classification accurracy 
                                of 75%. 

                            <br/><br/>
                            <b> Approach #2: Image Segmentation & Cell Analysis </b> <br/>

                                U-Net architecture in conjunction with python's CV2 library for post-processing was utilized to 
                                conduct image segmentation, extracting individual cell contours from a given image as a 
                                vectorized array. Various attributes of the cellular data were then chosen, notably size, shape,
                                and elongation, quantified, and then analyzed for statistically significant deviance from the comparative
                                classification group. Graphical time series were also plotted to help determine visual cues on 
                                differences among the patients, an attempt to establish a threshold for rejection. 
                                <br/><br/>
                                In general, rejected patients were noticed to show an increasing trend in shape, elongation, and 
                                particularly size; however, a threshold was difficult to determine into a shortened time frame 
                                as the starting points of patients showed enough overlap. Rejected patients also showed much more 
                                turning points and oscillation in their plotted time series than their non-rejected counterparts; however, 
                                a concrete threshold was again difficult to establish as rejected patients tended to have much more 
                                data/data points available. 

                            <br/><br/>
                            <b> Approach #3: Cell Data & Machine Learning </b> <br/>

                                Extracted cellular charachteristics for all datasets from the second approach were now fed into various 
                                machine learning models. This included clustering models like K-Means and DBSCAN, classification models
                                like SVMs and Linear Regression, and ensemble methods like Random Forest Classifer. Hybrid models
                                were also attempted with both the cellular data and CNN predictions. 
                                <br/><br/>
                                However, this approach ultimately led to multiple dead ends. Cellular charachteristics were too limited
                                in scope, and would have been better suited in conjunction to time-series models - not independent 
                                classification models. 
                            </p>
                    </div>
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
                        <p> <b> Non-Profit: </b>  UWEAST </p> 
                        <p> <b> Client Background </b> <br/> 
                        
                        United Women of East Africa (UWEAST) is a non-profit that provides health services and educational 
                        opportunities for the East African community. It had started a local community kitchen 
                        in San Diego featuring various East African foods, and wanted to expand it to a more
                        functional catering and order service. 

                        </p>
                        <p> <b> Project Goals </b> <br/> 
                        
                        Project outcome was to create a food ordering web application that allowed customers to browse the
                        menu, customize their selection, and pay for their order. It should further duel as an internal 
                        management tool for the operators, allowing authorized users to edit the menu and view/manage placed orders.  
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
                            <li> <p> Communicated with client for feature clarifications/adjustments, and periodic progress demos </p></li>
                            <li> <p> Developed all accounts related information, including login and registration, utilizing JSON Web Tokens and integrated PayPal IPN </p></li>
                        </ul>

                        <b> Outcome </b>
                        <ul>
                            <li> <p> Client loved the final product, providing no negative feedback, and submitted a 100% satisfaction survey upon launch  </p></li>
                            <li> <p> Due to miscommunication issues and impending deadlines, project was inherited from another team and redone from scratch at 3x the planned speed </p></li>
                        </ul>
                    </div>
                </ProjEntry>
            
            <ProjEntry
                title="Dynamics Performance Team"
                img={DynamicsImg}
                shortDes="Personalized website for a San Jose based dance studio. Built using ReactJS."
                linksArr={[
                    {url: "https://dynamicsperformanceteam.com/#/", img: EXTERNAL_LINK_ICON, title: EXTERNAL_LINK_TITLE},
                    {url: "https://github.com/TritonSE/DT-Website", img: GITHUB_ICON, title: GITHUB_TITLE}
                ]}
                dates="Jan 2019 - Jun 2019"
                projDetails="Team &bull; Developer"
                >
                       <div>
                        <p> <b> Non-Profit: </b>  Dynamics Performance Team </p> 
                        <p> <b> Client Background </b> <br/> 
                        
                        Dynamics Performance Team is an award-winning dance company that trains and competes 
                        in a wide array of musical genres. Mostly doing marketing and audtion promotions off 
                        of various social media platforms, it lacked a central website that could encompass
                        and convey important information regarding the studio.  

                        </p>
                        <p> <b> Project Goals </b> <br/> 
                        
                        Project outcome was to design and develop a customized website for the studio that would 
                        best reflect it's creative mission, and provide any prospective dancers a chance to explore 
                        and learn about the company. This included galleries and videos of competitions, audition 
                        postings and requirements, information about the studio's history and artistic directors,
                        as well subscriptions to newsletters, social media, and PayPal donations.  
                        </p>
                        <p>
                            <b> Tech Stack: </b> ReactJS 
                        </p>
                        <p>
                            <b> Dependencies: </b> PayPal Smart Buttons, Bootstrap
                        </p>
                        <p>
                            <b> Hosting: </b> Heroku 
                        </p>

                        <p>
                            <b> Team: </b> 1 Project Manager, 5 Developers 
                        </p>

                        <b> Responsibilties </b>
                        <ul>
                            <li> <p> Developed Home, Board of Directors, Gallery, and Support Us pages, including responsiveness for both desktop and mobile layouts   </p></li>
                            <li> <p> Coded site footer, newsletter subscription dialog, in additional to PayPal Smart Button integration </p></li>
                            <li> <p> Assisted and collaborated with developers on their assignments, and most tagged for PR Reviews  </p></li>
                        </ul>

                        <b> Outcome </b>
                        <ul>
                            <li> <p> Client asked for three redesigns on the website during development, but ended up loving the final aesethetics upon launch  </p></li>
                        </ul>
                    </div>
                </ProjEntry>

            {/* <ProjEntry
                title="TSE Internal Recruitment Tool"
                img={TSERecruitmentImg}
                shortDes="Utilized by an UC San Diego engineering org to streamline their heavy recruitment process."
                dates="Feb 2019 - April 2019"
                projDetails="Team &bull; Developer"
                >
                     <div>
                        <p> <b> Tech Stack: </b> Mongoose, MongoDB </p>
                        <p> <b> Hosting: </b> Heroku </p>
                    </div>
                </ProjEntry> */}
            </div>
        </section>
    );
}