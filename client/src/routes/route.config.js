import Dashboard from "../pages/dashboard/Dashboard";

import Campaigns from "../pages/campaign/Campaigns";

import Leads from "../pages/leads/Leads";

import Analytics from "../pages/analytics/Analytics";

import Templates from "../pages/templates/Templates";

import Settings from "../pages/settings/Settings";
import CreateCampaign from "../pages/campaign/CreateCampaign";




export const privateRoutes = [


    {
        path: "/",
        element: Dashboard,
    },


    {
        path: "/campaigns",
        element: Campaigns,
    },


    {
        path: "/leads",
        element: Leads,
    },


    {
        path: "/analytics",
        element: Analytics,
    },


    {
        path: "/templates",
        element: Templates,
    },


    {
        path: "/settings",
        element: Settings,
    },

    {
        path: "/campaign/create",
        element: CreateCampaign
    }

];





export const publicRoutes = [

];