import React from "react";

import SectionTitle from "../SectionTitle";
import { SITE_PAGES } from "../../constants/links";

export default function Contact() {

    return (
        <section id="contact-section">
            <SectionTitle text="Contact Me" style={{color: "white"}} />
            <h3 style={{textAlign: "center"}}>
                        <span style={{fontSize: "24px", fontWeight: "bold"}}> &#10077;</span>
                        The most important thing in communication is to hear what isn't being said.
                        <span style={{fontSize: "24px", fontWeight: "bold"}}>&#10078;</span>
                        <br/><br/>
                        <i> —Peter Drucker </i>
            </h3>
            <hr/>
            <div className="contract-entry-wrapper">
                <a className="contact-entry" href="mailto: aksingh@ucsd.edu"> 

                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="30" height="30"
                        viewBox="0 0 172 172"
                        ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M149.49588,27.78203h-126.98068c-9.27228,0.01055 -16.78632,7.52459 -16.79687,16.79687v82.84219c0.01055,9.27228 7.52459,16.78632 16.79688,16.79688h126.98034c9.27228,-0.01055 16.78632,-7.52459 16.79688,-16.79688v-82.84219c-0.01018,-9.27231 -7.52423,-16.78651 -16.79654,-16.79687zM119.63104,85.97716l39.94297,-31.34902v70.12292zM22.5152,34.50078h126.98034c5.56339,0.00629 10.07183,4.51474 10.07813,10.07812v1.50836l-64.63773,50.73261c-4.86287,3.79636 -11.68688,3.79082 -16.54358,-0.01344l-65.95528,-50.73194v-1.49559c0.00629,-5.56339 4.51474,-10.07183 10.07813,-10.07812zM53.56859,86.18813l-41.13152,38.69832v-70.33557zM149.49588,137.49922h-126.98068c-3.49841,-0.00204 -6.74562,-1.81777 -8.57917,-4.79719l45.02705,-42.36172l15.3127,11.77797c7.28683,5.69184 17.51366,5.68921 24.79756,-0.00638l15.22435,-11.94627l43.79449,42.50953c-1.83039,2.99472 -5.08651,4.82198 -8.5963,4.82406z"></path></g></g></svg>
                    &nbsp;
                    aksingh@ucsd.edu (Preferred)
                </a>
                <a className="contact-entry" href="https://www.linkedin.com/in/amrit-kaur-singh" target="_blank" rel="noopener noreferrer"> 
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="32" height="32"
                    viewBox="0 0 172 172"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M40.3125,26.875c-7.34863,0 -13.4375,6.08887 -13.4375,13.4375v91.375c0,7.34864 6.08887,13.4375 13.4375,13.4375h91.375c7.34864,0 13.4375,-6.08886 13.4375,-13.4375v-91.375c0,-7.34863 -6.08886,-13.4375 -13.4375,-13.4375zM40.3125,37.625h91.375c1.53271,0 2.6875,1.15479 2.6875,2.6875v91.375c0,1.53271 -1.15479,2.6875 -2.6875,2.6875h-91.375c-1.53271,0 -2.6875,-1.15479 -2.6875,-2.6875v-91.375c0,-1.53271 1.15479,-2.6875 2.6875,-2.6875zM56.10156,46.86328c-5.10205,0 -9.23828,4.13623 -9.23828,9.23828c0,5.10205 4.13623,9.23828 9.23828,9.23828c5.10205,0 9.23828,-4.13623 9.23828,-9.23828c0,-5.10205 -4.13623,-9.23828 -9.23828,-9.23828zM104.64453,71.38672c-7.70557,0 -12.82861,4.22021 -14.94922,8.23047h-0.33594v-7.05469h-15.11719v51.0625h15.78906v-25.19531c0,-6.65576 1.32276,-13.10156 9.57422,-13.10156c8.12549,0 8.23047,7.5166 8.23047,13.4375v24.85938h15.78906v-28.05078c0,-13.73144 -2.91846,-24.1875 -18.98047,-24.1875zM48.375,72.5625v51.0625h15.95703v-51.0625z"></path></g></g></svg>
                    &nbsp;
                    amrit-kaur-singh 
                </a>
            </div>
            <br/><br/>
            <p className="contact-additional-info"> Looking for a printable version of my resume? <a href={SITE_PAGES.PRINTABLE_RESUME}> Click here. </a> </p>
        </section>
    );
}