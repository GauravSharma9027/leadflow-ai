/**
 * ------------------------------------------------------------------
 * File: template.service.js
 *
 * Purpose:
 * Dynamic email template processing.
 *
 * Supports:
 * - Google Sheet dynamic columns
 * - Variable replacement
 * - Missing field detection
 * - Template validation
 *
 * Example:
 *
 * Hello {{name}}
 *
 * becomes:
 *
 * Hello John
 *
 * ------------------------------------------------------------------
 */


import ApiError from "../utils/ApiError.js";
import logger from "../helpers/logger.js";



/**
 * Normalize object keys
 *
 * Example:
 *
 * First Name
 * first_name
 * firstname
 *
 * all become:
 *
 * firstname
 *
 */
const normalizeKey = (key = "") => {

    return key
        .toLowerCase()
        .replace(
            /[\s_-]/g,
            ""
        );

};





/**
 * Convert lead object
 * into normalized object
 */
const normalizeData = (
    data = {}
) => {


    const normalized = {};


    Object.keys(data)
        .forEach(
            key => {

                normalized[
                    normalizeKey(key)
                ] = data[key];

            }
        );


    return normalized;

};







/**
 * Replace Template Variables
 *
 * {{name}}
 * {{company}}
 * {{service}}
 */
export const replaceTemplateVariables = (
    template,
    data = {}
) => {


    try {


        if (!template) {

            throw new ApiError(
                400,
                "Template content is required."
            );

        }



        const normalizedData =
            normalizeData(data);



        return template.replace(
            /{{\s*([^}]+)\s*}}/g,
            (
                match,
                key
            ) => {


                const value =
                    normalizedData[
                    normalizeKey(key)
                    ];


                return value ?? "";

            }
        );



    }
    catch (error) {


        logger.error(
            "Template replacement failed.",
            error
        );


        if (error instanceof ApiError) {

            throw error;

        }



        throw new ApiError(
            500,
            "Unable to process template.",
            [
                error.message
            ]
        );


    }

};







/**
 * Extract variables
 *
 * Input:
 *
 * Hello {{name}} {{service}}
 *
 * Output:
 *
 * [
 * "name",
 * "service"
 * ]
 */
export const extractTemplateVariables = (
    template
) => {


    if (!template) {

        return [];

    }



    const variables = [];



    const regex =
        /{{\s*([^}]+)\s*}}/g;



    let match;



    while (
        (match = regex.exec(template))
        !== null
    ) {

        variables.push(
            match[1].trim()
        );

    }



    return [
        ...new Set(variables)
    ];

};







/**
 * Validate Template Data
 *
 * Before sending email
 */
export const validateTemplateData = (
    template,
    data = {}
) => {


    const variables =
        extractTemplateVariables(
            template
        );



    const normalizedData =
        normalizeData(data);



    const missingVariables =
        variables.filter(
            variable =>
                !normalizedData[
                normalizeKey(variable)
                ]
        );



    return {


        isValid:
            missingVariables.length === 0,


        missingVariables


    };


};
