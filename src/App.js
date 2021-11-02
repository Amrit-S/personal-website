import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { SITE_PAGES } from "./constants/links";

import InteractiveResume from "./pages/InteractiveResume";
import Custom404 from "./pages/Custom404";
// import PrintableResume from "./pages/PrintableResume";

function App() {
    return (
        <Router>
            {/* Switch gurantees that a URL can match to only one route*/}
            <Switch>
                <Route exact path={SITE_PAGES.INTERACTIVE_RESUME}>
                    <InteractiveResume/>
                </Route>
                <Route path={'/'}>
                    <Custom404/>
                </Route>
                
                {/* <Route exact path={SITE_PAGES.PRINTABLE_RESUME} >
                    <PrintableResume/>
                </Route> */}
               {/* <Route exact path={SITE_PAGES.PRINTABLE_RESUME} component={() => { 
                    window.location.href = 'https://drive.google.com/file/d/1PKh16FU1GVygacp9I_CisckfJ3G3We-Z/view?usp=sharing'; 
                    // window.open('https://drive.google.com/drive/folders/1ebG8CXekYf3bPuSfKzE2U2qlSQ_EEf8A', "_blank")
                    return null;
                }}/> */}
            </Switch>
        </Router>
    );
}

export default App;
