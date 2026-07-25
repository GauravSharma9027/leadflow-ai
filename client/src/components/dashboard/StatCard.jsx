import React from "react";


const StatCard = ({
    title,
    value,
    icon: Icon,
    growth,
}) => {


    return (

        <div

            className="
glass
rounded-3xl
p-6

hover:-translate-y-2

transition-all
duration-300

group

"

        >


            <div

                className="
flex
items-center
justify-between
"

            >


                <div>


                    <p

                        className="
text-sm
text-zinc-400

"

                    >

                        {title}

                    </p>


                    <h2

                        className="
text-4xl
font-bold

mt-3

text-white

"

                    >

                        {value}

                    </h2>


                    <p

                        className="
text-sm
text-green-400

mt-3

"

                    >

                        ↑ {growth}

                    </p>


                </div>





                <div

                    className="

w-14
h-14

rounded-2xl

bg-gradient-to-br

from-purple-500

to-cyan-500

flex

items-center

justify-center


group-hover:scale-110

transition

"

                >


                    <Icon size={28} />


                </div>


            </div>


        </div>

    )

}


export default StatCard;