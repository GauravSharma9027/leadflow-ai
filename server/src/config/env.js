/**
 * ---------------------------------------------------------
 * File: env.js
 * Location: src/config/env.js
 *
 * Purpose:
 * Validate and export environment variables.
 *
 * NOTE:
 * dotenv is loaded inside server.js before app initialization.
 * This file should NEVER call dotenv.config() again.
 * ---------------------------------------------------------
 */

/**
 * Required Environment Variables
 */
const requiredEnvVariables = [
    "PORT",
    "NODE_ENV",
    "CLIENT_URL",
];

/**
 * Validate Missing Environment Variables
 */
const missingVariables = requiredEnvVariables.filter(
    (key) => !process.env[key]
);

if (missingVariables.length > 0) {
    console.error("\n❌ Missing Environment Variables\n");
    missingVariables.forEach((key) => {
        console.error(`• ${key}`);
    });

    console.error("\nPlease check your .env file.\n");

    process.exit(1);
}

/**
 * Export Environment Variables
 */
const env = {
    PORT: Number(process.env.PORT),
    NODE_ENV: process.env.NODE_ENV,
    CLIENT_URL: process.env.CLIENT_URL,

    // Mail Configuration (Future)
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,

    // Google Sheets (Future)
    GOOGLE_PROJECT_ID: process.env.GOOGLE_PROJECT_ID,
    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
};

export default Object.freeze(env);