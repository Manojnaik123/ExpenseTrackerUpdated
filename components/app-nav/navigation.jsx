'use client';
import { useState } from "react";
import SideNavBar from "./side-nav";
import TopNavBar from "./top-nav";

import { LanguageProvider } from "@/app/application/context/LanguageContext";
import { useTheme } from "@/app/application/context/ThemeContext";
import { useMediaQuery } from "@/mediaMatch";

const Navigation = ({ children }) => {
    const isSmallScreen = useMediaQuery('(max-width: 1024px)');
    const initialVal = !isSmallScreen;
    const { isDark } = useTheme();
    const [sideBarOpen, setSideBarOpen] = useState(initialVal);

    function toggleSidebar() {
        setSideBarOpen(prev => !prev);
    }

    return (
        <div className={`${isDark? 'dark': undefined} flex flex-col grow`}>
            <LanguageProvider>
                    <TopNavBar sideBarToggle={toggleSidebar} sideBarOpen={sideBarOpen}></TopNavBar>
                    <div className="h-full w-full grow">
                        <SideNavBar sideBarOpen={sideBarOpen} setSideBar={setSideBarOpen}></SideNavBar>
                        <div className={`${sideBarOpen ? 'md:ml-72' : 'md:ml-20'} pt-16 h-full`}>
                            {children}
                        </div>
                    </div>
            </LanguageProvider>
        </div>
    );
}

export default Navigation;