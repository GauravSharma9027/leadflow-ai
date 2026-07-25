import {
    useMutation
} from "@tanstack/react-query";


import {
    sendCampaign
} from "../services/api/campaign.api";



const useCampaign = () => {


    const campaignMutation =
        useMutation({

            mutationFn:
                sendCampaign

        });



    return {

        sendCampaign:
            campaignMutation.mutateAsync,


        isLoading:
            campaignMutation.isPending,


        error:
            campaignMutation.error


    };


};



export default useCampaign;