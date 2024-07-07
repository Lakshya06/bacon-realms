import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes(){
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");

    if(username && token)
        return <Outlet />
    return <Navigate to="/login" />
}

export default ProtectedRoutes;