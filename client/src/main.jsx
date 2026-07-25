import React from "react";

import ReactDOM from "react-dom/client";


import {
  BrowserRouter
} from "react-router-dom";


import AppRoutes from "./routes/AppRoutes";


import AppProvider from "./providers/AppProvider";


import "./styles/globals.css";
import "./styles/glass.css";
import "./styles/animations.css";




ReactDOM.createRoot(

  document.getElementById("root")

)

  .render(

    <React.StrictMode>


      <AppProvider>


        <BrowserRouter>


          <AppRoutes />


        </BrowserRouter>


      </AppProvider>


    </React.StrictMode>

  );