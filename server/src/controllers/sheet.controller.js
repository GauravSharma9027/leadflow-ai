/**
 * ------------------------------------------------------------------
 * File: sheet.controller.js
 * Location: src/controllers/sheet.controller.js
 *
 * Purpose:
 * Handle Google Sheet related HTTP requests.
 *
 * Responsibilities:
 * - Import Google Sheet
 * - Preview Sheet Data
 * - Get Dynamic Columns
 *
 * NOTE:
 * Google Sheet business logic exists inside sheet.service.js
 * ------------------------------------------------------------------
 */


import asyncHandler from "../middleware/asyncHandler.js";

import ApiResponse from "../utils/ApiResponse.js";

import ApiError from "../utils/ApiError.js";


import {
    importGoogleSheet,
    fetchSheetData,
    extractSpreadsheetId,
    getSheetColumns,
    convertRowsToJSON,
} from "../services/sheet.service.js";





/**
 * ------------------------------------------------------------------
 * @route GET /api/v1/sheets/health
 * @desc Sheet Module Health Check
 * ------------------------------------------------------------------
 */
export const healthCheck = asyncHandler(
    async (req, res) => {


        return new ApiResponse(
            200,
            {
                module: "Google Sheets",
                status: "Healthy"
            },
            "Sheet module is working successfully."
        ).send(res);


    }
);







/**
 * ------------------------------------------------------------------
 * @route POST /api/v1/sheets/import
 *
 * Body:
 *
 * {
 *   "url":"google-sheet-url",
 *   "range":"Sheet1"
 * }
 *
 * ------------------------------------------------------------------
 */
export const importSheet = asyncHandler(
    async (req, res) => {


        const {
            url,
            range
        } = req.body;




        if (!url) {

            throw new ApiError(
                400,
                "Google Sheet URL is required."
            );

        }




        const result =
            await importGoogleSheet({

                url,

                range:

                    range || "Sheet1"

            });





        return new ApiResponse(
            200,
            result,
            "Google Sheet imported successfully."
        ).send(res);



    }
);








/**
 * ------------------------------------------------------------------
 * @route POST /api/v1/sheets/preview
 *
 * Purpose:
 * Show limited preview of sheet data
 *
 * Body:
 *
 * {
 *    "url":"",
 *    "range":"Sheet1"
 * }
 *
 * ------------------------------------------------------------------
 */
export const previewSheet = asyncHandler(
    async (req, res) => {


        const {
            url,
            range
        } = req.body;



        if (!url) {

            throw new ApiError(
                400,
                "Google Sheet URL is required."
            );

        }




        const spreadsheetId =
            extractSpreadsheetId(
                url
            );





        const rows =
            await fetchSheetData({

                spreadsheetId,

                range:
                    range || "Sheet1"

            });





        const data =
            convertRowsToJSON(
                rows
            );




        return new ApiResponse(
            200,
            {
                total:
                    data.length,

                preview:
                    data.slice(0, 10)

            },
            "Sheet preview fetched successfully."
        ).send(res);



    }
);









/**
 * ------------------------------------------------------------------
 * @route POST /api/v1/sheets/columns
 *
 * Purpose:
 * Detect dynamic columns
 *
 * Body:
 *
 * {
 *    "url":"",
 *    "range":"Sheet1"
 * }
 *
 * ------------------------------------------------------------------
 */
export const fetchSheetColumns = asyncHandler(
    async (req, res) => {


        const {
            url,
            range
        } = req.body;




        if (!url) {

            throw new ApiError(
                400,
                "Google Sheet URL is required."
            );

        }




        const spreadsheetId =
            extractSpreadsheetId(
                url
            );





        const rows =
            await fetchSheetData({

                spreadsheetId,

                range:
                    range || "Sheet1"

            });





        const columns =
            getSheetColumns(
                rows
            );





        return new ApiResponse(
            200,
            {
                columns
            },
            "Sheet columns fetched successfully."
        ).send(res);



    }
);