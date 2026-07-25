/**
 * ------------------------------------------------------------------
 * File: ApiError.js
 * Location: src/utils/ApiError.js
 *
 * Purpose:
 * Custom API Error Class
 *
 * Why?
 * Instead of throwing normal JavaScript errors, we'll throw
 * ApiError throughout the application.
 *
 * Example:
 *
 * throw new ApiError(404, "User not found");
 *
 * throw new ApiError(400, "Email is required");
 *
 * ------------------------------------------------------------------
 */

class ApiError extends Error {
    constructor(
        statusCode = 500,
        message = "Internal Server Error",
        errors = [],
        stack = ""
    ) {
        super(message);

        this.name = "ApiError";

        this.statusCode = statusCode;

        this.success = false;

        this.message = message;

        this.errors = errors;

        /**
         * Indicates whether this error is expected
         * or an unexpected server error.
         */
        this.isOperational = true;

        /**
         * Capture proper stack trace
         */
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }

    /**
     * Convert Error Object into JSON
     */
    toJSON() {
        return {
            success: this.success,
            statusCode: this.statusCode,
            message: this.message,
            errors: this.errors,
        };
    }
}

export default ApiError;