import React from "react";


const ResultCard = ({
    title,
    value,
    icon: Icon,
    description
}) => {


    return (

        <div

            className="
            rounded-3xl

            p-5

            bg-white/5

            border
            border-white/10

            backdrop-blur-xl

            flex

            items-center

            justify-between

            hover:-translate-y-1

            transition-all

            duration-300

            "

        >


            <div>


                <p className="
                text-sm
                text-zinc-400
                ">

                    {title}

                </p>



                <h3 className="
                text-3xl
                font-bold
                text-white
                mt-2
                ">

                    {value ?? 0}

                </h3>



                {
                    description && (

                        <p className="
                        text-xs
                        text-zinc-500
                        mt-2
                        ">

                            {description}

                        </p>

                    )
                }


            </div>





            <div

                className="
                w-12
                h-12

                rounded-2xl

                bg-gradient-to-br

                from-purple-500

                to-cyan-500

                flex

                items-center

                justify-center

                "

            >

                <Icon size={24} />

            </div>



        </div>

    );

};


export default ResultCard;