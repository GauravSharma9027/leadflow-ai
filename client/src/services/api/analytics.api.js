import api from "../axios";


export const getDashboardAnalytics = async () => {


    const response = await api.get(
        "/api/v1/analytics"
    );


    return response.data;


};