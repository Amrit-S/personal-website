import React from "react";

export default function ProjEntry({img, title, shortDes, role = null, projType}) {

    return (

        <div className="proj-entry">
            
            <div className="proj-entry-bg" style={{backgroundImage: `url("${img}")`,}}> 
                <a className="webLink" style={{borderTopRightRadius: "20px"}} href="https:google.com"> 
                    <img src="https://img.icons8.com/ios-glyphs/128/000000/external-link.png" width="25" height="25"/>
                </a>
                <div className="webLink"> 
                    <img src="https://img.icons8.com/material-outlined/24/000000/github.png" width="25" height="25"/>
                </div>
            </div>
            <section className="proj-content">
                <h2> {title} </h2>
                <hr/>
                <p> {shortDes} </p>
                <a> <p> Read More </p> </a>
            </section>
           
        </div>
    );
}