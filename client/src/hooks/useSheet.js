import {
    useMutation
} from "@tanstack/react-query";


import {

    importSheet,

    previewSheet,

    getSheetColumns

} from "../services/api/sheet.api";





export const useImportSheet = () => {


    return useMutation({

        mutationFn:
            importSheet


    });


};





export const usePreviewSheet = () => {


    return useMutation({

        mutationFn:
            previewSheet


    });


};





export const useSheetColumns = () => {


    return useMutation({

        mutationFn:
            getSheetColumns


    });


};