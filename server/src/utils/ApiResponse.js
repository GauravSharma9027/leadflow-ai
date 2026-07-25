/**
 * ------------------------------------------------------------------
 * File: ApiResponse.js
 * Location: src/utils/ApiResponse.js
 *
 * Purpose:
 * Standardize all successful API responses across the application.
 *
 * Why?
 * Every API should return the same response structure.
 *
 * Example:
 *
 * return res.status(200).json(
 *     new ApiResponse(
 *         200,
 *         data,
 *         "Mail sent successfully"
 *     )
 * );
 *
 * ------------------------------------------------------------------
 */

class ApiResponse {
    constructor(
        statusCode = 200,
        data = null,
        message = "Success"
    ) {
        this.success = statusCode < 400;

        this.statusCode = statusCode;

        this.message = message;

        this.data = data;

        this.timestamp = new Date().toISOString();
    }

    /**
     * Convert instance to JSON
     */
    toJSON() {
        return {
            success: this.success,
            statusCode: this.statusCode,
            message: this.message,
            data: this.data,
            timestamp: this.timestamp,
        };
    }

    /**
     * Helper method for sending response
     */
    send(res) {
        return res.status(this.statusCode).json(this.toJSON());
    }
}

export default ApiResponse;