import React from "react";

export default function SectionLayout({children, bgColor = "white"}) {
    return (
        <div className="row" style={{backgroundColor: bgColor}}>
             <div className="left-column"></div>
            <div className="middle-column">
                {children}
            </div >
             <div className="right-column"> </div>

        </div>
    );
}