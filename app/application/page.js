'use client';

import { useState } from "react";
import FirstComponent from "@/components/dashboard/first-comp";
import SecondComponent from "@/components/dashboard/second-comp";
import ThirdComponent from "@/components/dashboard/third-comp";
import FourthComponent from "@/components/dashboard/fourth-comp";

export default function Home() {

  const [isDark, setIsDark] = useState(false);


  return (
    <>
      <div className="w-full flex flex-col gap-4
      bg-light-surface-background  dark:bg-dark-surface-background">
        {/* <div className="h-[calc(100lvh-64px)] w-full flex flex-col grow px-4">
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
        <div className="h-[70lvh] p-4 pt-0 flex gap-4">
          <FourthComponent />
        </div> */}
      </div>
    </>
  );
}
