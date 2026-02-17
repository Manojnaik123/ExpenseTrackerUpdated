import TopNavBar from '@/components/landing-page/top-nav-bar'
import { rightArrowLine } from '@/lib/icons'
import React from 'react'
import TransactionsPage from '../application/transactions/page'
import BlogAddPage from '@/components/landing-page/editor'

const BlogsPage = () => {
    return (
        <>
            <TopNavBar />
            <section className='mt-14 w-7xl max-w-7xl px-4 m-auto pt-10'>
                {/* <BlogAddPage/> */}
                <div className='flex flex-col items-center pb-10'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <span className='text-4xl w-3xl text-center
                        text-light-primary-text font-semibold'>
                            Mastering Your Money: How an Expense Tracker Can Change Your Life
                        </span>
                        <p className='text-sm text-light-muted-text'>
                            Discover how a simple expense tracker can help you take control of your spending, boost savings, and build smarter financial habits.
                        </p>
                        <div className='flex text-md gap-8 text-light-secondary-text font-semibold'>
                            <span className='text-primary-accent'>By Manoj naik</span>
                            <div className="w-px h-6 bg-gray-300"></div>
                            <span>Last updated: August 2, 2026</span>
                            <div className="w-px h-6 bg-gray-300"></div>
                            <span>15 minutes read</span>
                        </div>
                    </div>
                    <img
                        src="/images/blog1.jpg"
                        alt="dashboard"
                        className="rounded-2xl w-auto h-130 mt-10"
                    />
                </div>
                <div className='flex border-t border-light-border gap-10 pt-10' >
                    <div>
                        <div className='bg-primary-accent/20 p-4 min-w-85 border border-primary-accent/30 rounded-lg flex flex-col gap-1'>
                            <h1 className='text-1xl font-semibold pb-2 text-light-secondary-text'>Table of Contents</h1>
                            <ul className='text-sm flex flex-col gap-2 text-light-muted-text list-disc list-inside'>
                                <li className='hover:text-primary-accent'>Why You Need an Expense Tracker?</li>
                                <li className='hover:text-primary-accent'>Types of Expense Trackers</li>
                                <li className='hover:text-primary-accent'>Tips for Using an Expense Tracker Effectively</li>
                                <li className='hover:text-primary-accent'>The Benefits You Can’t Ignore</li>
                                <li className='hover:text-primary-accent'>Final Thought</li>
                            </ul>
                            <h1 className='text-1xl font-semibold pt-5 text-light-secondary-text'>Subscribe Now</h1>
                            <p className='text-light-muted-text text-xs'>Stay up to date with Finovex's latest news.</p>
                            <input
                                type='text'
                                placeholder='Email'
                                className='mt-2 w-full h-10 bg-red-50 rounded-full p-4 ring-light-border'
                            />
                            <button className='flex justify-center items-center gap-2 hover:bg-accent-hover text-white bg-primary-accent py-2 rounded-full mt-2'>
                                Subscribe Now
                                <span className='pt-1'>
                                    {rightArrowLine}
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 text-light-secondary-text pr-40'>
                        <p className='italic text-light-muted-text text-lg'>
                            In today’s fast-paced world, money seems to slip through our fingers faster
                            than we realize. One day you’re budgeting for groceries and bills, the next
                            day, surprise—your savings account is looking a little thin. Enter the humble
                            expense tracker, a tool that can literally transform the way you handle your finances.
                        </p>
                        <h1 className='text-2xl font-semibold text-light-primary-text mt-10'>Why You Need an Expense Tracker?</h1>
                        <p>
                            An expense tracker isn’t just for accountants or financial gurus.
                            It’s for anyone who wants clarity over their spending habits.
                            By logging your expenses, you start to see patterns you may have ignored:
                        </p>
                        <ul className='flex flex-col gap-4 pl-8'>
                            <li><b>01.</b> Coffee runs that add up to a small vacation every month</li>
                            <li> <b>02.</b> Subscriptions you forgot you were paying for</li>
                            <li><b>03.</b>Impulse buys that feel harmless in the moment but hurt your wallet in the long run</li>
                        </ul>
                        <p>
                            Seeing your spending in black and white is eye-opening—and honestly, a little empowering.
                        </p>
                        <h1 className='text-2xl font-semibold text-light-primary-text mt-10'>Types of Expense Trackers</h1>
                        <p>You don’t need to complicate things to track your money. Here are some popular ways people do it:</p>
                        <ul className='flex flex-col gap-4 pl-8'>
                            <li><b>Apps</b> – Tools like Mint, YNAB (You Need a Budget),
                                and PocketGuard can sync with your bank accounts and categorize your spending automatically.</li>
                            <li><b>Spreadsheets</b> – If you like DIY solutions, a simple Excel or Google Sheet works wonders.
                                You can customize categories, track trends, and even create charts.</li>
                            <li>
                                <b>Paper Journal </b>– Sometimes old-school is best. Writing down every rupee you spend makes you more conscious
                                of your choices.
                            </li>
                        </ul>

                        <h1 className='text-2xl font-semibold text-light-primary-text mt-10'>Tips for Using an Expense Tracker Effectively</h1>
                        <ul className='flex flex-col gap-4 pl-8'>
                            <li><b>Be consistent:</b> Log every expense, even the small ones. A 50-rupee snack matters as much as a 5,000-rupee gadget.</li>
                            <li><b>Categorize wisely:</b> Don’t just write “shopping” every time. Break it into groceries, clothes, and entertainment.</li>
                            <li><b>Review weekly:</b> Spending patterns emerge over time. Weekly check-ins are enough to catch unnecessary spending before it snowballs.</li>
                            <li><b>Set goals:</b> Want to save for a vacation or pay off a loan faster? Use your tracker to set realistic targets and track progress.</li>
                        </ul>

                        <h1 className='text-2xl font-semibold text-light-primary-text mt-10'>The Benefits You Can’t Ignore</h1>
                        <ul className='flex flex-col gap-4 pl-8'>
                            <li><b>Better budgeting:</b> You’ll know exactly where your money is going, helping you plan smarter.</li>
                            <li><b>Reduced stress:</b> Financial uncertainty is stressful. Knowing your spending patterns gives peace of mind.</li>
                            <li><b>More savings:</b> By spotting wasteful habits, you can redirect money toward goals that matter.</li>
                        </ul>
                        <h1 className='text-2xl font-semibold text-light-primary-text mt-10'>Final Thought</h1>
                        <p>
                            Expense tracking is more than just numbers—it’s about taking control of your financial life. Whether you use an app, a spreadsheet, or pen and paper, the key is consistency and honesty. Start small,
                            track faithfully, and watch your financial habits transform. Your future self will thank you!
                        </p>

                        <div className='mt-10 p-4 border shadow-lg border-light-border rounded-lg flex flex-col gap-2'>
                            <h1 className='flex gap-2 text-light-secondary-text'>
                                Posted by
                                <span className='text-primary-accent font-semibold'>
                                    Manoj Naik</span></h1>
                            <p className='text-light-muted-text text-sm'>
                                Aarav is a personal finance enthusiast and tech blogger who loves turning complex money matters into simple, everyday tips. When he’s not crunching numbers,
                                he’s exploring new cafes and dabbling in travel photography. </p>
                        </div>
                        <div className='flex gap-2 py-4'>
                            <span className='text-light-primary-text font-semibold mr-2'>Tags</span>
                            <button className='bg-primary-accent px-4 py-1 text-xs rounded-full text-white font-semibold'>Expense</button>
                            <button className='bg-primary-accent px-4 py-1 text-xs rounded-full text-white font-semibold'>Advantages</button>
                            <button className='bg-primary-accent px-4 py-1 text-xs rounded-full text-white font-semibold'>Finance</button>

                        </div>
                    </div>
                </div>
                <div className='border-t py-10 border-light-border flex flex-col justify-center items-center gap-6'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Related Blog Post</h1>
                    </div>
                    <div className='flex gap-4'>
                        <div className='max-w-70 border border-light-border rounded-2xl flex flex-col items-center gap-1'>
                            <img
                                src="/images/blog1.jpg"
                                alt="dashboard"
                                className="rounded-t-2xl w-auto h-auto"
                            />
                            <div className='p-4'>
                                <span className='text-xs text-light-muted-text'>November 15, 2026</span>
                            <h1 className='text-md text-light-secondary-text'>Ensuring your money spent wisely</h1>
                            <p className='text-sm text-light-muted-text'>
                                Expense tracking is more than just numbers—it’s about taking control of your
                                financial life. Whether you use an app, a spreadsheet, or pen an....
                            </p>
                            <span className='text-primary-accent text-xs font-semibold'>Read More</span>
                            </div>
                        </div>

                        <div className='max-w-70 border border-light-border rounded-2xl p-4 flex flex-col items-start gap-1'>
                            <img
                                src="/images/saving-graph.jpeg"
                                alt="dashboard"
                                className="rounded-2xl w-auto h-auto"
                            />
                            <span className='text-xs text-light-muted-text'>November 15, 2026</span>
                            <h1 className='text-md text-light-secondary-text'>Ensuring your money spent wisely</h1>
                            <p className='text-sm text-light-muted-text'>
                                Expense tracking is more than just numbers—it’s about taking control of your
                                financial life. Whether you use an app, a spreadsheet, or pen an....
                            </p>
                            <span className='text-primary-accent text-xs font-semibold'>Read More</span>
                        </div>

                        <div className='max-w-70 border border-light-border rounded-2xl p- flex flex-col items-start gap-1'>
                            <img
                                src="/images/dashboard.jpeg"
                                alt="dashboard"
                                className="rounded-2xl w-auto h-auto"
                            />
                            
                            <div className='p-4'>
                                <span className='text-xs text-light-muted-text'>November 15, 2026</span>
                                <h1 className='text-md text-light-secondary-text'>Ensuring your money spent wisely</h1>
                                <p className='text-sm text-light-muted-text'>
                                    Expense tracking is more than just numbers—it’s about taking control of your
                                    financial life. Whether you use an app, a spreadsheet, or pen an....
                                </p>
                                <span className='text-primary-accent text-xs font-semibold'>Read More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogsPage