/**
 * ------------------------------------------------------------------
 * File: app.js
 * Location: src/app.js
 *
 * Purpose:
 * Main Express Application Configuration
 *
 * Responsibilities:
 * - Configure middlewares
 * - Register API routes
 * - Handle 404 routes
 * - Handle global errors
 *
 * ------------------------------------------------------------------
 */


import express from "express";

import cors from "cors";

import helmet from "helmet";

import morgan from "morgan";

import rateLimit from "express-rate-limit";


// Routes

import sheetRoutes from "./routes/sheet.routes.js";

import mailRoutes from "./routes/mail.routes.js";

import campaignRoutes from "./routes/campaign.routes.js";


// Error Middleware

import errorHandler from "./middleware/error.middleware.js";


// Logger

import logger from "./helpers/logger.js";


// Constants

import {
    RATE_LIMIT,
    MESSAGES
} from "./constants/index.js";




const app = express();





/**
 * ---------------------------------------------------------
 * Security Middleware
 * ---------------------------------------------------------
 */

// Adds security headers
app.use(
    helmet()
);





/**
 * ---------------------------------------------------------
 * CORS Configuration
 * ---------------------------------------------------------
 */

app.use(
    cors({

        origin:
            process.env.CLIENT_URL ||
            "http://localhost:5173",

        credentials: true,

    })
);






/**
 * ---------------------------------------------------------
 * Body Parser
 * ---------------------------------------------------------
 */

app.use(
    express.json({
        limit: "10mb"
    })
);


app.use(
    express.urlencoded({
        extended: true
    })
);







/**
 * ---------------------------------------------------------
 * HTTP Request Logger
 * ---------------------------------------------------------
 */

app.use(
    morgan("dev")
);







/**
 * ---------------------------------------------------------
 * API Rate Limiter
 * ---------------------------------------------------------
 *
 * Protects APIs from unwanted abuse.
 *
 * ---------------------------------------------------------
 */

const limiter =
    rateLimit({

        windowMs:
            RATE_LIMIT.WINDOW_MS,

        max:
            RATE_LIMIT.MAX_REQUESTS,

        standardHeaders: true,

        legacyHeaders: false,


        message: {

            success: false,

            message:
                "Too many requests. Please try again later."

        }

    });


app.use(
    "/api",
    limiter
);








/**
 * ---------------------------------------------------------
 * Health Check
 * ---------------------------------------------------------
 */

app.get(
    "/",
    (req, res) => {


        res.status(200).json({

            success: true,

            message:
                MESSAGES.SERVER_RUNNING

        });


    }
);








/**
 * ---------------------------------------------------------
 * API Routes
 * ---------------------------------------------------------
 */


app.use(
    "/api/v1/sheets",
    sheetRoutes
);



app.use(
    "/api/v1/mail",
    mailRoutes
);



app.use(
    "/api/v1/campaign",
    campaignRoutes
);








/**
 * ---------------------------------------------------------
 * 404 Handler
 * ---------------------------------------------------------
 */

app.use(
    (req, res) => {

        res.status(404).json({

            success: false,

            message: `Route '${req.originalUrl}' not found.`

        });

    }
);







/**
 * ---------------------------------------------------------
 * Global Error Handler
 *
 * Must be last middleware
 * ---------------------------------------------------------
 */

app.use(
    errorHandler
);







/**
 * ---------------------------------------------------------
 * App Loaded Log
 * ---------------------------------------------------------
 */

logger.success(
    "Express application configured successfully."
);





export default app;