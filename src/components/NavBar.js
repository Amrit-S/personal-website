import React from "react";

import "../css/NavBar.css";
import { SITE_PAGES } from "../constants/links";

export default function NavBar() {

     // Adds the active class to the current page (determined by url), if the user is on that page
     function isPageActive(pageToCheck) {
        return pageToCheck === window.location.pathname ? "navbar-entry-active" : "";
    }


    return (
        <div id="navbar">
            <a className={`navbar-entry ${isPageActive(SITE_PAGES.INTERACTIVE_RESUME)}`} href={SITE_PAGES.INTERACTIVE_RESUME}> Interactive </a>
            <a className={`navbar-entry ${isPageActive(SITE_PAGES.PRINTABLE_RESUME)}`} href={SITE_PAGES.PRINTABLE_RESUME}> Printable </a>
        </div>
    );
}