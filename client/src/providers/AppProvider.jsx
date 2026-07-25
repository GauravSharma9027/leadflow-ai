import React from "react";


import QueryProvider from "./QueryProvider";



const AppProvider = ({
    children
}) => {


    return (

        <QueryProvider>

            {children}

        </QueryProvider>

    );


};


export default AppProvider;