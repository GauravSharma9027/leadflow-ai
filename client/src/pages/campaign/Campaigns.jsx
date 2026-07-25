import React from "react";


import {
    Plus,
    Megaphone,
} from "lucide-react";


import {
    useNavigate
} from "react-router-dom";


import CampaignCard from "../../components/campaign/CampaignCard";





const Campaigns = () => {


    const navigate = useNavigate();





    /*
        Dummy Data

        Future:

        API:
        GET /api/v1/campaigns

        replace this array

    */


    const campaigns = [


        {
            id: 1,

            name:
                "Restaurant Outreach Campaign",

            status:
                "Running",

            date:
                "25 July 2026",

            leads:
                450,

            sent:
                320,

            progress:
                72,

        },



        {
            id: 2,

            name:
                "Clinic Lead Generation",

            status:
                "Completed",

            date:
                "20 July 2026",

            leads:
                280,

            sent:
                280,

            progress:
                100,

        },



        {
            id: 3,

            name:
                "Startup Founder Email",

            status:
                "Paused",

            date:
                "18 July 2026",

            leads:
                150,

            sent:
                80,

            progress:
                45,

        },


    ];









    return (


        <div className="
        min-h-screen

        text-white

        space-y-8

        ">





            {/* Header */}



            <div className="
            flex

            flex-col

            md:flex-row

            md:items-center

            md:justify-between

            gap-5

            ">



                <div>


                    <h1 className="
                    text-3xl

                    md:text-4xl

                    font-bold

                    ">

                        Campaigns

                    </h1>



                    <p className="
                    mt-2

                    text-zinc-400

                    ">

                        Manage your automated email campaigns.

                    </p>


                </div>









                <button


                    onClick={() => navigate("/campaign/create")}


                    className="
                    flex

                    items-center

                    justify-center

                    gap-2


                    px-6

                    py-3


                    rounded-2xl


                    bg-gradient-to-r

                    from-purple-600

                    to-cyan-500


                    font-semibold


                    shadow-xl


                    hover:scale-105


                    transition-all


                    duration-300

                    "


                >


                    <Plus size={20} />


                    Create Campaign


                </button>




            </div>













            {/* Campaign Grid */}





            {
                campaigns.length > 0

                    ?

                    (

                        <div className="
                grid

                sm:grid-cols-2

                xl:grid-cols-3

                gap-6

                ">


                            {
                                campaigns.map(
                                    (campaign) => (


                                        <CampaignCard

                                            key={
                                                campaign.id
                                            }


                                            campaign={
                                                campaign
                                            }


                                        />


                                    )
                                )
                            }


                        </div>

                    )

                    :



                    (

                        <div className="
                    rounded-3xl

                    p-10

                    bg-white/5

                    border

                    border-white/10

                    flex

                    flex-col

                    items-center

                    justify-center

                    text-center

                    ">


                            <Megaphone

                                size={45}

                                className="text-zinc-400"

                            />


                            <h3 className="
                        mt-4

                        text-xl

                        font-semibold

                        ">

                                No Campaign Found

                            </h3>


                            <p className="
                        mt-2

                        text-zinc-400

                        ">

                                Create your first email automation campaign.

                            </p>


                        </div>


                    )

            }






        </div>


    );

};



export default Campaigns;