import React, { useState } from "react";

import "../css/ProjEntry.css";

export default function ProjEntry({id=null, img, title, shortDes, dates, projDetails, children, linksArr = []}) {

    const [isCardExpanded, setIsCardExpanded] = useState(false);

    const handleCardToggle = () =>{
        setIsCardExpanded(isCardExpanded => !isCardExpanded);
    }

    return (

        <div className={`proj-entry ${isCardExpanded ? 'expanded':''}`} id={id}>
            
            {/* Project Image  */}
            <div className="proj-entry-bg" style={{backgroundImage: `url("${img}")`,}}>
                
                {linksArr.map((linkInfo, i) => (
                     <a className="webLink" style={{borderTopRightRadius: i === 0 ? "20px": "0px"}} title={linkInfo['title']} href={linkInfo['url']} target="_blank" rel="noopener noreferrer"> 
                        <img src={linkInfo['img']} alt={linkInfo['title']} width="25" height="25"/>
                     </a>
                ))}
                
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
            {
                children && <a onClick={handleCardToggle} className="card-toggle-text"> <p> {isCardExpanded ? "Show Less": "Read More"} </p> </a>    
            }
            
        </div>
    );
}