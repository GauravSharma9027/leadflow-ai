/**
 * ------------------------------------------------------------------
 * File: sheet.service.js
 * Location: src/services/sheet.service.js
 *
 * Purpose:
 * Handle Google Sheet operations.
 *
 * Responsibilities:
 * - Extract Spreadsheet ID
 * - Fetch sheet data
 * - Convert rows into JSON
 * - Detect dynamic columns
 *
 * NOTE:
 * This service only handles Google Sheet logic.
 * Controllers should never directly call Google API.
 * ------------------------------------------------------------------
 */


import { google } from "googleapis";

import googleAuth from "../config/google.config.js";

import ApiError from "../utils/ApiError.js";

import logger from "../helpers/logger.js";



/**
 * ---------------------------------------------------------
 * Extract Spreadsheet ID From URL
 *
 * Example:
 *
 * https://docs.google.com/spreadsheets/d/ABC123/edit
 *
 * Output:
 *
 * ABC123
 *
 * ---------------------------------------------------------
 */

export const extractSpreadsheetId = (
    url
) => {


    if (!url) {

        throw new ApiError(
            400,
            "Google Sheet URL is required."
        );

    }


    const regex =
        /\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/;


    const match =
        url.match(regex);



    if (!match) {

        throw new ApiError(
            400,
            "Invalid Google Sheet URL."
        );

    }


    return match[1];

};





/**
 * ---------------------------------------------------------
 * Get Google Sheet Client
 *
 * Creates Sheets API instance.
 *
 * ---------------------------------------------------------
 */

const getSheetsClient = async () => {


    const client =
        await googleAuth.getClient();



    return google.sheets({
        version: "v4",
        auth: client,
    });


};






/**
 * ---------------------------------------------------------
 * Fetch Sheet Data
 *
 * @param {String} spreadsheetId
 * @param {String} range
 *
 * ---------------------------------------------------------
 */

export const fetchSheetData = async ({

    spreadsheetId,

    range = "Sheet1",

}) => {


    try {


        const sheets =
            await getSheetsClient();



        const response =
            await sheets.spreadsheets.values.get({

                spreadsheetId,

                range,

            });



        return response.data.values || [];



    } catch (error) {


        logger.error(
            "Failed to fetch Google Sheet data.",
            error
        );



        throw new ApiError(
            500,
            "Unable to fetch Google Sheet data.",
            [
                error.message
            ]
        );

    }

};







/**
 * ---------------------------------------------------------
 * Convert Rows Into JSON
 *
 * First row = Headers
 *
 * Remaining rows = Data
 *
 * ---------------------------------------------------------
 */

export const convertRowsToJSON = (
    rows = []
) => {


    if (
        !rows.length
    ) {

        return [];

    }



    const headers =
        rows[0].map(
            header =>
                header.trim()
        );



    const data =
        rows.slice(1);



    return data.map(
        row => {


            const object = {};



            headers.forEach(
                (header, index) => {


                    object[header] =
                        row[index] || "";


                }
            );



            return object;

        }
    );

};






/**
 * ---------------------------------------------------------
 * Get Sheet Columns
 *
 * Returns dynamic column names.
 *
 * ---------------------------------------------------------
 */

export const getSheetColumns = (
    rows = []
) => {


    if (
        !rows.length
    ) {

        return [];

    }



    return rows[0].map(
        column =>
            column.trim()
    );


};





/**
 * ---------------------------------------------------------
 * Import Google Sheet
 *
 * Complete Flow:
 *
 * URL
 * ↓
 * ID Extract
 * ↓
 * Fetch Data
 * ↓
 * Convert JSON
 *
 * ---------------------------------------------------------
 */

export const importGoogleSheet = async ({

    url,

    range = "Sheet1",

}) => {


    try {


        const spreadsheetId =
            extractSpreadsheetId(url);



        const rows =
            await fetchSheetData({

                spreadsheetId,

                range,

            });



        const data =
            convertRowsToJSON(rows);



        logger.success(
            `Google Sheet imported. Total rows: ${data.length}`
        );



        return {

            spreadsheetId,

            totalRecords: data.length,

            columns: getSheetColumns(rows),

            data,

        };


    } catch (error) {


        logger.error(
            "Google Sheet import failed.",
            error
        );


        throw error;

    }

};