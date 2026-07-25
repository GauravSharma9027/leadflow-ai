import {
    useQuery
} from "@tanstack/react-query";


import {
    getDashboardAnalytics
} from "../services/api/analytics.api";



const useAnalytics = () => {


    return useQuery({

        queryKey: [
            "dashboard-analytics"
        ],


        queryFn:
            getDashboardAnalytics,


    });


};



export default useAnalytics;