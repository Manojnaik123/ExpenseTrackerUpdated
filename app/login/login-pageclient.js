'use client';
import React, { useEffect } from 'react';
import LoginForm from '@/components/login-form';
import { LoginPageProvider } from '../application/context/LoginPageContext';


const LoginPageClient = () => {

    var theme;

    useEffect(() => {
        const theme = localStorage.getItem('themeMode');

        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

    }, [])

    return (
        // changes made here removed h-screen
        <div className={`w-full h-full p-4 flex justify-center items-center 
            bg-light-background dark:bg-dark-background/99 `}>
            <div className='max-w-lg w-full rounded-md flex flex-col justify-center p-10
            shadow-md shadow-black/20 dark:shadow-white/10
                bg-light-surface-background dark:bg-dark-surface-background'>
                <LoginPageProvider>
                    <LoginForm />
                </LoginPageProvider>

            </div>
        </div>
    )
}

export default LoginPageClient