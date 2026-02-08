'use client';
import { useEffect, useState } from "react";
import SideNavBar from "./side-nav";
import TopNavBar from "./top-nav";

import { LanguageProvider, useLanguage } from "@/app/application/context/LanguageContext";
import { useTheme } from "@/app/application/context/ThemeContext";
import { useMediaQuery } from "@/mediaMatch";
import MobileBottomNav from "./mobile-bottom-nav";
import MobileAddButton from "./mobile-add-button";
import MobileDropDown from "./mobile-drop-dowm";

const Navigation = ({ children }) => {
    const isSmallScreen = useMediaQuery('(max-width: 1024px)');
    const initialVal = !isSmallScreen;
    const { isDark } = useTheme();
    const { setLan } = useLanguage();
    const [sideBarOpen, setSideBarOpen] = useState(initialVal);
    const [ready, setReady] = useState(false); // 👈 gate

    function toggleSidebar() {
        setSideBarOpen(prev => !prev);
    }

    useEffect(() => {
        const lanId = localStorage.getItem('languageId');

        if (!lanId) {
            setLan(1);
        } else {
            setLan(lanId);
        }
        
        setReady(true);
    }, [])

    if (!ready) {
        return null;
    }

    return (
        <div className={`${isDark ? 'dark' : undefined} flex flex-col grow `}>
            <TopNavBar sideBarToggle={toggleSidebar} sideBarOpen={sideBarOpen}></TopNavBar>
            <div className="h-full w-full grow">
                <SideNavBar sideBarOpen={sideBarOpen} setSideBar={setSideBarOpen}></SideNavBar>
                <div className={`${sideBarOpen ? 'md:ml-60' : 'md:ml-20'} pt-16 h-full`}>
                    {children}
                </div>
            </div>
            
            <MobileAddButton/>
            <MobileBottomNav/>
        </div>
    );
}

export default Navigation;