import React from "react";


import {
    Home,
    Send,
    Users,
    Settings
} from "lucide-react";


import {
    NavLink
} from "react-router-dom";





const MobileNavbar = () => {


    const items = [


        {
            icon: Home,
            name: "Home",
            path: "/"
        },


        {
            icon: Send,
            name: "Campaign",
            path: "/campaigns"
        },


        {
            icon: Users,
            name: "Leads",
            path: "/leads"
        },


        {
            icon: Settings,
            name: "Settings",
            path: "/settings"
        }


    ];






    return (


        <div

            className="

            fixed

            bottom-5

            left-5

            right-5


            lg:hidden


            glass


            rounded-3xl


            p-3


            flex


            justify-around


            z-50


            border

            border-white/10

            backdrop-blur-xl

            "

        >



            {
                items.map((item) => {


                    const Icon =
                        item.icon;



                    return (


                        <NavLink


                            key={
                                item.name
                            }


                            to={
                                item.path
                            }



                            className={
                                ({ isActive }) => `


                                flex

                                flex-col

                                items-center

                                justify-center


                                gap-1


                                text-xs


                                transition-all


                                duration-300



                                ${isActive

                                        ?

                                        "text-white scale-110"

                                        :

                                        "text-zinc-400 hover:text-white"

                                    }


                                `
                            }


                        >



                            {
                                ({ isActive }) => (

                                    <>


                                        <div

                                            className={`

                                            w-10

                                            h-10


                                            rounded-2xl


                                            flex

                                            items-center

                                            justify-center



                                            transition-all


                                            duration-300



                                            ${isActive

                                                    ?

                                                    "bg-white/10 shadow-lg"

                                                    :

                                                    ""

                                                }


                                            `}

                                        >


                                            <Icon size={22} />


                                        </div>





                                        <span>

                                            {item.name}

                                        </span>


                                    </>

                                )
                            }



                        </NavLink>


                    )


                })
            }



        </div>


    );


};



export default MobileNavbar;