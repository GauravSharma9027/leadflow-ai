/**
 * ------------------------------------------------------------------
 * File: logger.js
 * Location: src/helpers/logger.js
 *
 * Purpose:
 * Centralized application logger.
 *
 * Why?
 * - Avoid direct console.log() usage.
 * - Easy migration to Winston/Pino later.
 * - Consistent log formatting.
 * - Environment-aware logging.
 *
 * NOTE:
 * Currently uses console internally.
 * In production we'll replace its implementation,
 * not its usage.
 * ------------------------------------------------------------------
 */

const isDevelopment = process.env.NODE_ENV === "development";

/**
 * Returns current timestamp.
 */
const getTimestamp = () => {
    return new Date().toISOString();
};

/**
 * Formats log message.
 */
const formatMessage = (level, message) => {
    return `[${getTimestamp()}] [${level}] ${message}`;
};

const logger = {
    /**
     * General Information
     */
    info(message, ...meta) {
        console.log(formatMessage("INFO", message), ...meta);
    },

    /**
     * Success Logs
     */
    success(message, ...meta) {
        console.log(formatMessage("SUCCESS", message), ...meta);
    },

    /**
     * Warning Logs
     */
    warn(message, ...meta) {
        console.warn(formatMessage("WARN", message), ...meta);
    },

    /**
     * Error Logs
     */
    error(message, error = null) {
        console.error(formatMessage("ERROR", message));

        if (error) {
            console.error(error);
        }
    },

    /**
     * Debug Logs
     * Visible only in development.
     */
    debug(message, ...meta) {
        if (!isDevelopment) return;

        console.log(formatMessage("DEBUG", message), ...meta);
    },
};

export default Object.freeze(logger);