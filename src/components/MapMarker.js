import React from "react";

import MapIcon from "../media/map-icon.svg";

export default function MapMarker({width = "20px", height = "20px"}) {
    return (
        <img src={MapIcon} alt="Map Marker" width={width} height={height}/>
    );
}