import React from "react";

import { Sparkles } from "lucide-react";


const AIInsightCard = () => {


    return (

        <div

            className="

rounded-3xl

p-6

bg-gradient-to-br

from-purple-600/30

to-cyan-500/20

border

border-white/10

backdrop-blur-xl

"

        >


            <div

                className="
flex
gap-3
items-center
"

            >

                <Sparkles />

                <h3

                    className="
text-xl
font-semibold

"

                >

                    AI Campaign Insight

                </h3>


            </div>



            <p

                className="
mt-4

text-zinc-300

leading-relaxed

"

            >

                Your campaigns are performing 32% better this week.
                AI suggests sending follow-up emails to improve conversion.

            </p>


        </div>

    )

}


export default AIInsightCard;