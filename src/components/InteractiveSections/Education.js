import React from "react";

import ResEntry from "../ResEntry";
import SectionTitle from "../SectionTitle";

export default function Education() {

    return (
        <section id="education-section">
            <SectionTitle text="Education" />
            <h3 style={{textAlign: "center"}}>
                        <span style={{fontSize: "24px", fontWeight: "bold"}}> &#10077;</span>
                        An investment in knowledge pays the best interest.
                        <span style={{fontSize: "24px", fontWeight: "bold"}}>&#10078;</span>
                        <br/><br/>
                        <i> —Albert Einstein </i>
            </h3>
            <hr/>
            <ResEntry
            leftTitle="University of California, San Diego"
            dates="Sept 2018 - Present"
            rightTitle="B.S. Computer Science"
            location="San Diego, USA"
            >

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                In tellus integer feugiat scelerisque varius morbi enim. Nunc mi ipsum faucibus vitae aliquet nec. Ut morbi tincidunt augue interdum 
                velit euismod in. Pharetra convallis posuere morbi leo urna molestie. Sapien faucibus et molestie ac feugiat sed lectus vestibulum 
                mattis. Fermentum et sollicitudin ac orci phasellus. Donec ac odio tempor orci. Scelerisque eu ultrices vitae auctor eu augue. 
                Enim ut sem viverra aliquet eget. At quis risus sed vulputate odio ut enim blandit.

            </ResEntry>

            <ResEntry
            leftTitle="Irvine Valley College"
            dates="Sept 2014 - May 2018"
            rightTitle="B.S. Computer Science"
            location="Irvine, USA"
            >

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                In tellus integer feugiat scelerisque varius morbi enim. Nunc mi ipsum faucibus vitae aliquet nec. Ut morbi tincidunt augue interdum 
                velit euismod in. Pharetra convallis posuere morbi leo urna molestie. Sapien faucibus et molestie ac feugiat sed lectus vestibulum 
                mattis. Fermentum et sollicitudin ac orci phasellus. Donec ac odio tempor orci. Scelerisque eu ultrices vitae auctor eu augue. 
                Enim ut sem viverra aliquet eget. At quis risus sed vulputate odio ut enim blandit.

            </ResEntry>
        </section>
    );
}