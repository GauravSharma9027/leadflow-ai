/**
 * ------------------------------------------------------------------
 * File: mail.controller.js
 * Location: src/controllers/mail.controller.js
 *
 * Purpose:
 * Handle email related HTTP requests.
 *
 * Responsibilities:
 * - SMTP verification
 * - Send test email
 * - Send campaign emails
 *
 * NOTE:
 * All email business logic exists inside mail.service.js
 * ------------------------------------------------------------------
 */

import asyncHandler from "../middleware/asyncHandler.js";

import ApiResponse from "../utils/ApiResponse.js";

import ApiError from "../utils/ApiError.js";

import {
    verifySMTPConnection,
    sendEmail,
    sendBulkEmails,
} from "../services/mail.service.js";



/**
 * ------------------------------------------------------------------
 * @route   GET /api/v1/mail/health
 * @desc    Mail Module Health Check
 * ------------------------------------------------------------------
 */
export const healthCheck = asyncHandler(
    async (req, res) => {

        return new ApiResponse(
            200,
            {
                module: "Mail",
                status: "Healthy",
            },
            "Mail module is working successfully."
        ).send(res);

    }
);





/**
 * ------------------------------------------------------------------
 * @route   POST /api/v1/mail/validate-smtp
 *
 * Body:
 * {}
 *
 * ------------------------------------------------------------------
 */
export const validateSMTP = asyncHandler(
    async (req, res) => {


        await verifySMTPConnection();


        return new ApiResponse(
            200,
            null,
            "SMTP connection verified successfully."
        ).send(res);


    }
);







/**
 * ------------------------------------------------------------------
 * @route POST /api/v1/mail/test
 *
 * Body:
 *
 * {
 *   "to":"client@gmail.com",
 *   "subject":"Testing",
 *   "html":"Hello Client"
 * }
 *
 * ------------------------------------------------------------------
 */
export const sendTestMail = asyncHandler(
    async (req, res) => {


        const {
            to,
            subject,
            html,
        } = req.body;



        if (
            !to ||
            !subject ||
            !html
        ) {

            throw new ApiError(
                400,
                "to, subject and html are required."
            );

        }



        const result =
            await sendEmail({

                to,

                subject,

                html,

            });




        return new ApiResponse(
            200,
            result,
            "Test email sent successfully."
        ).send(res);



    }
);








/**
 * ------------------------------------------------------------------
 * @route POST /api/v1/mail/send
 *
 * Body:
 *
 * [
 *   {
 *      to:"",
 *      subject:"",
 *      html:""
 *   }
 * ]
 *
 * ------------------------------------------------------------------
 */
export const sendCampaign = asyncHandler(
    async (req, res) => {


        const {
            emails,
        } = req.body;




        if (
            !emails ||
            !Array.isArray(emails)
        ) {

            throw new ApiError(
                400,
                "Emails array is required."
            );

        }




        const result =
            await sendBulkEmails(
                emails
            );




        return new ApiResponse(
            200,
            {
                total:
                    result.length,

                results:
                    result,
            },
            "Campaign email process completed."
        ).send(res);



    }
);