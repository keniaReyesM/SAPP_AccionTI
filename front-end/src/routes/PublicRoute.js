import { Route, Redirect } from "react-router-dom";
import utileria from "util/Utileria";

const PublicRoute = ({component:Component, ...rest}) => {
    let conToken = utileria.conToken();
    return (<Route {...rest}>  { conToken ? <Redirect to="/"/> : <Component/>   } </Route> )
};

export default PublicRoute;