import React from "react";

import ResEntry from "../ResEntry";
import SectionTitle from "../SectionTitle";

import { Link } from 'react-scroll';

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
            leftTitle="Caterpillar | Solar Turbines"
            dates="June - Sept 2021"
            rightTitle="Software Engineering Intern"
            location="Remote"
            urlLink="https://www.solarturbines.com"
            >

                Collaborated with the Visualizations and Composite Management team to redesign a web based error report for an internal HMI tool, 
                receiving extremely positive feedback on final product from in-house engineers. Developed a highly customizable and dynamically generated single page web 
                application using .NET, jQuery, and Bootstrap under Agile Scrum. Abstracted testing suite and refactored 300+ HMI tests in C# for 
                improved clarity and context, providing extensive SWE documentation detailing codebase changes. 

            </ResEntry>

            <ResEntry
            leftTitle="Center of Memory & Recording Research | Talke Lab"
            dates="Jan 2019 - June 2021"
            rightTitle="ML Researcher &bull; Software Developer &bull; Team Lead"
            location="San Diego, USA"
            urlLink="https://www.talkelab.ucsd.edu"
            >

                Joined as a front-end developer on an android application targeted to supplement testing analysis using a lab-made 
                Glaucoma biomedical device. Later worked as a lead researcher on a machine learning project focused on early detection
                of DMEK corneal graft rejections, utilzing image segmentation, time series analysis, and transfer learning on the
                VGG16 Convolutional Neural Network. Designed and developed a <Link className="section-link" to="DMEK-Project" spy={true} smooth={true} duration={500} > web application </Link> 
               that packages the aforementioned research
                into a usable tool for DMEK physicians to aid in graft rejection diagnosis. 


            </ResEntry>

            <ResEntry
            leftTitle="UC San Diego"
            dates="Sept 2019 - Present"
            rightTitle="Computer Science Course Tutor"
            location="San Diego, USA"
            >

                Guide students into gaining familiarity with debugging tools and industry interfaces, such as VSCode, GDB, and Valgrind, 
                and assist with debugging course programming assignments. Beta test all programming assignments prior to student release, attend weekly staff meetings 
                and monitor/grade course examinations as needed.
                <br/><br/>
                Courses: C++/Advanced Data Structures (6 quarters), Intro to Java/Object-Oriented Programming (2 quarters)

            </ResEntry>

            <ResEntry
            leftTitle="UC San Diego"
            dates="July - Sept 2019"
            rightTitle="SPIS Mentor (Specialization: Machine Learning)"
            location="San Diego, USA"
            urlLink="http://spis.ucsd.edu"
            >

                Explained programming fundamentals and assisted with logic building and coding intuition to inexperienced engineering admits.
                Assisted 15 students with their machine learning based capstone projects.

            </ResEntry>
        </section>
    );
}