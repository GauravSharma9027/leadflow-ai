/**
 * ------------------------------------------------------------------
 * File: campaign.service.js
 *
 * Purpose:
 * Complete Email Campaign Automation Logic
 *
 * Flow:
 *
 * Google Sheet
 *       ↓
 * Fetch Leads
 *       ↓
 * Normalize Leads
 *       ↓
 * Validate Emails
 *       ↓
 * Generate Personalized Email
 *       ↓
 * Send Through Nodemailer
 *
 * ------------------------------------------------------------------
 */


import {
    importGoogleSheet,
} from "./sheet.service.js";


import {
    prepareLeads,
    filterEmailLeads,
} from "./lead.service.js";


import {
    replaceTemplateVariables,
} from "./template.service.js";


import {
    sendEmail,
} from "./mail.service.js";


import ApiError from "../utils/ApiError.js";

import logger from "../helpers/logger.js";







/**
 * ---------------------------------------------------------
 * Process Campaign
 *
 * Main Automation Function
 *
 * ---------------------------------------------------------
 */

export const processCampaign = async ({

    sheetUrl,

    range = "Sheet1!A:Z",

    subject,

    template,

}) => {


    try {


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
         * STEP 1
         *
         * Fetch Google Sheet Data
         */

        const sheetResponse =
            await importGoogleSheet({

                url: sheetUrl,

                range,

            });







        const rawLeads =
            sheetResponse.data || [];




        logger.info(
            `Raw leads received: ${rawLeads.length}`
        );









        /**
         * STEP 2
         *
         * Normalize Leads
         *
         * Example:
         *
         * Full Name
         * Email Address
         *
         * becomes:
         *
         * name
         * email
         */

        const normalizedLeads =
            prepareLeads(
                rawLeads
            );









        /**
         * STEP 3
         *
         * Filter valid email leads
         */

        const emailLeads =
            filterEmailLeads(
                normalizedLeads
            );







        const result = {


            totalLeads:

                normalizedLeads.length,


            validEmails:

                emailLeads.length,


            sent:

                0,


            failed:

                0,


            errors: []

        };









        /**
         * STEP 4
         *
         * Send Emails
         */

        for (
            const lead of emailLeads
        ) {


            try {


                /**
                 * Generate Email Content
                 */

                const html =
                    replaceTemplateVariables(

                        template,

                        lead

                    );









                /**
                 * Send Email
                 */

                await sendEmail({

                    to:
                        lead.email,


                    subject,


                    html

                });







                result.sent++;







                /**
                 * SMTP Protection Delay
                 */

                await new Promise(
                    resolve =>
                        setTimeout(
                            resolve,
                            1000
                        )
                );





            }
            catch (error) {


                result.failed++;


                result.errors.push({

                    email:
                        lead.email,


                    reason:
                        error.message

                });



                logger.error(
                    `Failed sending email to ${lead.email}`,
                    error
                );


            }


        }

        logger.success(
            `Campaign completed. Sent: ${result.sent}`
        );





        return result;






    }
    catch (error) {


        logger.error(
            "Campaign processing failed.",
            error
        );



        if (error instanceof ApiError) {

            throw error;

        }



        throw new ApiError(
            500,
            "Unable to process campaign.",
            [
                error.message
            ]
        );

    }


};