import React from "react";

import {
    Navigate
} from "react-router-dom";


const ProtectedRoute = ({
    children
}) => {


    /**
     * Temporary
     * Later connect with Zustand auth store
     */


    const isAuthenticated = true;



    if (!isAuthenticated) {

        return (

            <Navigate
                to="/login"
                replace
            />

        );

    }



    return children;


};


export default ProtectedRoute;