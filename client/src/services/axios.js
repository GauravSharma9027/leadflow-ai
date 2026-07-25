import axios from "axios";


const api = axios.create({

    baseURL:
        import.meta.env.VITE_BACKEND_URL,

    withCredentials: true,

    headers: {

        "Content-Type": "application/json"

    }

});



/**
 * Request Interceptor
 */

api.interceptors.request.use(

    (config) => {


        return config;


    },

    (error) => {


        return Promise.reject(error);


    }

);





/**
 * Response Interceptor
 */

api.interceptors.response.use(

    (response) => {


        return response;


    },

    (error) => {


        const message =
            error?.response?.data?.message ||
            "Something went wrong";


        console.error(
            "API ERROR:",
            message
        );


        return Promise.reject(error);


    }

);



export default api;