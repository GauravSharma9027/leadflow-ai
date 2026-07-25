import React from "react";


import Sidebar from "../components/dashboard/Sidebar";

import Header from "../components/dashboard/Header";

import MobileNavbar from "../components/dashboard/MobileNavbar";

import GradientOrb from "../components/ui/GradientOrb";



const DashboardLayout = ({ children }) => {


    return (

        <div

            className="
min-h-screen

relative

overflow-hidden

"

        >


            {/* Background Orbs */}

            <GradientOrb

                className="
w-96
h-96
top-0
left-0
"

            />


            <GradientOrb

                className="
w-96
h-96
right-0
bottom-0
"

            />





            <Sidebar />

            <Header />




            <main

                className="

lg:ml-80

p-5

relative

z-10

pb-28

"

            >

                {children}


            </main>



            <MobileNavbar />


        </div>

    )

}


export default DashboardLayout;