/**
 * ------------------------------------------------------------------
 * File: mail.config.js
 * Location: src/config/mail.config.js
 *
 * Purpose:
 * Configure and export Nodemailer transporter.
 *
 * Responsibilities:
 * - Validate SMTP configuration
 * - Create reusable transporter
 * - Verify SMTP connection
 *
 * NOTE:
 * Mail sending logic should NEVER be written here.
 * This file only creates and exports the transporter.
 * ------------------------------------------------------------------
 */

import nodemailer from "nodemailer";
import logger from "../helpers/logger.js";

/**
 * Validate SMTP Environment Variables
 */
const requiredVariables = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASS",
];

const missingVariables = requiredVariables.filter(
    (key) => !process.env[key]
);

/**
 * Skip transporter creation if SMTP
 * configuration is incomplete.
 *
 * This allows the backend to start even if
 * email is not configured yet.
 */
if (missingVariables.length > 0) {
    logger.warn(
        `SMTP configuration is incomplete. Missing: ${missingVariables.join(", ")}`
    );
}

/**
 * Create SMTP Transporter
 */
const transporter = nodemailer.createTransport({
    // host: process.env.SMTP_HOST,
    // port: Number(process.env.SMTP_PORT) || 587,

    // secure: Number(process.env.SMTP_PORT) === 465,
    service: "gmail",
    auth: {
        user: process.env.SMTP_USER || "gauravsharma902753@gmail.com",
        pass: process.env.SMTP_PASS || "qtho xlzi kmnh ryme",
    },
});


transporter.verify((error, success) => {
    if (error) {
        logger.error("SMTP verification failed", error);
    } else {
        logger.success("SMTP transporter is ready.");
    }
});


/**
 * Verify SMTP Connection
 *
 * This only runs when all required
 * environment variables exist.
 */
if (missingVariables.length === 0) {
    transporter
        .verify()
        .then(() => {
            logger.success("SMTP server connected successfully.");
        })
        .catch((error) => {
            logger.error("Failed to connect with SMTP server.", error);
        });
}

export default transporter;