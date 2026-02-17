import React from 'react';
import { comment, dot, flowerTick, rightArrow, rightArrowLine } from "@/lib/icons";
import Image from "next/image";


const Testimonial = () => {
    return (
        <>
            <section className="px-62 flex flex-col items-center mt-16 max-w-7xl m-auto">
                <span className="flex font-semibold text-primary-accent items-center gap-2">{comment} Testimonials from Users</span>
                <span className="text-4xl text-light-primary-text py-4">Trusted by users, proven by results.</span>
                <p className="text-light-muted-text text-sm">Hear real stories from people who transformed</p>
                <p className="text-light-muted-text text-sm">the way they manage money with finovex.</p>

                <div className="relative">
                    <div className="max-h-[400px] overflow-hidden">
                        <div className="columns-2 gap-2 space-y-2 mt-10">
                            <div className="break-inside-avoid bg-hover-gray/40 p-1 rounded-lg">
                                <div className="flex bg-white rounded-lg p-3">
                                    {/* <div className=" p-2"> */}
                                    <Image src='/images/profile0.jpg'
                                        alt="Logo"
                                        width={40}
                                        height={40}
                                        className="rounded-md w-10 h-10 object-cover"
                                    />
                                    {/* </div> */}

                                    <p className="text-sm text-light-secondary-text pl-2">
                                        “I never realized how much I was overspending on food delivery until I started using this app.
                                        The dashboard makes everything ridiculously clear. It’s simple, fast, and actually useful.”
                                    </p>
                                </div>
                                <span className="flex items-center gap-1 text-light-secondary-text pt-1">
                                    <span className="text-green-600">
                                        {flowerTick}
                                    </span>
                                    Rohan M
                                    <span className="flex items-center text-sm text-light-muted-text">
                                        {dot}  Software Engineer
                                    </span>
                                </span>
                            </div>


                            <div className="break-inside-avoid bg-hover-gray/40 p-1 rounded-lg">
                                <div className="flex bg-white rounded-lg p-3">
                                    {/* <div className="w-32 h-32 p-2"> */}
                                    <Image src='/images/profile3.jpg'
                                        alt="Logo"
                                        width={40}
                                        height={40}
                                        className="rounded-md w-10 h-10 object-cover"
                                    />
                                    {/* </div> */}

                                    <p className="text-sm text-light-secondary-text pl-2">
                                        “As a freelancer, my income isn’t fixed, so tracking finances used to be stressful. This expense tracker helped me organize both irregular income and monthly expenses in one place. The monthly summary and trend analysis show me exactly how I’m performing financially. I feel more in control and less anxious about money. It’s like having a clear financial snapshot available anytime.”
                                    </p>
                                </div>
                                <span className="flex items-center gap-1 text-light-secondary-text pt-1">
                                    <span className="text-green-600">
                                        {flowerTick}
                                    </span>
                                    Ananya S
                                    <span className="flex items-center text-sm text-light-muted-text">
                                        {dot}  Freelancer
                                    </span>
                                </span>
                            </div>


                            <div className="break-inside-avoid bg-hover-gray/40 p-1 rounded-lg">
                                <div className="flex bg-white rounded-lg p-3">
                                    {/* <div className="w-32 h-32 p-2"> */}
                                    <Image src='/images/profile2.jpg'
                                        alt="Logo"
                                        width={40}
                                        height={40}
                                        className="rounded-md w-10 h-10 object-cover"
                                    />
                                    {/* </div> */}

                                    <p className="text-sm text-light-secondary-text pl-2">
                                        “Managing expenses as a student can get overwhelming, especially with rent, groceries, and unexpected costs. This app made it incredibly easy to track daily spending. The clean interface doesn’t distract me, and the insights helped me understand my habits. I’ve actually started setting small savings goals and achieving them. It’s simple but powerful.”              </p>
                                </div>
                                <span className="flex items-center gap-1 text-light-secondary-text pt-1">
                                    <span className="text-green-600">
                                        {flowerTick}
                                    </span>
                                    Abhishek Sharma
                                    <span className="flex items-center text-sm text-light-muted-text">
                                        {dot}  Finance
                                    </span>
                                </span>
                            </div>

                            <div className="break-inside-avoid bg-hover-gray/40 p-1 rounded-lg">
                                <div className="flex bg-white rounded-lg p-3">
                                    {/* <div className="w-32 h-32 p-2"> */}
                                    <Image src='/images/profile1.jpg'
                                        alt="Logo"
                                        width={40}
                                        height={40}
                                        className="rounded-md w-10 h-10 object-cover"
                                    />
                                    {/* </div> */}

                                    <p className="text-sm text-light-secondary-text pl-2">
                                        “The spending insights helped me understand my habits better.understand my habits better.understand my habits better.understand my habits better. I’ve started saving regularly for the first time. The app feels modern and intuitive.”
                                    </p>
                                </div>
                                <span className="flex items-center gap-1 text-light-secondary-text pt-1">
                                    <span className="text-green-600">
                                        {flowerTick}
                                    </span>
                                    Megha R
                                    <span className="flex items-center text-sm text-light-muted-text">
                                        {dot}  MBA Student
                                    </span>
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Fade overlay */}
                    <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
                </div>
                <button className="flex items-center bg-primary-accent hover:bg-accent-hover text-white px-4 py-1 gap-2 rounded-lg">Read full stories <span className="pt-1">{rightArrowLine}</span></button>
            </section>
        </>
    )
}

export default Testimonial