'use client';

import { createContext, useContext, useState } from "react";
import { loginPageData } from "@/data";
import { useEffect } from 'react';

const LoginPageContext = createContext(null);

export function LoginPageProvider({ children }) {
    const [lan, setLan] = useState(); // selected language ID

    useEffect(() => {
        const languageId = localStorage.getItem('languageId');

        if (languageId) {
            setLan(Number(languageId))
        } else {
            setLan(1)
        }

    }, [])

    const value = {
        lan: loginPageData[lan],
        setLan  
    };

    return (
        <LoginPageContext.Provider value={value}>
            {children}
        </LoginPageContext.Provider>
    );
}

export function useLoginPageLanguage() {
    return useContext(LoginPageContext);
}
