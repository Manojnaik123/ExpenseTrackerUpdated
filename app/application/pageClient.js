'use client';

import React, { useEffect, useState } from 'react';
import FirstComponent from "@/components/dashboard/first-comp";
import SecondComponent from "@/components/dashboard/second-comp";
import ThirdComponent from "@/components/dashboard/third-comp";
import FourthComponent from "@/components/dashboard/fourth-comp";
import { useLanguage } from './context/LanguageContext';

export async function fetchingLogic(lanId, setData) {
    const fetchData = async () => {
        try {
            const params = new URLSearchParams({
                lanId: lanId,
            });
            const res = await fetch(`/api/dashboard?${params.toString()}`);
            if (!res.ok) throw new Error("Failed to fetch");
            const json = await res.json();
            setData(json);
        } catch (err) {
            console.error(err);
        }
    };
    fetchData();
}

const PageClient = ({ name, image, email }) => {
    const [data, setData] = useState();

    const { nav, lan } = useLanguage();

    useEffect(() => {
        localStorage.setItem('userName', name);
        localStorage.setItem('image', image);
        localStorage.setItem('currencyId', 1);
        localStorage.setItem('gmail', email);
        fetchingLogic(lan, setData);
    }, [])    

    return (
        <>
            <div className="w-full flex flex-col gap-4 pb-18 md:pb-0
                bg-light-surface-background  dark:bg-dark-surface-background">
                {/* <div className="h-[calc(100lvh-64px)] w-full flex flex-col grow px-4"> */}
                <div className="w-full flex flex-col grow px-4
                         md:h-[calc(100lvh-64px)]">
                    <div className="shrink-0">
                        <FirstComponent />
                    </div>

                    <div className="flex-1 min-h-0">
                        <SecondComponent transactions={data?.transactions} />
                    </div>
                </div>
                <div className="h-[80lvh] px-4 pt-0">
                    <ThirdComponent transactions={data?.transactions} />
                </div>
                <div className="md:h-[70lvh] p-4 pt-0 flex flex-col md:flex-row gap-4">
                    <FourthComponent goals={data?.goals} savings={data?.savings}/>
                </div>
            </div>
        </>
    )
}

export default PageClient