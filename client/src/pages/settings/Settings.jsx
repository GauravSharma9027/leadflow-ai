import React from "react";


import {
    Settings as SettingsIcon
} from "lucide-react";




const Settings = () => {


    return (

        <div className="
        text-white
        space-y-8
        ">


            <div>


                <h1 className="
                text-4xl
                font-bold
                flex
                gap-3
                items-center
                ">


                    <SettingsIcon className="text-cyan-400" />


                    Settings


                </h1>


                <p className="
                text-zinc-400
                mt-2
                ">

                    Manage your application preferences.

                </p>


            </div>






            <div className="
            rounded-3xl
            p-8
            bg-white/5
            border
            border-white/10
            ">


                <h2 className="text-xl font-semibold">

                    Account Settings

                </h2>


                <p className="
                text-zinc-400
                mt-3
                ">

                    Authentication, profile and integrations settings will be added here.

                </p>


            </div>



        </div>

    );

};


export default Settings;