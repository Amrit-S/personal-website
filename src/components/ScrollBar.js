import React from "react";
import { Link } from 'react-scroll';
import LeftArrow from "../media/left-arrow.svg";
import Cross from "../media/cross.svg";

import "../css/ScrollBar.css";

export default function ScrollBar({isMobile}) {

    const handleShowMenu = (show) => {
        let menu = document.getElementById('scroll-menu');

        if(!menu) return;
        
        if(show) menu.classList.add('visible')
        else menu.classList.remove('visible');
    }

    const elapsedHandleShowMenu = (show) => {
        setTimeout(() => {
            handleShowMenu(show);
          }, 500);
        
    }

    if(isMobile){
        return (
            <div id="scroll-bar-mobile">
                <img id="scroll-bar-mobile-icon" alt="menu-expand-icon" onClick={() => handleShowMenu(true)} src={LeftArrow} width="20px" height="20px"/>

                <div id="scroll-menu">
                    <img alt="menu-collapse-icon" onClick={() => handleShowMenu(false)} id="scroll-menu-x" src={Cross} width="20px" height="20px"/>
                    
                    <Link onClick={() => elapsedHandleShowMenu(false)} activeClass="active-section-mobile" className="scroll-entry-mobile" to="about-section" spy={true} smooth={true} duration={500} >Profile</Link>
                    <Link onClick={() => elapsedHandleShowMenu(false)} activeClass="active-section-mobile" className="scroll-entry-mobile" to="education-section" spy={true} smooth={true} duration={500} >Education </Link>
                    <Link onClick={() => elapsedHandleShowMenu(false)} activeClass="active-section-mobile" className="scroll-entry-mobile" to="work-section" spy={true} smooth={true} duration={500} >Work Experience</Link>
                    <Link onClick={() => elapsedHandleShowMenu(false)} activeClass="active-section-mobile" className="scroll-entry-mobile" to="projects-section" spy={true} smooth={true} duration={500} >Projects</Link>
                    <Link onClick={() => elapsedHandleShowMenu(false)} activeClass="active-section-mobile" className="scroll-entry-mobile" to="skillset-section" spy={true} smooth={true} duration={500} >Skillset</Link>
                    <Link onClick={() => elapsedHandleShowMenu(false)} activeClass="active-section-mobile" className="scroll-entry-mobile" to="contact-section" spy={true} smooth={true} duration={500} >Contact</Link>
                   
                </div>
            </div>
        )
    }

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