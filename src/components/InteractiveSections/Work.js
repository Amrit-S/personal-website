import React from "react";

import ResEntry from "../ResEntry";
import SectionTitle from "../SectionTitle";

export default function Work() {

    return (
        <section id="work-section">
            <SectionTitle text="Work Experience" />
            <h3 style={{textAlign: "center"}}>
                        <span style={{fontSize: "24px", fontWeight: "bold"}}> &#10077;</span>
                        Nothing ever becomes real till it is experienced. 
                        <span style={{fontSize: "24px", fontWeight: "bold"}}>&#10078;</span>
                        <br/><br/>
                        <i> —John Keats </i>
            </h3>
            <hr/>

            <ResEntry
            leftTitle="University of California, San Diego | Jacob's School of Engineering"
            dates="Sept 2019 - Present"
            rightTitle="Computer Science Course Tutor"
            location="San Diego, USA"
            >

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                In tellus integer feugiat scelerisque varius morbi enim. Nunc mi ipsum faucibus vitae aliquet nec. Ut morbi tincidunt augue interdum 
                velit euismod in. Pharetra convallis posuere morbi leo urna molestie. Sapien faucibus et molestie ac feugiat sed lectus vestibulum 
                mattis. Fermentum et sollicitudin ac orci phasellus. Donec ac odio tempor orci. Scelerisque eu ultrices vitae auctor eu augue. 
                Enim ut sem viverra aliquet eget. At quis risus sed vulputate odio ut enim blandit.

            </ResEntry>

            <ResEntry
            leftTitle="Caterpillar | Solar Turbines"
            dates="June - Sept 2021"
            rightTitle="Software Engineering Intern"
            location="Remote"
            >

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                In tellus integer feugiat scelerisque varius morbi enim. Nunc mi ipsum faucibus vitae aliquet nec. Ut morbi tincidunt augue interdum 
                velit euismod in. Pharetra convallis posuere morbi leo urna molestie. Sapien faucibus et molestie ac feugiat sed lectus vestibulum 
                mattis. Fermentum et sollicitudin ac orci phasellus. Donec ac odio tempor orci. Scelerisque eu ultrices vitae auctor eu augue. 
                Enim ut sem viverra aliquet eget. At quis risus sed vulputate odio ut enim blandit.

            </ResEntry>

            <ResEntry
            leftTitle="Center of Memory & Recording Research"
            dates="Jan 2019 - June 2021"
            rightTitle="ML Researcher &bull; Software Developer &bull; Team Lead"
            location="San Diego, USA"
            >

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                In tellus integer feugiat scelerisque varius morbi enim. Nunc mi ipsum faucibus vitae aliquet nec. Ut morbi tincidunt augue interdum 
                velit euismod in. Pharetra convallis posuere morbi leo urna molestie. Sapien faucibus et molestie ac feugiat sed lectus vestibulum 
                mattis. Fermentum et sollicitudin ac orci phasellus. Donec ac odio tempor orci. Scelerisque eu ultrices vitae auctor eu augue. 
                Enim ut sem viverra aliquet eget. At quis risus sed vulputate odio ut enim blandit.

            </ResEntry>

            <ResEntry
            leftTitle="University of California, San Diego | Jacob's School of Engineering"
            dates="July - Sept 2019"
            rightTitle="SPIS Mentor (Specialization: Machine Learning)"
            location="San Diego, USA"
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