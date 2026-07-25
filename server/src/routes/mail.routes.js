/**
 * ------------------------------------------------------------------
 * File: mail.routes.js
 * Location: src/routes/mail.routes.js
 *
 * Purpose:
 * Email related routes.
 *
 * Responsibilities:
 * - Health Check
 * - Send Test Mail
 * - Send Campaign
 * - Validate SMTP
 *
 * NOTE:
 * Business logic should NEVER be written here.
 * ------------------------------------------------------------------
 */

import { Router } from "express";

import {
    healthCheck,
    validateSMTP,
    sendTestMail,
    sendCampaign,
} from "../controllers/mail.controller.js";

const router = Router();

/**
 * ------------------------------------------------------------------
 * @route   GET /api/v1/mail/health
 * @desc    Mail Module Health Check
 * @access  Public
 * ------------------------------------------------------------------
 */
router.get("/health", healthCheck);

/**
 * ------------------------------------------------------------------
 * @route   POST /api/v1/mail/validate-smtp
 * @desc    Validate SMTP Credentials
 * @access  Public
 * ------------------------------------------------------------------
 */
router.post("/validate-smtp", validateSMTP);

/**
 * ------------------------------------------------------------------
 * @route   POST /api/v1/mail/test
 * @desc    Send Test Email
 * @access  Public
 * ------------------------------------------------------------------
 */
router.post("/test", sendTestMail);

/**
 * ------------------------------------------------------------------
 * @route   POST /api/v1/mail/send
 * @desc    Send Campaign Emails
 * @access  Public
 * ------------------------------------------------------------------
 */
router.post("/send", sendCampaign);

export default router;