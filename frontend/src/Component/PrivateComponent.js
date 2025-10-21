import { Outlet, Navigate } from "react-router-dom";

const PrivateComponent = ()=>{
    const isLoggedIn = localStorage.getItem("User");
    return isLoggedIn ? <Outlet /> : <Navigate to="/signup" />
}

export default PrivateComponent;