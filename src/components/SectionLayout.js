import React from "react";

export default function SectionLayout({children, bgColor = "white", leftColClass = '', isMobile}) {

    if(isMobile){
        return (
            <div className="mobile-solo-column" style={{backgroundColor: bgColor}}>
                    {children}
            </div>
        );
    }
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