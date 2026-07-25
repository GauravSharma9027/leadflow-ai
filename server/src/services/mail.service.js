/**
 * ------------------------------------------------------------------
 * File: mail.service.js
 * Location: src/services/mail.service.js
 *
 * Purpose:
 * Handle all email related business logic.
 *
 * Responsibilities:
 * - Send emails using Nodemailer
 * - Verify SMTP connection
 * - Prepare reusable mail functions
 *
 * NOTE:
 * Controllers should never directly call Nodemailer.
 * All email operations must come through this service.
 * ------------------------------------------------------------------
 */

import transporter from "../config/mail.config.js";

import ApiError from "../utils/ApiError.js";
import logger from "../helpers/logger.js";


/**
 * ---------------------------------------------------------
 * Send Single Email
 *
 * @param {Object} options
 * @param {String} options.to
 * @param {String} options.subject
 * @param {String} options.html
 *
 * ---------------------------------------------------------
 */
export const sendEmail = async ({
    to,
    subject,
    html,
}) => {

    try {

        /**
         * Basic validation
         */
        if (!to) {
            throw new ApiError(
                400,
                "Receiver email is required."
            );
        }


        if (!subject) {
            throw new ApiError(
                400,
                "Email subject is required."
            );
        }


        if (!html) {
            throw new ApiError(
                400,
                "Email content is required."
            );
        }


        /**
         * Nodemailer sendMail()
         */
        const mailResponse = await transporter.sendMail({

            from: `"${process.env.MAIL_FROM_NAME || "Lead Automation"}" <${process.env.SMTP_USER}>`,

            to,

            subject,

            html,

        });


        logger.success(
            `Email sent successfully to ${to}`
        );


        return {

            messageId: mailResponse.messageId,

            accepted: mailResponse.accepted,

            rejected: mailResponse.rejected,

        };


    } catch (error) {


        logger.error(
            `Failed to send email to ${to}`,
            error
        );


        /**
         * If already ApiError,
         * don't wrap again
         */
        if (error instanceof ApiError) {
            throw error;
        }


        throw new ApiError(
            500,
            "Unable to send email.",
            [
                error.message
            ]
        );

    }

};




/**
 * ---------------------------------------------------------
 * Verify SMTP Connection
 *
 * Used before campaign starts.
 *
 * ---------------------------------------------------------
 */
export const verifySMTPConnection = async () => {

    try {

        await transporter.verify();


        logger.success(
            "SMTP connection verified successfully."
        );


        return true;


    } catch (error) {


        logger.error(
            "SMTP verification failed.",
            error
        );


        throw new ApiError(
            500,
            "SMTP connection failed.",
            [
                error.message
            ]
        );

    }

};




/**
 * ---------------------------------------------------------
 * Bulk Email Base Function
 *
 * Future:
 * This will be replaced by Queue Worker.
 *
 * Currently kept separate so architecture
 * does not need to change later.
 *
 * ---------------------------------------------------------
 */
export const sendBulkEmails = async (emails = []) => {


    if (!Array.isArray(emails)) {

        throw new ApiError(
            400,
            "Email list must be an array."
        );

    }


    const results = [];


    for (const email of emails) {

        try {

            const result = await sendEmail(email);

            results.push({
                email: email.to,
                status: "sent",
                result,
            });


        } catch (error) {


            results.push({

                email: email.to,

                status: "failed",

                error: error.message,

            });

        }

    }


    return results;

};