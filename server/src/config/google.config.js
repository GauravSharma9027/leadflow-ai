/**
 * ------------------------------------------------------------------
 * File: google.config.js
 * Location: src/config/google.config.js
 *
 * Purpose:
 * Configure Google Authentication for Google APIs.
 *
 * Responsibilities:
 * - Create Google Auth Client
 * - Export authenticated client
 *
 * NOTE:
 * This file DOES NOT read Google Sheets.
 * It only creates the authentication client.
 * ------------------------------------------------------------------
 */

import { google } from "googleapis";
import logger from "../helpers/logger.js";

/**
 * Required Environment Variables
 */
const requiredVariables = [
    "GOOGLE_PROJECT_ID",
    "GOOGLE_CLIENT_EMAIL",
    "GOOGLE_PRIVATE_KEY",
];

const missingVariables = requiredVariables.filter(
    (key) => !process.env[key]
);

/**
 * Warn if configuration is incomplete.
 * Backend will still start.
 */
if (missingVariables.length > 0) {
    logger.warn(
        `Google API configuration is incomplete. Missing: ${missingVariables.join(
            ", "
        )}`
    );
}

/**
 * Create Google Auth Client
 */
const auth = new google.auth.GoogleAuth({
    credentials: {
        project_id: process.env.GOOGLE_PROJECT_ID,

        client_email: process.env.GOOGLE_CLIENT_EMAIL,

        /**
         * Replace escaped newlines.
         * Required when storing private key inside .env
         */
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },

    scopes: [
        "https://www.googleapis.com/auth/spreadsheets.readonly",
    ],
});

/**
 * Export Auth Client
 */
export default auth;