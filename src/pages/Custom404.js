import React from "react";

import "../css/Custom404.css";
import NavBar from "../components/NavBar";


export default function PrintableResume() {

    return (
        <div id="custom-404-page">
            <NavBar/>
            <section id="title-section">
                 <section id="title-text">
                    <h1 style={{fontSize: "60px", margin: "0"}}> 404 </h1>
                    <hr/>
                    <h2 style={{fontSize: "30px"}}> Page Not Found </h2>
                 </section>
                 <p> Photo by <a href="https://unsplash.com/photos/P8PlK2nGwqA" target="_blank" rel="noreferrer"> Juan Davilla via Unsplash </a> </p>
             </section>
        </div>
    );
}
