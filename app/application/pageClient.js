'use client';

import React, { useEffect } from 'react';
import FirstComponent from "@/components/dashboard/first-comp";
import SecondComponent from "@/components/dashboard/second-comp";
import ThirdComponent from "@/components/dashboard/third-comp";
import FourthComponent from "@/components/dashboard/fourth-comp";

const PageClient = ({name, image, email}) => {

    useEffect(()=>{
        localStorage.setItem('userName', name);
        localStorage.setItem('image', image);
        localStorage.setItem('currencyId', 1);
        localStorage.setItem('gmail', email);
    },[])

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
                        <SecondComponent />
                    </div>
                </div>
                <div className="h-[80lvh] px-4 pt-0">
                    <ThirdComponent />
                </div>
                <div className="md:h-[70lvh] p-4 pt-0 flex flex-col md:flex-row gap-4">
                    <FourthComponent />
                </div>
            </div>
        </>
    )
}

export default PageClient