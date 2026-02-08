'use client';
import React, { useEffect, useState } from 'react';
import CustomInput from './add-components/custom-input';
import Image from 'next/image';
import { warning } from '@/lib/icons';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useLoginPageLanguage } from '@/app/application/context/LoginPageContext';
import { ClipLoader } from 'react-spinners';

export default function LoginForm() {

    const [userName, setUserName] = useState('');

    const { lan, setLan } = useLoginPageLanguage();

    const handleGoogleAuth = async (e) => {
        e.preventDefault(); // prevent page refresh
        console.log('reached');
        
        await signIn('google')
    };

    // var userName = '';

    useEffect(() => {
        const lanId = localStorage.getItem('languageId');
        const user = localStorage.getItem('userName');
        setUserName(user);
        if (lanId) {
            setLan(Number(lanId));
        } else {
            setLan(1);
        }
    }, [])

    if (!lan) return <div className='w-full h-full flex justify-center items-center'><ClipLoader color='gray' size={30} className='' /></div>;

    return (
        <>
            <span className=' text-[13px] font-extralight mb-4 p-2 px-4 w-full bg-red-500/20 text-red-500 border border-red-500 rounded-md flex justify-start items-center gap-2'>
               {warning}   Only google auth available
            </span>
            <form className='flex flex-col gap-2'>

                <div className='w-full flex flex-col justify-center items-center gap-2 pb-2'>
                     <Image src='/images/pngegg.png'
                                                    alt="Logo"
                                                    width={40}
                                                    height={40}
                                                />
                    <h1 className=' flex justify-center items-center md:text-2xl text-light-primary-text dark:text-dark-primary-text'>
                        {userName != null ? lan.welcomeBack+'! ' + userName : lan.welcome+'!'}
                    </h1>
                    <span className='text-[10px] md:text-[12px] text-light-muted-text dark:text-dark-muted-text'>
                        {lan.enterYourEmailAndPasswordToAccessYourAccount}
                    </span>
                </div>

                <CustomInput label={lan.email} />
                <CustomInput label={lan.password} />
                <div className='w-full flex justify-end items-center'>
                    <span className='text-[12px] text-accent-hover'>
                        {lan.forgotPassword}?
                    </span>
                </div>
                <button className='border flex p-2 rounded-md gap-2 justify-center w-full
                bg-accent-hover/90 text-white
                border-light-border dark:border-dark-border
                hover:bg-accent-hover'>
                    {lan.logIn}
                </button>
            </form>

            <div className='flex items-center gap-2 my-2'>
                <hr className='border-t grow border-light-muted-text/50 dark:border-dark-muted-text/50' />
                <span className='text-[12px] text-light-muted-text dark:text-dark-muted-text'>
                    {lan.orLoginWith}
                </span>
                <hr className='border-t grow border-light-muted-text/50 dark:border-dark-muted-text/50' />
            </div>

            {/* <form className='w-full '> */}
            <button className='border w-full flex p-2 rounded-md gap-2 justify-center mt-2
                border-light-border dark:border-dark-border
                text-light-secondary-text dark:text-dark-secondary-text
                hover:bg-hover-gray/30'
                onClick={handleGoogleAuth}
            >
                <Image src='/images/google.webp'
                    alt="Logo"
                    width={25}
                    height={20}
                />
                {lan.signUpWithGoogle}
            </button>
            {/* </form> */}
            <div className='flex justify-center items-center gap-2 text-light-muted-text dark:text-dark-muted-text
            text-sm pt-6'>
                <span>{lan.dontHaveAnAccount}?</span>
                <span className='text-accent-hover underline decoration-accent-hover'>
                    {lan.registerHere}
                </span>
            </div>
        </>
    )
}