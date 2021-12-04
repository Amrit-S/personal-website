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
 import Skillset from "../components/InteractiveSections/Skillset";
 import Contact from "../components/InteractiveSections/Contact";

 const MAX_MOBILE_WIDTH = 800;

 export default function InteractiveResume() {

    const [isMobile, setIsMobile] = React.useState(false);
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

    const handleResize = () => {
          if(window.innerWidth < MAX_MOBILE_WIDTH) setIsMobile(true);
          else setIsMobile(false);
    }

    React.useEffect(() => {
        window.addEventListener("scroll", checkNavBarRefOffset);
        window.addEventListener("resize", handleResize);
        handleResize();
      }, []);


     return (
         <div id="interactive-resume-page">
             <NavBar/>
             {/* Section #1 - Intro/Title */}
             <section id="title-section">

                 <section id="title-text">
                    <h1 style={{margin: "0"}}> Amrit Kaur Singh </h1>
                    <hr/>
                    <h2> Interactive Resume </h2>
                 </section>

                 <section id="title-arrow" ref={navBarRef} onClick={handleArrowClick}>
                     <img id="title-arrow-icon" src={DoubleArrow} alt="Arrow Icon" width="28" height="28"/>
                 </section>

                 {
                        !isMobile &&  <div class="butterfly">
                        <div class="body">
                            <img alt="body" src="http://fjordstudio.dk/assets/img/butterfly-parts/butterfly3-body.png"/>
                        </div>
                        <div class="leftwing">
                            <img alt="leftwing" src="http://fjordstudio.dk/assets/img/butterfly-parts/butterfly3-leftwing.png"/>
                        </div>
                        <div class="rightwing">
                            <img alt="rightwing" src="http://fjordstudio.dk/assets/img/butterfly-parts/butterfly3-rightwing.png"/>
                        </div>
                    </div>
                 }


                 <div id="container">
                    
                    <div className="futterbly">
                        <div class="left wing"></div>
                        <div class="right wing"></div>
                    </div>
                    {
                        !isMobile &&   <div className="futterbly" style={{marginTop: "-35em"}}>
                        <div class="left wing wing-delay"></div>
                        <div class="right wing wing-delay"></div>
                    </div>
                    }
                  
                
            </div>
             </section>

             <ScrollBar/>

             <div id="content-body">
                 <SectionLayout leftColClass="book-bg" isMobile={isMobile}>
                     <About isMobile={isMobile}/>
                 </SectionLayout>
                 <SectionLayout bgColor="#d3d3d3" isMobile={isMobile}>
                     <Education/>
                 </SectionLayout>
                 <SectionLayout leftColClass="book-bg" isMobile={isMobile}>
                     <Work/>
                 </SectionLayout>
                 <SectionLayout bgColor="#d3d3d3" isMobile={isMobile}>
                     <Projects/>
                 </SectionLayout>
                 <SectionLayout leftColClass="book-bg" isMobile={isMobile}>
                     <Skillset/>
                 </SectionLayout>
                 <SectionLayout bgColor="#373737" isMobile={isMobile}>
                     <Contact isMobile={isMobile}/>
                 </SectionLayout>
             </div>
         </div>
     );
 }
 