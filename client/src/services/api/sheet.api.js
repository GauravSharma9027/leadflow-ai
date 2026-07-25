import axiosClient from "../axios";





/**
 * Import Google Sheet
 *
 * POST /api/v1/sheets/import
 *
 */


export const importSheet = async (payload) => {


    const response = await axiosClient.post(

        "/api/v1/sheets/import",

        payload

    );


    return response.data;


};






/**
 * Preview Sheet Data
 *
 * POST /api/v1/sheets/preview
 *
 */


export const previewSheet = async (payload) => {


    const response = await axiosClient.post(

        "/api/v1/sheets/preview",

        payload

    );


    return response.data;


};






/**
 * Fetch Sheet Columns
 *
 * POST /api/v1/sheets/columns
 *
 */


export const fetchSheetColumns = async (payload) => {


    const response = await axiosClient.post(

        "/api/v1/sheets/columns",

        payload

    );


    return response.data;


};