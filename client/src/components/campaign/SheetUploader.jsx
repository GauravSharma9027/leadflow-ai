import React, {
    useState
} from "react";


import {
    FileSpreadsheet,
    Search,
    Loader2
} from "lucide-react";


import toast from "react-hot-toast";


import {
    previewSheet
} from "../../services/api/sheet.api";





const SheetUploader = ({
    onPreview
}) => {


    const [sheetUrl,setSheetUrl] =
        useState("");


    const [range,setRange] =
        useState("Sheet1");


    const [loading,setLoading] =
        useState(false);







    const handlePreview = async()=>{


        if(!sheetUrl){

            toast.error(
                "Please enter Google Sheet URL"
            );

            return;

        }



        try{


            setLoading(true);



            const response =
                await previewSheet({

                    url: sheetUrl,

                    range

                });



            onPreview?.(
                response
            );



            toast.success(
                "Sheet preview loaded"
            );


        }

        catch(error){


            console.error(error);


            toast.error(
                error?.response?.data?.message ||
                "Unable to fetch sheet"
            );


        }

        finally{


            setLoading(false);


        }


    };








    return (


        <div className="
        rounded-3xl
        p-6
        bg-white/5
        border
        border-white/10
        space-y-5
        ">



            <div className="
            flex
            items-center
            gap-3
            ">


                <FileSpreadsheet

                    className="text-green-400"

                />


                <h2 className="
                text-xl
                font-semibold
                ">

                    Import Google Sheet

                </h2>


            </div>








            <input


                value={sheetUrl}


                onChange={
                    (e)=>
                    setSheetUrl(e.target.value)
                }


                placeholder="
                Google Sheet URL
                "


                className="
                w-full
                rounded-2xl
                bg-black/20
                border
                border-white/10
                p-4
                outline-none
                "

            />








            <input


                value={range}


                onChange={
                    (e)=>
                    setRange(e.target.value)
                }


                placeholder="Sheet1"


                className="
                w-full
                rounded-2xl
                bg-black/20
                border
                border-white/10
                p-4
                outline-none
                "

            />








            <button


                onClick={handlePreview}


                disabled={loading}


                className="
                w-full
                py-3
                rounded-2xl
                bg-gradient-to-r
                from-purple-600
                to-cyan-500
                flex
                justify-center
                items-center
                gap-2
                "


            >


                {

                    loading

                    ?

                    <>

                    <Loader2 className="animate-spin"/>

                    Loading...

                    </>


                    :

                    <>

                    <Search/>

                    Preview Leads

                    </>


                }


            </button>




        </div>


    );

};


export default SheetUploader;