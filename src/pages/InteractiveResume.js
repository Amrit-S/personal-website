 import React from "react";
 import "../css/InteractiveResume.css";

 import DoubleArrow from "../media/double-arrow.svg";

 import NavBar from "../components/NavBar";
 import ScrollBar from "../components/ScrollBar";
 import SectionLayout from "../components/SectionLayout";
 import About from "../components/InteractiveSections/About";
 import Education from "../components/InteractiveSections/Education";
 import Work from "../components/InteractiveSections/Work";
 import Projects from "../components/InteractiveSections/Projects";
 import Contact from "../components/InteractiveSections/Contact";
 
 export default function InteractiveResume() {

    const navBarRef = React.useRef();

    const scrollBarCallback = (isInScope) =>{
        let scrollBarNode = document.getElementById('scroll-bar');

        if(isInScope) scrollBarNode.classList.add('visible')
        else scrollBarNode.classList.remove('visible');
    } 

    const checkNavBarRefOffset = () => {
        const { offsetTop } = navBarRef.current;

        if(offsetTop >= window.scrollY) scrollBarCallback(false);
        else scrollBarCallback(true);
    }

    const handleArrowClick = () =>{
        const { offsetTop } = navBarRef.current;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
    }

    React.useEffect(() => {
        window.addEventListener("scroll", checkNavBarRefOffset);
      }, []);


     return (
         <div>
             <NavBar/>
             {/* Section #1 - Intro/Title */}
             <section id="title-section">
                 <section id="title-text">
                    <h1 style={{fontSize: "60px", margin: "0"}}> Amrit Kaur Singh </h1>
                    <hr/>
                    <h2 style={{fontSize: "30px"}}> Interactive Resume </h2>
                 </section>

                 <section id="title-arrow" ref={navBarRef} onClick={handleArrowClick}>
                     <img src={DoubleArrow} width="28" height="28"/>
                 </section>
             </section>

             <ScrollBar/>

             <div id="content-body">
                 <SectionLayout injectScrollBar={true}>
                     <About scrollBarCallback={scrollBarCallback}/>
                 </SectionLayout>
                 <SectionLayout bgColor="#d3d3d3">
                     <Education/>
                 </SectionLayout>
                 <SectionLayout>
                     <Work/>
                 </SectionLayout>
                 <SectionLayout bgColor="#d3d3d3">
                     <Projects/>
                 </SectionLayout>
                 <SectionLayout bgColor="#373737">
                     <Contact/>
                 </SectionLayout>
             </div>
         </div>
     );
 }
 