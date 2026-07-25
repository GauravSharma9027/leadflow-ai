import {
    create
} from "zustand";



const useDashboardStore = create((set) => ({


    selectedCampaign: null,


    dateFilter: "7days",



    setCampaign: (campaign) => set({

        selectedCampaign: campaign

    }),



    setDateFilter: (filter) => set({

        dateFilter: filter

    })



}));



export default useDashboardStore;