import React from "react";

import ScrollBar from "../components/ScrollBar";

export default function SectionLayout({children, bgColor = "white", injectScrollBar = false}) {
    return (
        <div className="row" style={{backgroundColor: bgColor}}>
             <div className="left-column">
             </div>
            <div className="middle-column">
                {children}
            </div >
             <div className="right-column"> </div>

        </div>
    );
}