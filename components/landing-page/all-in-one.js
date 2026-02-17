import React from 'react';
import { advantages, rightArrowLine, rightArrowLineSmall } from "@/lib/icons";


const AllInOne = () => {
    return (
        <>
            <section className="px-18 flex flex-col mt-15 max-w-7xl m-auto">
                <span className="text-primary-accent font-semibold flex items-center gap-2">{advantages} All-in-one Personal Finance Control</span>
                <h1 className="text-4xl text-light-primary-text pt-4 font-semibold">Take control of your money with smart insights</h1>
                <h1 className="text-4xl text-light-primary-text pb-4 font-semibold">and disciplined tracking.</h1>
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-sm text-light-muted-text">Track every expense, plan budgets, build savings goals, and watch your financial growth —</p>
                        <p className="text-sm text-light-muted-text" >all in one powerful dashboard.</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="rounded-md px-4 py-1 text-white bg-primary-accent hover:bg-accent-hover">
                            Get Started Free
                        </button>
                        <button className="flex px-4 py-1 shadw-md rounded-md text-light-secondary-text border border-light-border
                            hover:bg-hover-gray/30">
                            See how it works
                            <span className="pt-1.5">
                                {rightArrowLineSmall}
                            </span>
                        </button>
                    </div>
                </div>
                <div className="bg-[#f8f9fa] mt-10 grid grid-cols-2 grid-rows-2 border border-light-muted-text/50 rounded-2xl">
                    <div className="p-6 flex flex-col">
                        <span className="text-2xl font-semibold text-light-primary-text">
                            Spending Growth
                        </span>
                        <span className='text-light-secondary-text text-sm pt-2 font-semibold'>
                            See where your money is going
                        </span>
                        <p className="text-sm text-light-muted-text mt-2 w-9/10">
                            Visualize your spending trends across days, weeks, or months. Identify patterns, control overspending, and make smarter financial decisions.
                        </p>
                        <div className="relative mt-6">
                            <img
                                src="/images/saving-graph.jpeg"
                                alt="dashboard"
                                className="rounded-t-2xl w-full h-70 shadow-[0_-8px_12px_-6px_rgba(0,0,0,0.15)]"
                            />

                            {/* Fade Layer */}
                            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#f8f9fa] to-transparent rounded-t-2xl"></div>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col">
                        <span className="text-2xl font-semibold text-light-primary-text">
                            Smart Transactions
                        </span>
                         <span className='text-light-secondary-text text-sm pt-2 font-semibold'>
                            Edit, organize, and control every transaction
                        </span>
                        <p className="text-sm text-light-muted-text mt-2 w-9/10">
                            Add, update, or categorize transactions instantly. Keep your records clean and accurate with full editing control.
                        </p>
                        <div className="relative mt-6">
                            <img
                                src="/images/transaction.jpeg"
                                alt="dashboard"
                                className="rounded-t-2xl w-full h-70 shadow-[0_-8px_12px_-6px_rgba(0,0,0,0.15)]"
                            />

                            {/* Fade Layer */}
                            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#f8f9fa] to-transparent rounded-t-2xl"></div>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col">
                        <span className="text-2xl font-semibold text-light-primary-text">
                            Budget Tracker
                        </span>
                         <span className='text-light-secondary-text text-sm pt-2 font-semibold'>
                            Stay within budget, effortlessly
                        </span>
                        <p className="text-sm text-light-muted-text mt-2 w-9/10">
                            Set category-wise budgets and monitor them in real time. Get clear insights into what you’ve used, what’s left, and where you need to adjust.                        </p>
                        <div className="relative mt-6">
                            <img
                                src="/images/saving-graph.jpeg"
                                alt="dashboard"
                                className="rounded-t-2xl w-full h-70 shadow-[0_-8px_12px_-6px_rgba(0,0,0,0.15)]"
                            />

                            {/* Fade Layer */}
                            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#f8f9fa] to-transparent rounded-t-2xl"></div>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col">
                        <span className="text-2xl font-semibold text-light-primary-text">
                            Growth Insights
                        </span>
                         <span className='text-light-secondary-text text-sm pt-2 font-semibold'>
                            Understand your financial growth
                        </span>
                        <p className="text-sm text-light-muted-text mt-2 w-9/10">
                            Track your net savings over time and gain powerful insights into how your financial habits are improving month after month.
                        </p>
                        <div className="relative mt-6">
                            <img
                                src="/images/transaction.jpeg"
                                alt="dashboard"
                                className="rounded-t-2xl w-full h-70 shadow-[0_-8px_12px_-6px_rgba(0,0,0,0.15)]"
                            />

                            {/* Fade Layer */}
                            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#f8f9fa] to-transparent rounded-t-2xl"></div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default AllInOne