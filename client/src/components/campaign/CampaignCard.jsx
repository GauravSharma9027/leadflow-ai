import React from "react";


import {
    Users,
    Mail,
    Play,
    Pause,
    ArrowUpRight,
    CalendarDays,
} from "lucide-react";





const CampaignCard = ({
    campaign
}) => {



    return (


        <div

            className="
            group

            relative

            rounded-3xl

            p-6


            bg-white/5


            backdrop-blur-xl


            border

            border-white/10


            shadow-xl


            hover:-translate-y-2


            hover:shadow-2xl


            transition-all


            duration-300


            overflow-hidden

            "


        >




            {/* Glow */}


            <div className="
            absolute

            -top-20

            -right-20

            w-40

            h-40

            rounded-full

            bg-purple-500/20

            blur-3xl

            group-hover:bg-cyan-500/20

            transition

            " />









            {/* Header */}


            <div className="
            relative

            flex

            justify-between

            items-start

            ">



                <div>


                    <h3 className="
                    text-xl

                    font-semibold

                    ">

                        {campaign.name}


                    </h3>




                    <div className="
                    flex

                    items-center

                    gap-2

                    mt-2

                    text-sm

                    text-zinc-400

                    ">


                        <CalendarDays size={15} />


                        {campaign.date}


                    </div>



                </div>








                <span

                    className={`

                    px-3

                    py-1

                    rounded-full

                    text-xs

                    font-medium


                    ${campaign.status === "Running"

                            ?

                            "bg-green-500/20 text-green-400"

                            :

                            campaign.status === "Completed"

                                ?

                                "bg-cyan-500/20 text-cyan-400"

                                :

                                "bg-yellow-500/20 text-yellow-400"

                        }

                    `}

                >

                    {campaign.status}


                </span>




            </div>









            {/* Stats */}


            <div className="
            relative

            grid

            grid-cols-2

            gap-4

            mt-6

            ">



                <div className="
                rounded-2xl

                p-4

                bg-black/20

                ">


                    <Users

                        size={18}

                        className="text-cyan-400"

                    />


                    <p className="
                    text-sm

                    text-zinc-400

                    mt-2

                    ">

                        Leads

                    </p>


                    <h4 className="
                    text-2xl

                    font-bold

                    ">

                        {campaign.leads}

                    </h4>


                </div>







                <div className="
                rounded-2xl

                p-4

                bg-black/20

                ">


                    <Mail

                        size={18}

                        className="text-purple-400"

                    />


                    <p className="
                    text-sm

                    text-zinc-400

                    mt-2

                    ">

                        Sent

                    </p>



                    <h4 className="
                    text-2xl

                    font-bold

                    ">

                        {campaign.sent}

                    </h4>


                </div>



            </div>










            {/* Progress */}



            <div className="
            mt-6

            ">


                <div className="
                flex

                justify-between

                text-sm

                mb-2

                ">


                    <span className="text-zinc-400">

                        Progress

                    </span>


                    <span>

                        {campaign.progress}%

                    </span>


                </div>





                <div className="
                h-2

                rounded-full

                bg-white/10

                overflow-hidden

                ">


                    <div

                        style={{
                            width: `${campaign.progress}%`
                        }}

                        className="
                        h-full

                        rounded-full

                        bg-gradient-to-r

                        from-purple-500

                        to-cyan-500

                        "

                    />



                </div>



            </div>









            {/* Actions */}


            <div className="
            flex

            justify-between

            items-center

            mt-6

            ">



                <button

                    className="
                    flex

                    items-center

                    gap-2

                    text-sm

                    text-zinc-300

                    hover:text-white

                    transition

                    "

                >

                    {
                        campaign.status === "Running"

                            ?

                            <Pause size={16} />

                            :

                            <Play size={16} />

                    }


                    Manage


                </button>







                <button

                    className="
                    w-10

                    h-10

                    rounded-xl


                    bg-white/10


                    flex

                    items-center

                    justify-center


                    hover:bg-white/20


                    transition

                    "

                >


                    <ArrowUpRight size={18} />


                </button>




            </div>





        </div>


    );

};



export default CampaignCard;