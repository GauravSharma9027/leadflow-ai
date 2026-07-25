import React from "react";


const CampaignOverview = () => {


    return (

        <div

            className="
glass
rounded-3xl
p-6

"

        >


            <h3

                className="
text-xl
font-semibold
mb-5

"

            >

                Campaign Overview

            </h3>



            <div

                className="
space-y-5

"

            >


                {
                    [
                        ["Emails Sent", "12,450"],
                        ["Opened", "8,920"],
                        ["Replies", "1,240"]

                    ].map((item) => (


                        <div

                            key={item[0]}

                            className="
flex
justify-between

bg-white/5

rounded-2xl

p-4

"

                        >


                            <span className="text-zinc-400">

                                {item[0]}

                            </span>


                            <span className="font-bold">

                                {item[1]}

                            </span>


                        </div>


                    ))
                }


            </div>


        </div>

    )

}


export default CampaignOverview;