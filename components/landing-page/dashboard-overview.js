import React from 'react'
import { flowerTick } from "@/lib/icons";
const DashboardOverView = () => {
    return (
        <>
            <section className="w-full mt-14 pt-7 flex flex-col items-center px-6">
                <span className="flex items-center gap-1 text-sm 
            text-light-secondary-text shadow-md p-2 rounded-full">
                    <span className="text-primary-accent">{flowerTick}</span>
                    Hello! We launched our Finovex!
                </span>
                <h1 className="text-6xl font-semibold mt-5 text-light-primary-text" >
                    The personal finance
                </h1>
                <h1 className="text-6xl font-semibold text-light-primary-text" >
                    app for everyone
                </h1>

                <p className="text-sm mt-5 text-light-muted-text">
                    Maybe is an all-in-one finance platform.
                </p>
                <p className="text-sm text-light-muted-text mt-1 flex gap-1">
                    <span className="bg-hover-gray/50 px-1 rounded-md border border-hover-gray">track</span>,
                    <span className="bg-hover-gray/50 px-1 rounded-md border border-hover-gray">optimize</span>,
                    <span className="bg-hover-gray/50 px-1 rounded-md border border-hover-gray">grow</span>
                    and manage your money through every stage of life.
                </p>
                <div className="mt-7 rounded-2xl bg-gradient-to-t flex justify-center items-end
          from-blue-200/20  to-blue-500/70 w-full max-w-7xl h-[600px]">
                    <img
                        src="/images/dashboard.jpeg"
                        alt="dashboard"
                        className="rounded-t-2xl w-auto h-auto max-w-7/10"
                    />
                </div>
                <div className="flex justify-center items-center py-5 text-sm text-light-muted-text">
                    <p>999+ users have enhanced their finances through Finovex.</p>
                </div>
            </section>
        </>
    )
} 

export default DashboardOverView