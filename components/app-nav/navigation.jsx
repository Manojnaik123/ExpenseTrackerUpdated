'use client';
import { useState } from "react";
import SideNavBar from "./side-nav";
import TopNavBar from "./top-nav";

import { LanguageProvider } from "@/app/application/context/LanguageContext";
import { useTheme } from "@/app/application/context/ThemeContext";
import { useMediaQuery } from "@/mediaMatch";
import { CurrencyProvider } from "@/app/application/context/CurrencyContext";

const Navigation = ({ children }) => {
    const isSmallScreen = useMediaQuery('(max-width: 1024px)');
    const initialVal = !isSmallScreen;
    const { isDark } = useTheme();
    const [sideBarOpen, setSideBarOpen] = useState(initialVal);

    function toggleSidebar() {
        setSideBarOpen(prev => !prev);
    }

    return (
        <div className={`${isDark ? 'dark' : undefined} flex flex-col grow`}>
            <CurrencyProvider>
                <LanguageProvider>
                    <TopNavBar sideBarToggle={toggleSidebar} sideBarOpen={sideBarOpen}></TopNavBar>
                    <div className="h-full w-full grow">
                        <SideNavBar sideBarOpen={sideBarOpen} setSideBar={setSideBarOpen}></SideNavBar>
                        <div className={`${sideBarOpen ? 'md:ml-60' : 'md:ml-20'} pt-16 h-full`}>
                            {children}
                        </div>
                    </div>
                </LanguageProvider>
            </CurrencyProvider>
        </div>
    );
}

export default Navigation;