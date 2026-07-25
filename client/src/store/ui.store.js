import {
    create
} from "zustand";



const useUIStore = create((set) => ({


    sidebarOpen: true,


    mobileMenu: false,



    toggleSidebar: () => set((state) => ({

        sidebarOpen:
            !state.sidebarOpen

    })),



    toggleMobileMenu: () => set((state) => ({

        mobileMenu:
            !state.mobileMenu

    }))



}));



export default useUIStore;