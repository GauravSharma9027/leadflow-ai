import React, {
    useState
} from "react";


import {
    Send,
    FileText,
    Loader2,
    CheckCircle,
    Link,
    Users,
    MailCheck,
    MailX
} from "lucide-react";


import toast from "react-hot-toast";


import SheetUploader from "../../components/campaign/SheetUploader";


import {
    startCampaign
} from "../../services/api/campaign.api";
import ResultCard from "../../components/campaign/ResultCard";





const CreateCampaign = () => {


    const [formData, setFormData] = useState({

        sheetUrl: "",

        range: "Sheet1",

        subject: "",

        template: ""

    });



    const [sheetPreview, setSheetPreview] = useState([]);


    const [loading, setLoading] = useState(false);


    const [result, setResult] = useState(null);







    const handleChange = (e) => {


        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });


    };







    const handleSheetPreview = (response) => {


        console.log(
            "Sheet Preview Response:",
            response
        );



        setSheetPreview(

            response?.data?.preview || []

        );


    };

    const handleSubmit = async (e) => {


        e.preventDefault();



        try {


            setLoading(true);


            setResult(null);


            const payload = {


                sheetUrl: formData.sheetUrl,


                range: formData.range,


                subject: formData.subject,


                template: formData.template


            };





            console.log(
                "Campaign Payload:",
                payload
            );





            const response =
                await startCampaign(
                    payload
                );





            setResult(response);



            toast.success(
                "Campaign completed successfully"
            );



        }

        catch (error) {


            console.error(
                "Campaign Error:",
                error
            );



            toast.error(

                error?.response?.data?.message ||

                "Campaign failed"

            );


        }

        finally {


            setLoading(false);


        }


    };








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


                    <Send className="text-cyan-400" />


                    Create Campaign


                </h1>



                <p className="
                text-zinc-400
                mt-2
                ">

                    Create automated email campaigns.

                </p>


            </div>









            <SheetUploader

                onPreview={
                    handleSheetPreview
                }

            />


            {
                sheetPreview.length > 0 && (


                    <div className="
                    rounded-3xl
                    p-6
                    bg-white/5
                    border
                    border-white/10
                    ">


                        <h2 className="
                        text-xl
                        font-semibold
                        mb-5
                        ">

                            Lead Preview

                        </h2>





                        <div className="
                        overflow-x-auto
                        ">


                            <table className="
                            w-full
                            text-left
                            ">


                                <thead>

                                    <tr className="
                                    border-b
                                    border-white/10
                                    text-zinc-400
                                    ">


                                        <th className="p-3">
                                            Name
                                        </th>


                                        <th className="p-3">
                                            Email
                                        </th>


                                    </tr>


                                </thead>






                                <tbody>


                                    {
                                        sheetPreview.map(
                                            (lead, index) => (


                                                <tr

                                                    key={index}

                                                    className="
                                                    border-b
                                                    border-white/5
                                                    "

                                                >


                                                    <td className="p-3">

                                                        {
                                                            lead.Name ||
                                                            lead.name ||
                                                            "-"
                                                        }

                                                    </td>




                                                    <td className="p-3">


                                                        {
                                                            lead.Email ||
                                                            lead.email ||
                                                            "-"
                                                        }


                                                    </td>



                                                </tr>


                                            )
                                        )
                                    }


                                </tbody>


                            </table>


                        </div>


                    </div>


                )
            }









            <form

                onSubmit={handleSubmit}


                className="
                rounded-3xl
                p-6
                md:p-8
                bg-white/5
                border
                border-white/10
                space-y-6
                "

            >







                <Input

                    label="Google Sheet URL"

                    name="sheetUrl"

                    value={
                        formData.sheetUrl
                    }

                    onChange={
                        handleChange
                    }

                    placeholder="Paste Google Sheet URL"

                    icon={Link}

                />








                <Input

                    label="Sheet Range"

                    name="range"

                    value={
                        formData.range
                    }

                    onChange={
                        handleChange
                    }

                    placeholder="Sheet1"

                    icon={FileText}

                />








                <Input

                    label="Email Subject"

                    name="subject"

                    value={
                        formData.subject
                    }

                    onChange={
                        handleChange
                    }

                    placeholder="Email Subject"

                    icon={FileText}

                />








                <div>


                    <label className="
                    text-sm
                    text-zinc-400
                    ">

                        Email Template

                    </label>



                    <textarea


                        name="template"


                        value={
                            formData.template
                        }


                        onChange={
                            handleChange
                        }


                        rows="8"


                        placeholder="Hello {{name}}"



                        className="
                        mt-2
                        w-full
                        rounded-2xl
                        bg-black/20
                        border
                        border-white/10
                        p-4
                        outline-none
                        "

                    />



                </div>









                <button

                    disabled={loading}


                    className="
                    w-full
                    py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-purple-600
                    to-cyan-500
                    flex
                    justify-center
                    items-center
                    gap-2
                    font-semibold
                    transition
                    hover:scale-[1.02]
                    disabled:opacity-50
                    "

                >


                    {

                        loading

                            ?

                            <>

                                <Loader2 className="animate-spin" />

                                Sending...

                            </>


                            :

                            <>

                                <Send />

                                Start Campaign

                            </>


                    }


                </button>



            </form>









            {
                result && (


                    <div className="
                    rounded-3xl
                    p-6
                    bg-green-500/10
                    border
                    border-green-400/20
                    ">


                        <div className="
                        flex
                        items-center
                        gap-3
                        ">


                            <CheckCircle className="text-green-400" />


                            <h2>
                                Campaign Result
                            </h2>


                        </div>





                        <div className="
grid
grid-cols-1
md:grid-cols-2
gap-5
mt-6
">


                            <ResultCard

                                title="Total Leads"

                                value={
                                    result.data?.totalLeads
                                }

                                icon={Users}

                                description="Leads processed"

                            />



                            <ResultCard

                                title="Valid Emails"

                                value={
                                    result.data?.validEmails
                                }

                                icon={MailCheck}

                                description="Ready to send"

                            />



                            <ResultCard

                                title="Emails Sent"

                                value={
                                    result.data?.sent
                                }

                                icon={MailCheck}

                                description="Delivered successfully"

                            />



                            <ResultCard

                                title="Failed"

                                value={
                                    result.data?.failed
                                }

                                icon={MailX}

                                description="Delivery failed"

                            />


                        </div>


                    </div>


                )
            }





        </div>


    );

};









const Input = ({
    label,
    icon: Icon,
    ...props
}) => {


    return (

        <div>


            <label className="
            text-sm
            text-zinc-400
            ">

                {label}

            </label>



            <div className="
            mt-2
            relative
            ">


                <Icon

                    size={18}

                    className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-zinc-400
                    "

                />



                <input

                    {...props}


                    className="
                    w-full
                    rounded-2xl
                    bg-black/20
                    border
                    border-white/10
                    py-3
                    pl-12
                    pr-4
                    outline-none
                    "

                />


            </div>


        </div>

    );


};




export default CreateCampaign;