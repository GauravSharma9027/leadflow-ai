/**
 * ------------------------------------------------------------------
 * File: server.js
 * Location: src/server.js
 *
 * Purpose:
 * Application Entry Point
 *
 * Responsibilities:
 * - Load environment variables
 * - Start Express server
 * - Handle process errors
 *
 * NOTE:
 * All application configuration exists inside app.js
 * ------------------------------------------------------------------
 */


import dotenv from "dotenv";
// Load Environment Variables

dotenv.config();
import app from "./app.js";

import logger from "./helpers/logger.js";











/**
 * ---------------------------------------------------------
 * Server Configuration
 * ---------------------------------------------------------
 */

const PORT =
    process.env.PORT || 5000;







/**
 * ---------------------------------------------------------
 * Start Server
 * ---------------------------------------------------------
 */

const server =
    app.listen(
        PORT,
        () => {


            logger.success(
                `Server running on port ${PORT}`
            );


            logger.info(
                `Environment: ${process.env.NODE_ENV}`
            );


        }
    );







/**
 * ---------------------------------------------------------
 * Unhandled Promise Rejection
 * ---------------------------------------------------------
 *
 * Example:
 * Database connection failure
 *
 * ---------------------------------------------------------
 */

process.on(
    "unhandledRejection",
    (error) => {


        logger.error(
            "Unhandled Promise Rejection",
            error
        );


        server.close(
            () => {
                process.exit(1);
            }
        );


    }
);







/**
 * ---------------------------------------------------------
 * Uncaught Exception
 * ---------------------------------------------------------
 *
 * Example:
 * Unexpected runtime error
 *
 * ---------------------------------------------------------
 */

process.on(
    "uncaughtException",
    (error) => {


        logger.error(
            "Uncaught Exception",
            error
        );


        process.exit(1);


    }
);







/**
 * ---------------------------------------------------------
 * Graceful Shutdown
 * ---------------------------------------------------------
 *
 * Handles:
 * Ctrl + C
 * Server termination
 *
 * ---------------------------------------------------------
 */

process.on(
    "SIGTERM",
    () => {


        logger.warn(
            "SIGTERM received. Closing server..."
        );


        server.close(
            () => {
                logger.success(
                    "Server closed successfully."
                );


                process.exit(0);

            }
        );


    }
);