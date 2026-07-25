/**
 * ------------------------------------------------------------------
 * File: campaign.routes.js
 * Location: src/routes/campaign.routes.js
 *
 * Purpose:
 * Campaign automation API routes.
 *
 * Responsibilities:
 * - Start email campaigns
 *
 * NOTE:
 * Business logic should never be written here.
 * ------------------------------------------------------------------
 */


import { Router } from "express";


import {
    sendCampaign,
} from "../controllers/campaign.controller.js";



const router = Router();




/**
 * ------------------------------------------------------------------
 * @route   POST /api/v1/campaign/send
 *
 * @description
 * Start email automation campaign.
 *
 * Body:
 *
 * {
 *   sheetUrl:"",
 *   range:"Sheet1",
 *   subject:"",
 *   template:""
 * }
 *
 * ------------------------------------------------------------------
 */
router.post(
    "/send",
    sendCampaign
);




export default router;