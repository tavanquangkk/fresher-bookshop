import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import NotPermitted from "./NotPermitted";
import { useLocation } from "react-router-dom";

const RoleBaseRoute = (props) => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith("/admin");

    const user = useSelector((state) => state.account.user);
    console.log(">>>CHECK user", user.user);
    const userRole = user?.user.role;
    if (!user) {
        return null;
    }
    if (isAdminRoute && userRole === "ADMIN") {
        return <>{props.children}</>;
    } else {
        console.log(">>>CHECK ROLE", userRole);
        return <NotPermitted />;
    }
};

const ProtectedRoute = (props) => {
    const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
    return (
        <>
            {isAuthenticated === true ? (
                <RoleBaseRoute>{props.children}</RoleBaseRoute>
            ) : (
                <Navigate to={"/login"} />
            )}
        </>
    );
};

export default ProtectedRoute;
