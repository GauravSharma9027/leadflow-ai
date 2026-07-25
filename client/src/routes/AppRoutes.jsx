import React from "react";


import {
    Routes,
    Route
} from "react-router-dom";


import DashboardLayout from "../layouts/DashboardLayout";


import ProtectedRoute from "./ProtectedRoute";


import {
    privateRoutes,
    publicRoutes
} from "./route.config";





const AppRoutes = () => {


    return (


        <Routes>


            {/* Private Routes */}


            {
                privateRoutes.map(
                    (route) => {


                        const Page =
                            route.element;



                        return (

                            <Route


                                key={
                                    route.path
                                }


                                path={
                                    route.path
                                }



                                element={


                                    <ProtectedRoute>


                                        <DashboardLayout>


                                            <Page />


                                        </DashboardLayout>


                                    </ProtectedRoute>


                                }


                            />


                        );


                    }

                )
            }







            {/* Public Routes */}


            {
                publicRoutes.map(
                    (route) => {


                        const Page =
                            route.element;



                        return (

                            <Route


                                key={
                                    route.path
                                }


                                path={
                                    route.path
                                }


                                element={

                                    <Page />

                                }


                            />


                        );


                    }
                )
            }



        </Routes>


    );


};





export default AppRoutes;