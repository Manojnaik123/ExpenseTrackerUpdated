'use client';
import { downArrow, downArrowSmall, redirectArrow } from '@/lib/icons'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const arrow = <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="100pt" height="100pt" viewBox="0 0 337.000000 273.000000"
    preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,273.000000) scale(0.100000,-0.100000)" fill="#55a630" stroke="currentColor">
        <path d="M1689 2463 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21 -13z" /> <path d="M1790 2429 c-213 -42 -215 -43 -215 -64 0 -17 6 -20 45 -17 25 1 80 9 123 18 43 9 80 14 83 12 2 -2 -33 -47 -77 -99 -252 -294 -301 -480 -160 -601 24 -20 101 -67 172 -104 194 -101 237 -158 219 -285 -21 -145 -158 -356 -429 -656 -101 -112 -118 -143 -82 -143 20 0 183 174 296 315 154 192 248 362 264 478 21 149 -34 227 -234 329 -198 101 -239 143 -233 239 5 67 54 175 124 270 75 101 199 241 202 227 1 -7 6 -69 10 -138 6 -116 8 -125 27 -125 19 0 20 6 17 170 -2 97 -8 175 -14 183 -13 15 -20 14 -138 -9z m118 -40 c-2 -25 -4 -27 -18 -14 -18 17 -34 20 -25 6 3 -5 0 -13 -6 -17 -8 -4 -9 -3 -5 5 4 6 0 14 -10 18 -16 6 -16 7 0 18 9 7 28 13 41 13 21 0 25 -5 23 -29z" /> <path d="M1626 2228 c3 -5 10 -6 15 -3 13 9 11 12 -6 12 -8 0 -12 -4 -9 -9z" /> <path d="M1846 2061 c-3 -4 1 -17 10 -27 14 -18 15 -18 5 2 -6 12 -7 24 -4 28 3 3 4 6 0 6 -3 0 -8 -4 -11 -9z" /> <path d="M1935 2041 c-3 -5 -2 -12 3 -15 5 -3 9 1 9 9 0 17 -3 19 -12 6z" /> <path d="M1643 1995 c0 -6 6 -12 12 -12 6 0 12 6 12 12 0 6 -6 12 -12 12 -6 0 -12 -6 -12 -12z" /> <path d="M1463 1785 c0 -8 4 -12 9 -9 5 3 6 10 3 15 -9 13 -12 11 -12 -6z" /> <path d="M1780 1686 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21 13z" /> <path d="M1540 1630 c-12 -7 -10 -9 7 -7 12 0 19 5 17 9 -6 10 -6 10 -24 -2z" /> <path d="M1980 1580 c6 -11 13 -20 16 -20 2 0 0 9 -6 20 -6 11 -13 20 -16 20 -2 0 0 -9 6 -20z" /> <path d="M2061 1437 c-8 -10 -7 -14 2 -14 8 0 14 6 14 14 0 7 -1 13 -2 13 -2 0 -8 -6 -14 -13z" /> <path d="M1925 1391 c-3 -5 -2 -12 3 -15 5 -3 9 1 9 9 0 17 -3 19 -12 6z" /> <path d="M2043 1193 c0 -7 3 -11 5 -8 3 3 12 -1 21 -8 14 -10 14 -10 4 4 -7 9 -11 18 -8 21 3 2 -1 5 -8 5 -8 0 -14 -6 -14 -14z" /> <path d="M1770 1021 c-7 -15 -7 -22 2 -27 7 -4 10 -4 6 1 -4 4 -3 16 3 26 5 11 7 19 5 19 -3 0 -10 -9 -16 -19z" /> <path d="M1822 785 c4 -4 3 -16 -3 -26 -5 -11 -7 -19 -5 -19 3 0 10 9 16 19 7 15 7 22 -2 27 -7 4 -10 4 -6 -1z" /> <path d="M1549 718 c-5 -18 -6 -38 -1 -34 7 8 12 36 6 36 -2 0 -4 -1 -5 -2z" /> <path d="M1466 628 c3 -5 10 -6 15 -3 13 9 11 12 -6 12 -8 0 -12 -4 -9 -9z" /> <path d="M1641 606 c-8 -10 -9 -16 -1 -21 5 -3 10 -5 11 -3 4 18 7 38 4 38 -1 0 -8 -6 -14 -14z" /> </g> </svg>



const TopNavBar = () => {
    const [isGuideOpen, setisGuideOpen] = useState(true);

    function handleOkClick() {
        setisGuideOpen(false);
    }

    return (
        <>
            <nav className='fixed z-30 h-14 w-full shadow-sm bg-light-background'>
                <div className='h-full md:max-w-7xl m-auto flex justify-start items-center px-4'>
                    {/* top layer */}

                    <ul className='flex gap-8 items-center'>
                        <div className='flex items-center gap-2'>
                            <Image src='/images/pngegg.png'
                                alt="Logo"
                                width={40}
                                height={40}
                            />
                            <span className='text-light-secondary-text'>
                                FINOVEX
                            </span>
                        </div>
                        <div className='flex items-center gap-4
                            text-light-muted-text
                             text-sm'>
                            <li className='flex items-center gap-1'>
                                Product
                                <span className='pt-1'>
                                    {downArrowSmall}
                                </span>
                            </li>
                            <li>Docs</li>
                            <li>Customers</li>
                        </div>
                    </ul>
                    {/* Overlay */}
                    {isGuideOpen && (
                        <div
                            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
                        />
                    )}

                    <div className="relative ml-auto z-50">
                        {/* Button */}
                        <Link href={'application'}
                            className="px-4 py-2 rounded-2xl flex gap-2 items-center
               bg-primary-accent/90 text-white hover:bg-accent-hover"
                        >
                            Get Started {redirectArrow}
                        </Link>

                        {/* Tooltip */}
                        {isGuideOpen && (
                            <div className="absolute right-0 top-full mt-3 w-80 flex flex-col items-end">
                                <span>{arrow}</span>

                                <div className="bg-success-bg/30 border border-success-bg/50 
                                            rounded-lg p-4 text-[#006400]">
                                    <span className="block pb-4">
                                        You can head start with the application by clicking above button!
                                    </span>

                                    <button className="border w-full border-success-bg/50 bg-success-bg/40 
                                             py-2 rounded-md"
                                        onClick={handleOkClick}>
                                        Ok, Got It!
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </nav>
        </>
    )
}

export default TopNavBar