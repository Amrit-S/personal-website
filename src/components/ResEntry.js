import React from "react";

import MapMarker from "./MapMarker";

export default function ResEntry({leftTitle, dates, rightTitle, children, location}) {
    return (
        <div className="res-entry">
            <p style={{flex: "1"}}> 
                <b> {leftTitle} </b> 
                <br/><br/>
                {dates}
            </p>
            <p style={{flex: "2"}}>
                <b> {rightTitle} </b>
                <br/><br/>
                {children}
                <br/>
                <p style={{color: "#0e640e"}}> <MapMarker/> {location} </p>
            </p>
        </div>
    );
}