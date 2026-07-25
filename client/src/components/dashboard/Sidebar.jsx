import React from "react";


import {
    LayoutDashboard,
    Send,
    Users,
    BarChart3,
    FileText,
    Settings,
    LogOut
} from "lucide-react";


import {
    NavLink
} from "react-router-dom";





const menuItems = [


    {
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/"
    },


    {
        name: "Campaigns",
        icon: Send,
        path: "/campaigns"
    },


    {
        name: "Leads",
        icon: Users,
        path: "/leads"
    },


    {
        name: "Analytics",
        icon: BarChart3,
        path: "/analytics"
    },


    {
        name: "Templates",
        icon: FileText,
        path: "/templates"
    },


    {
        name: "Settings",
        icon: Settings,
        path: "/settings"
    }


];








const Sidebar = () => {



    return (


        <aside

            className="
            hidden

            lg:flex


            fixed


            left-6

            top-6

            bottom-6


            w-72


            flex-col


            rounded-3xl


            glass


            p-5


            z-50

            "

        >





            {/* Logo */}


            <div className="mb-10">


                <h1

                    className="
                    text-2xl

                    font-bold


                    bg-gradient-to-r

                    from-purple-400

                    to-cyan-400


                    bg-clip-text

                    text-transparent

                    "

                >

                    LeadFlow AI


                </h1>




                <p

                    className="
                    text-sm

                    text-zinc-400

                    mt-1

                    "

                >

                    Automation Dashboard


                </p>


            </div>









            {/* Navigation */}


            <nav

                className="
                space-y-3

                flex-1

                "

            >



                {
                    menuItems.map(
                        (item) => {


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

                                        group

                                        w-full


                                        flex


                                        items-center


                                        gap-4


                                        px-4


                                        py-3


                                        rounded-2xl



                                        transition-all


                                        duration-300



                                        ${isActive

                                                ?

                                                `
                                            bg-white/10

                                            text-white

                                            shadow-lg

                                            border

                                            border-white/10

                                            `

                                                :

                                                `
                                            text-zinc-300

                                            hover:text-white

                                            hover:bg-white/10

                                            `
                                            }


                                        `
                                    }


                                >



                                    <Icon


                                        size={20}


                                        className="

                                        transition

                                        duration-300


                                        group-hover:scale-110

                                        "

                                    />




                                    <span>


                                        {item.name}


                                    </span>




                                </NavLink>


                            )


                        }
                    )
                }



            </nav>









            {/* Logout */}


            <button


                className="

                flex


                items-center


                gap-3


                px-4


                py-3


                rounded-2xl



                text-red-400



                hover:bg-red-500/10



                transition


                "


            >



                <LogOut size={20} />



                Logout



            </button>





        </aside>


    );


};



export default Sidebar;