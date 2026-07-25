import React from "react";


import {
    Users,
    Search,
    Filter
} from "lucide-react";




const Leads = () => {


    const leads = [
        {
            name: "Rahul Sharma",
            email: "rahul@example.com",
            status: "New"
        },
        {
            name: "Amit Verma",
            email: "amit@example.com",
            status: "Contacted"
        },
        {
            name: "Neha Singh",
            email: "neha@example.com",
            status: "Interested"
        }
    ];




    return (

        <div className="
        text-white
        space-y-8
        ">


            <div>


                <h1 className="
                text-3xl
                md:text-4xl
                font-bold
                flex
                items-center
                gap-3
                ">

                    <Users className="text-cyan-400" />

                    Leads

                </h1>


                <p className="
                text-zinc-400
                mt-2
                ">

                    Manage your email campaign leads.

                </p>


            </div>





            <div className="
            rounded-3xl
            p-5
            bg-white/5
            border
            border-white/10
            ">


                <div className="
                flex
                gap-3
                mb-6
                ">


                    <div className="
                    flex-1
                    flex
                    items-center
                    gap-3
                    bg-black/20
                    rounded-2xl
                    px-4
                    ">

                        <Search size={18} />

                        <input

                            placeholder="Search leads..."

                            className="
                            bg-transparent
                            outline-none
                            w-full
                            py-3
                            "

                        />


                    </div>



                    <button className="
                    px-4
                    rounded-2xl
                    bg-white/10
                    ">

                        <Filter size={18} />

                    </button>


                </div>






                <div className="space-y-3">


                    {
                        leads.map((lead) => (

                            <div

                                key={lead.email}

                                className="
                            p-4
                            rounded-2xl
                            bg-white/5
                            flex
                            justify-between
                            "

                            >

                                <div>

                                    <h3 className="font-semibold">
                                        {lead.name}
                                    </h3>

                                    <p className="text-sm text-zinc-400">
                                        {lead.email}
                                    </p>

                                </div>


                                <span className="
                                text-sm
                                text-cyan-400
                                ">

                                    {lead.status}

                                </span>


                            </div>

                        ))
                    }


                </div>


            </div>


        </div>

    );

};


export default Leads;