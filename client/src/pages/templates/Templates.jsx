import React from "react";


import {
    FileText,
    Plus
} from "lucide-react";



const Templates = () => {


    const templates = [
        "Cold Email Template",
        "Follow Up Template",
        "Business Proposal Template"
    ];



    return (

        <div className="
        text-white
        space-y-8
        ">


            <div className="
            flex
            justify-between
            items-center
            ">


                <div>

                    <h1 className="
                    text-4xl
                    font-bold
                    flex
                    gap-3
                    items-center
                    ">

                        <FileText className="text-purple-400" />

                        Templates

                    </h1>


                    <p className="
                    text-zinc-400
                    mt-2
                    ">

                        Create reusable email templates.

                    </p>

                </div>



                <button className="
                px-5
                py-3
                rounded-2xl
                bg-gradient-to-r
                from-purple-600
                to-cyan-500
                flex
                gap-2
                items-center
                ">

                    <Plus size={18} />

                    New Template

                </button>


            </div>






            <div className="
            grid
            md:grid-cols-3
            gap-6
            ">


                {
                    templates.map((item) => (


                        <div

                            key={item}

                            className="
                        rounded-3xl
                        p-6
                        bg-white/5
                        border
                        border-white/10
                        hover:-translate-y-2
                        transition
                        "

                        >

                            <h3 className="font-semibold">
                                {item}
                            </h3>

                            <p className="
                            text-sm
                            text-zinc-400
                            mt-3
                            ">

                                Email automation template

                            </p>


                        </div>


                    ))
                }


            </div>



        </div>

    );

};


export default Templates;