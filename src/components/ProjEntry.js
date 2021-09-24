import React, { useState } from "react";

import "../css/ProjEntry.css";

export default function ProjEntry({img, title, shortDes, dates, projDetails, children, webLink = null, githubLink = null}) {

    const [isCardExpanded, setIsCardExpanded] = useState(false);

    const handleCardToggle = () =>{
        setIsCardExpanded(isCardExpanded => !isCardExpanded);
    }

    return (

        <div className={`proj-entry ${isCardExpanded ? 'expanded':''}`}>
            
            {/* Project Image  */}
            <div className="proj-entry-bg" style={{backgroundImage: `url("${img}")`,}}>

                {/* External Link */}
                 <a className={`webLink ${webLink ? '':'hide'}`} style={{borderTopRightRadius: "20px"}} title="Project Link" href={webLink} target="_blank" rel="noopener noreferrer"> 
                        <img src="https://img.icons8.com/ios-glyphs/128/000000/external-link.png" alt="External Link" width="25" height="25"/>
                </a>

                {/* GitHub Link */}
                <a className={`webLink ${githubLink ? '':'hide'}`} title="GitHub Source Code" href={githubLink} target="_blank" rel="noopener noreferrer"> 
                        <img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt="GitHub Link" width="25" height="25"/>
                </a>
            </div>

            {/* Project Information */}
            <section className="proj-content">
                <div className="quick-details">
                    <p> <i> {dates} </i>  </p>
                    <p> <i> {projDetails} </i> </p>
                </div>
                <h2> {title} </h2>
                <hr/>
               
                <p> {shortDes} </p>

                {/* Custom Content */}
                {
                    isCardExpanded && children
                }  
            </section>

            {/* Expand/Collapse  */}
            <a onClick={handleCardToggle} className="card-toggle-text"> <p> {isCardExpanded ? "Show Less": "Read More"} </p> </a>    
        </div>
    );
}