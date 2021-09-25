import React from "react";

import MapMarker from "./MapMarker";

import "../css/ResEntry.css";

export default function ResEntry({leftTitle, dates, rightTitle, children, location, urlLink = null}) {

    const [width, setWidth] = React.useState();

    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    React.useEffect(() => {
        window.addEventListener("resize", handleResize);
      }, []);

    return (
        <div className="res-entry">
            <p style={{flex: "1"}}> 
                <b className="left-title"> {leftTitle} </b> 
                <br/><br/>
                {dates}
            </p>
            <p style={{flex: "2"}}>
                <b> {rightTitle} </b>
                <br/><br/>
                {children}
                <br/>
                <p style={{color: "#0e640e"}}> <MapMarker/> {location} { urlLink && <> {width < 900 ? <br/>: "|"} <img width = "20px" height = "20px" alt="Link Icon" src="https://img.icons8.com/ios-glyphs/30/000000/link--v1.png"/> <a href={urlLink} target="_blank" rel="noopener noreferrer">  {urlLink}</a></>}</p>
            </p>
        </div>
    );
}