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
        project_id: process.env.GOOGLE_PROJECT_ID || "lead-automation-503419",

        client_email: process.env.GOOGLE_CLIENT_EMAIL || "lead-automation-service@lead-automation-503419.iam.gserviceaccount.com",

        /**
         * Replace escaped newlines.
         * Required when storing private key inside .env
         */
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n") || `-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCbGlD1R3uJ8x8T\nY7/oGEHu+ZjPZxCaLneKpfNttwMxf94Nr1P43Wx7lXJT5HAVXLlvl/Cg/rwKfH2J\nZI9zNdExHzwK9cqRnjppY1wlmcFjrIT1OLFgLxZTQMFo7NGyjJAZ4Fiy9layDbUT\njKDpMqL5akR3cnzjbDKkxw1yHtodsdCekMPNgcec/omB0l7K5CoxUyqQpwI5jABU\ni/6RFQ+jiIpmE0yMcRd+4PgnuDobATXa7B65NN6tjxLVj8sQUGxyd50zfcUzbcMa\nNY/S3pYtLU8Vq64inTAdGcWRbNjoxSKtwNdGVVN4i5FNV/VhKRueQ3F2n5RABjob\niRchxk3HAgMBAAECggEAFS/4nDD6GsOX3KW1KubZZuQ4sChTl8Q+NzXpNXUZHhNq\nCXOIZIgW0CD/n58mgnyKpkhaqhtyI3qTCYgvolzZKT0rjhG6bL7xGsFkbox84vlH\nplnqvQlhotjHMuaa1Kmn66j+ZOAKwsLll/iPaJuusKSIGssMbWKz3leEqjC1ufWA\naI8pK9Ltm6lsV/ReCWBXbf/09naltumhbmafVmy5b3C3E5lWRjnqqwV52C/BF5e3\nhk4oYm24XyZ6idkbHaxDq9mlCf+3QGF8yAlQXjypetGahOrRBDVIwlpOJBC06hFN\nUXaYXAP3HnPicQ8Ef8Jk7etldyrmD9KMsX6mk77jfQKBgQDJ3VBHQ3OhQGoYmXPX\nPKmMfnt/BA32yy+atN69U5YrD9gzfKeB0hbmFVue26vQQEJaQYMxpPKDa2YttBuT\nIiKr4nLA8LOaDXb9QvHbJt4AcqIAVpBeTgSIb2MPOJDr0Ib2E+RnOott8sHXZPYy\npebzB/x2enV9r/wnYy9ez4C/nQKBgQDEsqbokrAv+z2GeNsIsxeFT7D3pMz3/7OI\nEOJg0owX+O0pTrj9HHUiA+6GwlDrhkfBOCqGjEkGYHX37DvfUdZE5g2rwlFYkbup\nW/Viwk5JXYVkm2j6jvGWZy5w9tMBRnJg2flwPji6ddiR+dcr7QgebTvNi49LfIFq\nWW6/9ZSvswKBgFxqyjoWE3Ybu3cPqg08ZJNBxOBdxtbaJy046VDcV7/XPTA1Pasd\nuAYWeR+9imeJQ9d2bs3nqm+oV9tMveMamaz/u3HBwTgiOfuxDnE61iB2Wty0xNun\n9ENSW5O4XgDYMzGt4b+w+eyYW051lpGRiq5xVZAYeHnWfCa8Lg/GCDexAoGAfyg7\nDHjf23Tg1lDE0H/ugaj972ojc2NjLWA06IDUPh8XOjABGOfPtTizd3yhEVFSi8+C\ndk60WqH7QVX/cqQWD55lUhchvU8g8SBYpwqTz4vc0yhAmlHUTfXQKQj3aYigIopn\nXa9rvua2JdBM0MHAEONu2LcS4KrRgu3j0cax408CgYBM08aEzJM8Rl9eB62B4eJS\nesXpqhOvpfdmFUx1Oold8EQhbG32Srk3U5QtsrGl9Yv07s8/j0uiuLRxl8i1TUVB\nr/cEDj6YcxCAP25PHnNoynllbaTgkshkqJoLGO3UlqEcMyE5PkKXEsn+ygiJA59F\nmvOGXWLPZJhyIs0HaZ+YGg==\n-----END PRIVATE KEY-----\n`,
    },

    scopes: [
        "https://www.googleapis.com/auth/spreadsheets.readonly",
    ],
});

/**
 * Export Auth Client
 */
export default auth;