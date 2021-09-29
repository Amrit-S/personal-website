import React from "react";

export default function SectionLayout({children, bgColor = "white", leftColClass = ''}) {
    return (
        <div className="row" style={{backgroundColor: bgColor}}>
             <div className={`left-column ${leftColClass}`}>
             </div>
            <div className="middle-column">
                {children}
            </div >
             <div className="right-column"> </div>

        </div>
    );
}