import React from 'react';
import { advantages, analytics, budget, goals, history, overview, tracking, wallet } from "@/lib/icons";

const AdvantageSection = () => {
    return (
        <section className="px-18 flex flex-col mt-15 max-w-7xl m-auto">
            <span className="text-primary-accent font-semibold flex items-center gap-2">{advantages} Key Advantages</span>
            <h1 className="text-4xl font-semibold text-light-primary-text py-4">Smarter insights, better money choices.</h1>
            <p className="text-sm text-light-muted-text">Finovex helps you see beyond numbers - turning everyday transactions</p>
            <p className="text-sm text-light-muted-text" >into meaningful insights that guide your financial journey.</p>
            <div className=" mt-4 grid grid-cols-3 grid-rows-2 rounded-2xl border border-light-muted-text/50
              bg-hover-gray/30 ">
                <div className="p-6 border-b border-r border-light-muted-text/50">
                    <div className="pb-4">
                        <button className="bg-gradient-to-r from-blue-200  to-blue-400 rounded-2xl p-3
                  text-white">
                            {tracking}
                        </button>
                    </div>
                    <span className="text-2xl font-semibold text-light-primary-text">
                        Smart Expense Tracking
                    </span>
                    <p className="text-sm text-light-muted-text pt-2">
                        Automatically organize and categorize your transactions so you always know where your money is going — without manual effort.
                    </p>
                </div>

                <div className="p-6 border-b border-r border-light-muted-text/50">
                    <div className="pb-4">
                        <button className="bg-gradient-to-r from-blue-200  to-blue-400 rounded-2xl p-3
                  text-white">
                            {overview}
                        </button>
                    </div>
                    <span className="text-2xl text-light-primary-text">
                        Clear Financial Overview
                    </span>
                    <p className="text-sm text-light-muted-text pt-2">
                        Get a complete snapshot of your income, expenses, and balances in one intuitive dashboard designed for clarity and control.
                    </p>
                </div>

                <div className="p-6 border-b border-light-muted-text/50">
                    <div className="pb-4">
                        <button className="bg-gradient-to-r from-blue-200  to-blue-400 rounded-2xl p-3
                  text-white">
                            {goals}
                        </button>
                    </div>
                    <span className="text-2xl text-light-primary-text">
                        Goal-Based Budgeting
                    </span>
                    <p className="text-sm text-light-muted-text pt-2">
                        Set monthly spending limits and savings goals, then track your progress in real time to stay aligned with your financial plans.            </p>
                </div>

                <div className="p-6 border-r border-light-muted-text/50">
                    <div className="pb-4">
                        <button className="bg-gradient-to-r from-blue-200  to-blue-400 rounded-2xl p-3
                  text-white">
                            {analytics}
                        </button>
                    </div>
                    <span className="text-2xl text-light-primary-text">
                        Insightful Spending Analytics
                    </span>
                    <p className="text-sm text-light-muted-text pt-2">
                        Visual charts and trend analysis help you understand patterns, identify problem areas, and make smarter financial decisions.            </p>
                </div>

                <div className="p-6  border-r border-light-muted-text/50">
                    <div className="pb-4">
                        <button className="bg-gradient-to-r from-blue-200  to-blue-400 rounded-2xl p-3
                  text-white">
                            {budget}
                        </button>
                    </div>
                    <span className="text-2xl text-light-primary-text">
                        Adaptive Budgeting
                    </span>
                    <p className="text-sm text-light-muted-text pt-2">
                        Create budget that flex with your lifestyle, so you can stay consistent without feeling restricted.
                    </p>
                </div>

                <div className="p-6">
                    <div className="pb-4">
                        <button className="bg-gradient-to-r from-blue-200  to-blue-400 rounded-2xl p-3
                  text-white">
                            {history}
                        </button>
                    </div>
                    <span className="text-2xl text-light-primary-text">
                        Organized Transaction History
                    </span>
                    <p className="text-sm text-light-muted-text pt-2">
                        Search, filter, and review past transactions effortlessly, making financial tracking simple and stress-free.            </p>
                </div>

            </div>
        </section>
    )
}

export default AdvantageSection