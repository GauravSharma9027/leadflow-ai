import api from "../axios";



const LEAD_URL =
    "/api/v1/leads";



export const getLeads = async (params) => {


    const response =
        await api.get(

            LEAD_URL,

            {
                params
            }

        );


    return response.data;


};




export const importLeads = async (data) => {


    const response =
        await api.post(

            `${LEAD_URL}/import`,

            data

        );


    return response.data;


};