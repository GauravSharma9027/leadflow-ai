/**
 * ------------------------------------------------------------------
 * File: campaign.controller.js
 * Location: src/controllers/campaign.controller.js
 *
 * Purpose:
 * Handle campaign automation requests.
 *
 * Responsibilities:
 * - Start email campaign
 * - Validate campaign input
 * - Return campaign result
 *
 * NOTE:
 * Business logic exists inside campaign.service.js
 * ------------------------------------------------------------------
 */


import asyncHandler from "../middleware/asyncHandler.js";

import ApiResponse from "../utils/ApiResponse.js";

import ApiError from "../utils/ApiError.js";


import {
    processCampaign,
} from "../services/campaign.service.js";





/**
 * ------------------------------------------------------------------
 * @route   POST /api/v1/campaign/send
 *
 * @body
 *
 * {
 *   sheetUrl:"",
 *   range:"Sheet1",
 *   subject:"",
 *   template:""
 * }
 *
 * ------------------------------------------------------------------
 */
export const sendCampaign = asyncHandler(
    async (req, res) => {


        const {

            sheetUrl,

            range,

            subject,

            template,

        } = req.body;





        /**
         * Basic Validation
         */

        if (!sheetUrl) {

            throw new ApiError(
                400,
                "Google Sheet URL is required."
            );

        }



        if (!subject) {

            throw new ApiError(
                400,
                "Email subject is required."
            );

        }



        if (!template) {

            throw new ApiError(
                400,
                "Email template is required."
            );

        }





        /**
         * Start Campaign
         */

        const result =
            await processCampaign({

                sheetUrl,

                range:

                    range || "Sheet1",

                subject,

                template,

            });






        return new ApiResponse(
            200,
            result,
            "Campaign completed successfully."
        ).send(res);



    }
);