/**
 * ------------------------------------------------------------------
 * File: lead.service.js
 * Location: src/services/lead.service.js
 *
 * Purpose:
 * Process and normalize lead data.
 *
 * Responsibilities:
 * - Convert Google Sheet rows into lead objects
 * - Detect dynamic columns
 * - Extract email and phone
 * - Prepare data for email templates
 * - Validate leads
 *
 * Flow:
 *
 * Google Sheet Rows
 *        |
 *        ↓
 * Lead Service
 *        |
 *        ↓
 * Clean Lead Data
 *
 * ------------------------------------------------------------------
 */


import ApiError from "../utils/ApiError.js";
import logger from "../helpers/logger.js";




/**
 * Normalize key names
 *
 * Example:
 *
 * "Full Name"
 * "full_name"
 * "FULLNAME"
 *
 * becomes:
 *
 * fullname
 *
 */
const normalizeKey = (
    key = ""
) => {

    return key
        .toLowerCase()
        .replace(
            /[\s_-]/g,
            ""
        );

};







/**
 * Find matching column
 *
 * Supports dynamic names:
 *
 * Email
 * Email Address
 * Contact Email
 *
 */
const findColumn = (
    headers = [],
    possibleNames = []
) => {


    const normalizedHeaders =
        headers.map(
            header => ({
                original: header,
                normalized:
                    normalizeKey(header)
            })
        );



    for (
        const name of possibleNames
    ) {

        const found =
            normalizedHeaders.find(
                item =>
                    item.normalized ===
                    normalizeKey(name)
            );


        if (found) {

            return found.original;

        }

    }



    return null;

};








/**
 * Convert rows into JSON
 *
 * Input:
 *
 * [
 * ["Name","Email","Service"],
 * ["Rahul","abc@gmail.com","SEO"]
 * ]
 *
 * Output:
 *
 * [
 * {
 *  Name:"Rahul",
 *  Email:"abc@gmail.com"
 * }
 * ]
 *
 */
export const convertRowsToLeads = (
    rows = []
) => {


    try {


        if (
            !rows ||
            rows.length < 2
        ) {

            throw new ApiError(
                400,
                "No lead data found."
            );

        }



        const headers =
            rows[0];



        const dataRows =
            rows.slice(1);



        return dataRows.map(
            row => {


                const lead = {};



                headers.forEach(
                    (
                        header,
                        index
                    ) => {

                        lead[header] =
                            row[index] || "";

                    }
                );



                return lead;

            }
        );



    }
    catch (error) {


        logger.error(
            "Lead conversion failed.",
            error
        );


        if (error instanceof ApiError) {

            throw error;

        }



        throw new ApiError(
            500,
            "Unable to process leads.",
            [
                error.message
            ]
        );

    }

};









/**
 * Prepare single lead
 *
 * Converts dynamic lead
 * into standard format
 *
 */
export const normalizeLead = (
    lead = {}
) => {


    const headers =
        Object.keys(lead);



    const emailColumn =
        findColumn(
            headers,
            [
                "email",
                "email address",
                "email id",
                "mail"
            ]
        );



    const phoneColumn =
        findColumn(
            headers,
            [
                "phone",
                "mobile",
                "phone number",
                "whatsapp",
                "contact"
            ]
        );



    const nameColumn =
        findColumn(
            headers,
            [
                "name",
                "full name",
                "person name",
                "contact name"
            ]
        );



    const companyColumn =
        findColumn(
            headers,
            [
                "company",
                "business",
                "business name",
                "organization"
            ]
        );



    const serviceColumn =
        findColumn(
            headers,
            [
                "service",
                "requirement",
                "need",
                "category"
            ]
        );




    return {

        raw:
            lead,


        name:
            nameColumn
                ? lead[nameColumn]
                : "",



        email:
            emailColumn
                ? lead[emailColumn]
                : "",



        phone:
            phoneColumn
                ? lead[phoneColumn]
                : "",



        company:
            companyColumn
                ? lead[companyColumn]
                : "",



        service:
            serviceColumn
                ? lead[serviceColumn]
                : ""

    };


};









/**
 * Prepare multiple leads
 */
export const prepareLeads = (
    leads = []
) => {


    return leads.map(
        lead =>
            normalizeLead(lead)
    );

};









/**
 * Filter valid email leads
 */
export const filterEmailLeads = (
    leads = []
) => {


    return leads.filter(
        lead =>
            lead.email &&
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                .test(
                    lead.email
                )
    );

};









/**
 * Lead statistics
 */
export const getLeadStats = (
    leads = []
) => {


    const emailLeads =
        filterEmailLeads(
            leads
        );



    return {

        total:
            leads.length,


        emailAvailable:
            emailLeads.length,


        missingEmail:
            leads.length -
            emailLeads.length

    };

};