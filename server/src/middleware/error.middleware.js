/**
 * ------------------------------------------------------------------
 * File: error.middleware.js
 * Location: src/middleware/error.middleware.js
 *
 * Purpose:
 * Global Error Handling Middleware
 *
 * Responsibilities:
 * - Handle ApiError
 * - Handle Validation Errors
 * - Handle Unknown Errors
 * - Hide stack trace in production
 * - Return standard error response
 *
 * NOTE:
 * This middleware must always be the LAST middleware
 * registered inside app.js
 * ------------------------------------------------------------------
 */

import ApiError from "../utils/ApiError.js";

const errorHandler = (err, req, res, next) => {
    // Default Error Values
    let error = err;

    /**
     * Convert normal Error into ApiError
     */
    if (!(error instanceof ApiError)) {
        error = new ApiError(
            error.statusCode || 500,
            error.message || "Internal Server Error"
        );
    }

    /**
     * Log Error
     * Later we'll replace console.error with Winston/Pino logger.
     */
    console.error("\n========================================");
    console.error("❌ ERROR OCCURRED");
    console.error("Time :", new Date().toISOString());
    console.error("URL  :", req.originalUrl);
    console.error("Method:", req.method);
    console.error(error);
    console.error("========================================\n");

    /**
     * Error Response
     */
    const response = {
        success: false,
        statusCode: error.statusCode,
        message: error.message,
        errors: error.errors || null,
    };

    /**
     * Show stack only in development
     */
    if (process.env.NODE_ENV === "development") {
        response.stack = error.stack;
    }

    return res.status(error.statusCode).json(response);
};

export default errorHandler;