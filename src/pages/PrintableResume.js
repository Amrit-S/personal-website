import React from "react";

import "../css/PrintableResume.css";
import NavBar from "../components/NavBar";


export default function PrintableResume() {
    return (
        <div id="printable-resume">
            <div id="navbar-bg-resume">
                <NavBar/>
            </div>
            
            <div id="resume-container">
                <iframe title="PDF Resume" src="https://drive.google.com/file/d/1FCISrDND99-eHc9GDebLyr0HPTnDTxei/preview?widget=true&amp;headers=false" height="100%" width="100%"></iframe>
            </div>
        </div>
    );
}
