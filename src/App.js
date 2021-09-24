import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { SITE_PAGES } from "./constants/links";

import InteractiveResume from "./pages/InteractiveResume";
import PrintableResume from "./pages/PrintableResume";

function App() {
    return (
        <Router>
            {/* Switch gurantees that a URL can match to only one route*/}
            <Switch>
                <Route exact path={SITE_PAGES.INTERACTIVE_RESUME}>
                    <InteractiveResume/>
                </Route>
                <Route exact path={SITE_PAGES.PRINTABLE_RESUME}>
                    <PrintableResume/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
