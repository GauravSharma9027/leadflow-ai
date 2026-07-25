import React from "react";


import {

    Users,

    Send,

    MailCheck,

    TrendingUp

} from "lucide-react";


import StatCard from "../../components/dashboard/StatCard";

import LeadGrowthChart from "../../components/dashboard/LeadGrowthChart";

import CampaignOverview from "../../components/dashboard/CampaignOverview";

import AIInsightCard from "../../components/dashboard/AIInsightCard";



const Dashboard = () => {


    return (

        <div className="space-y-8">


            {/* Heading */}

            <div>

                <h1

                    className="
text-4xl
font-bold

"

                >

                    Good Morning, Sagar 👋

                </h1>


                <p

                    className="
text-zinc-400
mt-2

"

                >

                    Manage your AI powered lead campaigns.

                </p>


            </div>




            {/* Stats */}

            <div

                className="

grid

grid-cols-1

sm:grid-cols-2

xl:grid-cols-4

gap-6

"

            >


                <StatCard

                    title="Total Leads"

                    value="10K"

                    growth="12%"

                    icon={Users}

                />


                <StatCard

                    title="Campaigns"

                    value="48"

                    growth="8%"

                    icon={Send}

                />


                <StatCard

                    title="Emails Sent"

                    value="25K"

                    growth="22%"

                    icon={MailCheck}

                />


                <StatCard

                    title="Conversion"

                    value="18%"

                    growth="5%"

                    icon={TrendingUp}

                />


            </div>





            <div

                className="
grid

xl:grid-cols-3

gap-6

"

            >


                <div className="xl:col-span-2">

                    <LeadGrowthChart />

                </div>


                <CampaignOverview />


            </div>





            <AIInsightCard />


        </div>

    )


}


export default Dashboard;