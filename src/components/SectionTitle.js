import React from "react";

import "../css/SectionTitle.css";

export default function SectionTitle({text}) {
    return (
        <div className="section-title">
            <h2> {text} </h2>
        </div>
    );
}