import { useContext } from "react";
import { AuthContext } from "../provider/Authprobider";
import { Navigate, useLocation } from "react-router-dom";


const Private = ({ children }) => {
    const { user, loding } = useContext(AuthContext);
    const location=useLocation()
    // console.log(user,loding)

    if (loding) {
        return <progress className="progress w-56"></progress>
    }

    if (user?.email) {
        return children
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default Private;