import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import Spiner from "./Spiner";

const PrivateRoutes = ({ children }) => {

    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return <Spiner></Spiner>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoutes;
