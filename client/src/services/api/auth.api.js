import api from "../axios";


const AUTH_URL = "/api/v1/auth";



export const loginUser = async (data) => {


    const response =
        await api.post(

            `${AUTH_URL}/login`,

            data

        );


    return response.data;


};





export const logoutUser = async () => {


    const response =
        await api.post(

            `${AUTH_URL}/logout`

        );


    return response.data;


};





export const getProfile = async () => {


    const response =
        await api.get(

            `${AUTH_URL}/profile`

        );


    return response.data;


};