import {
    useQuery,
    useMutation
} from "@tanstack/react-query";


import {

    getLeads,

    importLeads

} from "../services/api/lead.api";




export const useLeads = (params) => {


    return useQuery({

        queryKey: [
            "leads",
            params
        ],


        queryFn:
            () => getLeads(params)


    });


};





export const useImportLeads = () => {


    return useMutation({

        mutationFn:
            importLeads


    });


};