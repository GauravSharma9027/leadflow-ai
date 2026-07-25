/**
 * ------------------------------------------------------------------
 * File: sheet.routes.js
 * Location: src/routes/sheet.routes.js
 *
 * Purpose:
 * Google Sheet related routes.
 *
 * Responsibilities:
 * - Import Google Sheet
 * - Preview Sheet Data
 * - Get Sheet Columns
 *
 * NOTE:
 * Business logic should NEVER be written here.
 * ------------------------------------------------------------------
 */

import { Router } from "express";

import {
    healthCheck,
    importSheet,
    previewSheet,
    fetchSheetColumns,
} from "../controllers/sheet.controller.js";

const router = Router();

/**
 * ---------------------------------------------------------
 * Health Check
 * GET /api/v1/sheets/health
 * ---------------------------------------------------------
 */
router.get("/health", healthCheck);

/**
 * ---------------------------------------------------------
 * Import Google Sheet
 * POST /api/v1/sheets/import
 * ---------------------------------------------------------
 */
router.post("/import", importSheet);

/**
 * ---------------------------------------------------------
 * Preview Sheet Data
 * POST /api/v1/sheets/preview
 * ---------------------------------------------------------
 */
router.post("/preview", previewSheet);

/**
 * ---------------------------------------------------------
 * Get Available Columns
 * POST /api/v1/sheets/columns
 * ---------------------------------------------------------
 */
router.post("/columns", fetchSheetColumns);

export default router;