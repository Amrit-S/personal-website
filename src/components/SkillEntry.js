import React from "react";

import StarRatings from 'react-star-ratings';

import "../css/SkillEntry.css";

export default function SkillEntry({title, rating}) {
    return (
        <div className="skill-entry">
            <div> {title} </div>
            <StarRatings
            rating={rating}
            starRatedColor="#0e640e"
            starEmptyColor={"#d3d3d3"}
            numberOfStars={5}
            starDimension={'20px'}
            
            />
        </div>
    );
}