
import React, {useState} from "react";
import { useLocation, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import  { Toaster } from 'react-hot-toast';
import router from "routes/router";
import UserHeader from "components/Headers/UserHeader";
import Topbar from "components/Topbar/Topbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import Utileria from "util/Utileria";

const App = (props) => {
    const mainContent = React.useRef(null);
    const location = useLocation();
    const [sesionIniciada, setSesionIniciada] = useState(false);

    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainContent.current.scrollTop = 0;
        setSesionIniciada(Utileria.conToken());
    }, [location]);

    return (
        <>
          
            { sesionIniciada && (  <Sidebar />)}

            <div className="main-content" ref={mainContent} key="main">
                { sesionIniciada && (<div><UserHeader/> <Topbar /> </div>)}
                <Switch >
                    { router }
                </Switch>
                <Container fluid>
                </Container>
                <Toaster position="top-right"/>

            </div>
        </>
    );
};

export default App;
