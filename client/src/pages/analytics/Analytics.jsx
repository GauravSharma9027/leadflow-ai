import React from "react";


import {
    BarChart3,
    TrendingUp,
    Mail,
    Users,
    Activity
} from "lucide-react";





const Analytics = () => {



    const stats = [


        {
            title: "Total Emails Sent",
            value: "12,450",
            icon: Mail
        },


        {
            title: "Open Rate",
            value: "78%",
            icon: TrendingUp
        },


        {
            title: "Active Leads",
            value: "2,340",
            icon: Users
        },


        {
            title: "Campaign Activity",
            value: "94%",
            icon: Activity
        }


    ];





    return (


        <div className="
        min-h-screen

        text-white

        space-y-8

        ">



            {/* Header */}


            <div>


                <h1 className="
                text-3xl

                md:text-4xl

                font-bold

                flex

                items-center

                gap-3

                ">


                    <BarChart3

                        className="text-cyan-400"

                    />


                    Analytics


                </h1>



                <p className="
                mt-2

                text-zinc-400

                ">

                    Track your email automation performance.

                </p>


            </div>









            {/* Stats */}



            <div className="
            grid

            sm:grid-cols-2

            xl:grid-cols-4

            gap-6

            ">


                {
                    stats.map(
                        (item) => {


                            const Icon =
                                item.icon;


                            return (


                                <div

                                    key={item.title}

                                    className="
                                    rounded-3xl

                                    p-6

                                    bg-white/5

                                    backdrop-blur-xl

                                    border

                                    border-white/10


                                    hover:-translate-y-2

                                    transition-all

                                    duration-300

                                    "

                                >



                                    <div className="
                                    w-12

                                    h-12

                                    rounded-2xl

                                    bg-gradient-to-br

                                    from-purple-500

                                    to-cyan-500

                                    flex

                                    items-center

                                    justify-center

                                    mb-5

                                    ">


                                        <Icon size={22} />


                                    </div>





                                    <p className="
                                    text-sm

                                    text-zinc-400

                                    ">

                                        {item.title}

                                    </p>



                                    <h2 className="
                                    text-3xl

                                    font-bold

                                    mt-2

                                    ">

                                        {item.value}

                                    </h2>




                                </div>


                            )


                        }
                    )
                }


            </div>









            {/* Chart Placeholder */}


            <div className="
            rounded-3xl

            p-8

            bg-white/5

            backdrop-blur-xl

            border

            border-white/10

            h-80

            flex

            items-center

            justify-center

            ">


                <div className="
                text-center
                ">


                    <BarChart3

                        size={50}

                        className="
                        mx-auto

                        text-zinc-500

                        "

                    />


                    <h3 className="
                    mt-4

                    text-xl

                    font-semibold

                    ">

                        Analytics Chart

                    </h3>


                    <p className="
                    text-zinc-400

                    mt-2

                    ">

                        Real data visualization will connect here later.

                    </p>


                </div>


            </div>




        </div>


    );


};


export default Analytics;