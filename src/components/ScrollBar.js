import React from "react";
import { Link } from 'react-scroll';

import "../css/ScrollBar.css";

export default function ScrollBar() {

    return (
        <div id="scroll-bar">
            <Link activeClass="active-section" className="scroll-entry" to="about-section" spy={true} smooth={true} duration={500} >Profile</Link>
            <Link activeClass="active-section" className="scroll-entry" to="education-section" spy={true} smooth={true} duration={500} >Education </Link>
            <Link activeClass="active-section" className="scroll-entry" to="work-section" spy={true} smooth={true} duration={500} >Work Experience</Link>
            <Link activeClass="active-section" className="scroll-entry" to="projects-section" spy={true} smooth={true} duration={500} >Projects</Link>
            <Link activeClass="active-section" className="scroll-entry" to="skillset-section" spy={true} smooth={true} duration={500} >Skillset</Link>
            <Link activeClass="active-section" className="scroll-entry" to="contact-section" spy={true} smooth={true} duration={500} >Contact</Link>
        </div>
    );
}