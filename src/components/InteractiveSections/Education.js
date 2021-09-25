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
            leftTitle="UC San Diego"
            dates="Sept 2018 - Present"
            rightTitle="B.S. Computer Science (Expected Dec 2021)"
            location="San Diego, USA"
            >

                Took courses on Data Structures, Object Oriented Programming (Java, C++), Algorithm Design, 
                Computational Statistics, Software Engineering Principles, and Web Development. Elective courses primarily on 
                Machine Learning and Databases (SQL).
                <br/><br/>
                Honors: Provost's Honors, Two Academic Scholarships
                <br/><br/>
                GPA: 3.94/4.0

            </ResEntry>

            <ResEntry
            leftTitle="Irvine Valley College"
            dates="Sept 2014 - May 2018"
            rightTitle="A.A. in Liberal Studies"
            location="Irvine, USA"
            >

                Degree focus on Teacher Education and Social and Behavioral Sciences. Concurrent enrollment
                with high school on college GED requirements.
                <br/><br/>
                Honors: Summa Cum Laude
                <br/><br/>
                GPA: 4.0/4.0

            </ResEntry>
        </section>
    );
}