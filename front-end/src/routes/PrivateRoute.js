import { Route, Redirect } from "react-router-dom";
import utileria from "util/Utileria";

const PrivateRoute = ({component:Component, ...rest}) => {
    let sinToken = utileria.sinToken();
    return (<Route {...rest}>  { sinToken ? <Redirect to="/login"/> : <Component/>   } </Route> )
};

export default PrivateRoute;