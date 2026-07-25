/**
 * ------------------------------------------------------------------
 * File: index.js
 * Location: src/constants/index.js
 *
 * Purpose:
 * Centralized application constants.
 *
 * NOTE:
 * Avoid hardcoding values throughout the project.
 * Import constants from here whenever possible.
 * ------------------------------------------------------------------
 */

/**
 * ---------------------------------------------------------
 * Application
 * ---------------------------------------------------------
 */
export const APP_NAME = "Lead Automation";

export const API_VERSION = "v1";

export const API_PREFIX = `/api/${API_VERSION}`;

/**
 * ---------------------------------------------------------
 * Campaign Status
 * ---------------------------------------------------------
 */
export const CAMPAIGN_STATUS = Object.freeze({
    DRAFT: "draft",
    RUNNING: "running",
    PAUSED: "paused",
    COMPLETED: "completed",
    FAILED: "failed",
});

/**
 * ---------------------------------------------------------
 * Mail Status
 * ---------------------------------------------------------
 */
export const MAIL_STATUS = Object.freeze({
    PENDING: "pending",
    SENT: "sent",
    FAILED: "failed",
});

/**
 * ---------------------------------------------------------
 * Supported Template Variables
 * (Initial Version)
 * ---------------------------------------------------------
 */
export const TEMPLATE_VARIABLES = Object.freeze([
    "name",
    "email",
    "phone",
    "company",
    "website",
    "address",
    "city",
    "state",
]);

/**
 * ---------------------------------------------------------
 * HTTP Status Codes
 * ---------------------------------------------------------
 */
export const HTTP_STATUS = Object.freeze({
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500,
});

/**
 * ---------------------------------------------------------
 * Default Messages
 * ---------------------------------------------------------
 */
export const MESSAGES = Object.freeze({
    SERVER_RUNNING: "Lead Automation Backend Running 🚀",

    INTERNAL_SERVER_ERROR: "Internal Server Error",

    ROUTE_NOT_FOUND: "Requested route not found.",

    MAIL_SENT: "Mail sent successfully.",

    TEST_MAIL_SENT: "Test mail sent successfully.",

    SHEET_IMPORTED: "Google Sheet imported successfully.",
});

/**
 * ---------------------------------------------------------
 * Mail Configuration
 * ---------------------------------------------------------
 */
export const MAIL_DEFAULTS = Object.freeze({
    PORT: 587,
    SECURE_PORT: 465,
});

/**
 * ---------------------------------------------------------
 * Rate Limiter
 * ---------------------------------------------------------
 */
export const RATE_LIMIT = Object.freeze({
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    MAX_REQUESTS: 500,
});

/**
 * ---------------------------------------------------------
 * Default Export
 * ---------------------------------------------------------
 */
const constants = Object.freeze({
    APP_NAME,
    API_VERSION,
    API_PREFIX,
    CAMPAIGN_STATUS,
    MAIL_STATUS,
    TEMPLATE_VARIABLES,
    HTTP_STATUS,
    MESSAGES,
    MAIL_DEFAULTS,
    RATE_LIMIT,
});

export default constants;