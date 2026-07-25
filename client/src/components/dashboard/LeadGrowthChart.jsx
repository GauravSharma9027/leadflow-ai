import React from "react";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";


const data = [

    {
        name: "Mon",
        leads: 120
    },

    {
        name: "Tue",
        leads: 220
    },

    {
        name: "Wed",
        leads: 180
    },

    {
        name: "Thu",
        leads: 350
    },

    {
        name: "Fri",
        leads: 420
    },

    {
        name: "Sat",
        leads: 520
    }

];



const LeadGrowthChart = () => {


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

mb-6

"

            >

                Lead Growth

            </h3>



            <ResponsiveContainer

                width="100%"

                height={300}

            >

                <LineChart data={data}>


                    <XAxis dataKey="name" />


                    <YAxis />


                    <Tooltip />


                    <Line

                        type="monotone"

                        dataKey="leads"

                        strokeWidth={3}

                    />


                </LineChart>


            </ResponsiveContainer>


        </div>

    )


}


export default LeadGrowthChart;