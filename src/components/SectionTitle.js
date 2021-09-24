import React from "react";

import "../css/SectionTitle.css";

export default function SectionTitle({text, style}) {
    return (
        <div className="section-title" style={style}>
            <h2 className="paint-bg"> {text} </h2>
        </div>
    );
}