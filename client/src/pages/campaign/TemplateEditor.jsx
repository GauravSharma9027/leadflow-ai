import React from "react";

import {
    Mail,
    Sparkles,
    Code2,
} from "lucide-react";



const variables = [
    "{{name}}",
    "{{company}}",
    "{{email}}",
    "{{phone}}",
];





const TemplateEditor = ({
    subject,
    template,
    onChange,
}) => {



    return (

        <div className="
        rounded-3xl

        p-6

        bg-white/5

        backdrop-blur-xl

        border

        border-white/10

        ">



            {/* Header */}

            <div className="
            flex
            items-center
            gap-3
            mb-6
            ">


                <div className="
                w-12
                h-12

                rounded-2xl

                bg-gradient-to-br

                from-purple-500

                to-cyan-500

                flex

                items-center

                justify-center

                shadow-lg

                ">


                    <Mail size={24} />


                </div>




                <div>


                    <h2 className="
                    text-xl
                    font-semibold
                    ">

                        Email Template

                    </h2>



                    <p className="
                    text-sm
                    text-zinc-400
                    ">

                        Create personalized email content

                    </p>


                </div>



            </div>









            {/* Subject */}


            <div className="
            space-y-2
            ">


                <label className="
                text-sm
                text-zinc-400
                ">

                    Email Subject

                </label>



                <input


                    name="subject"

                    value={subject}

                    onChange={onChange}


                    placeholder="Example: Special offer for {{company}}"


                    className="
                    w-full

                    px-5

                    py-4

                    rounded-2xl

                    bg-black/20

                    border

                    border-white/10

                    outline-none

                    text-white

                    placeholder:text-zinc-500

                    focus:border-purple-400

                    transition

                    "

                />



            </div>









            {/* Variables */}



            <div className="
            mt-6
            ">


                <div className="
                flex
                items-center
                gap-2
                mb-3
                ">


                    <Code2
                        size={18}
                        className="text-cyan-400"
                    />


                    <span className="
                    text-sm
                    text-zinc-400
                    ">

                        Available Variables

                    </span>


                </div>





                <div className="
                flex
                flex-wrap
                gap-2
                ">


                    {
                        variables.map((item) => (


                            <span

                                key={item}

                                className="
                                px-3

                                py-1.5

                                rounded-xl

                                bg-cyan-500/10

                                border

                                border-cyan-400/20

                                text-cyan-300

                                text-sm

                                "

                            >

                                {item}

                            </span>


                        ))
                    }


                </div>


            </div>









            {/* Template */}



            <div className="
            mt-6

            space-y-2

            ">


                <label className="
                text-sm
                text-zinc-400
                ">

                    Message Template

                </label>





                <textarea


                    name="template"


                    value={template}


                    onChange={onChange}


                    rows="10"


                    placeholder="
Hello {{name}},

Hope you are doing well.

We would like to introduce our service...
                    "


                    className="
                    w-full

                    px-5

                    py-4

                    rounded-2xl

                    bg-black/20

                    border

                    border-white/10

                    outline-none

                    resize-none

                    text-white

                    placeholder:text-zinc-500

                    focus:border-cyan-400

                    transition

                    "

                />



            </div>








            {/* Helper */}


            <div className="
            mt-6

            flex

            gap-3

            rounded-2xl

            p-4

            bg-purple-500/10

            border

            border-purple-400/20

            ">


                <Sparkles

                    size={20}

                    className="text-purple-400"

                />


                <p className="
                text-sm

                text-zinc-300

                ">


                    Use variables like
                    <span className="text-cyan-300">
                        {" {{name}} "}
                    </span>
                    to automatically personalize every email.


                </p>


            </div>




        </div>

    );

};



export default TemplateEditor;