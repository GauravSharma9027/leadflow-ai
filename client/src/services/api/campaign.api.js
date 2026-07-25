import axiosClient from "../axios";



/**
 * Start Email Campaign
 *
 * Backend:
 *
 * POST /api/v1/campaign/send
 *
 */


export const startCampaign = async (payload) => {


    const response = await axiosClient.post(

        "/api/v1/campaign/send",

        payload

    );


    return response.data;


};