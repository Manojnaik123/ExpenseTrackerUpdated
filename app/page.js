import AdvantageSection from "@/components/landing-page/advantage";
import DashboardOverView from "@/components/landing-page/dashboard-overview";
import TopNavBar from "@/components/landing-page/top-nav-bar";
import Testmonial from "@/components/landing-page/testimonail";
import AllInOne from "@/components/landing-page/all-in-one";
import Image from "next/image";
import { copyWrite, dot, faceBook, insta, mail, rightArrowLineSmall, twitter, youtube } from "@/lib/icons";
import { redirect } from 'next/navigation'

export default async function Home() {
  redirect('/login')
  return (
    <>
      <TopNavBar />
      {/* top title */}
      <DashboardOverView />
      {/* key advantages */}
      <AdvantageSection />
      {/* all in one native solution */}
      <AllInOne />
      {/* testimonial */}
      <Testmonial />
      {/* footer */}
      <section className="mt-16 w-7xl max-w-7xl m-auto">
        <div className="bg-[url('/images/sky-bg.jpg')] bg-cover bg-center h-96 flex flex-col items-center justify-center gap-2 text-white">
          <span className="text-3xl font-semibold">
            Make money management simple,
          </span>
          <span className="text-3xl font-semibold">
            stress-free, and empowering.
          </span>
          <p className="text-sm">
            Build a healthier relation with your money, starting now.
          </p>
          <div className="flex pt-5 gap-2">
            <button className="bg-primary-accent px-4 py-1 rounded-md">
              View App
            </button>
            <button className="text-light-secondary-text flex bg-white px-4 py-1 rounded-md shadow-md border border-light-border">
              Learn More
              <span className="pt-1.5">
                {rightArrowLineSmall}
              </span>
            </button>
          </div>
        </div>
        <div>
          <div className="px-7">
            <div className='flex items-center justify-between gap-2 mt-16 pb-6 border-b border-light-border'>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Image src='/images/pngegg.png'
                    alt="Logo"
                    width={40}
                    height={40}
                  />
                  <span className='text-light-primary-text font-semibold'>
                    FINOVEX
                  </span>
                </div>
                <div className="w-px h-6 bg-gray-300"></div>
                <span className="text-light-muted-text text-sm">
                  The personal finance app for everyone
                </span>
              </div>
              <button className="flex items-center gap-1 px-4 py-1 border border-light-border rounded-md shadow-md
                  text-light-secondary-text text-sm">
                <span className="pt-1 ">
                  {mail}
                </span>
                hello@finovex.ai
                <span className="pt-1">
                  {rightArrowLineSmall}
                </span>
              </button>
            </div>
            <div className="w-full flex justify-between py-10">
              <ul className="flex flex-col gap-2">
                <li className="text-light-secondary-text text-md ">Product</li>
                <li className="text-light-muted-text text-sm hover:text-light-secondary-text/80 hover:underline">Smart Transaction</li>
                <li className="text-light-muted-text text-sm hover:text-light-secondary-text/80 hover:underline ">Spending Growth</li>
                <li className="text-light-muted-text text-sm hover:text-light-secondary-text/80 hover:underline">Budget Tracker</li>
                <li className="text-light-muted-text text-sm hover:text-light-secondary-text/80 hover:underline">Money Management</li>
              </ul>

              <ul className="flex flex-col gap-2">
                <li className="text-light-secondary-text text-md ">Company</li>
                <li className="text-light-muted-text text-sm hover:text-light-secondary-text/80 hover:underline">About us</li>
                <li className="text-light-muted-text text-sm hover:text-light-secondary-text/80 hover:underline ">Careers</li>
                <li className="text-light-muted-text text-sm hover:text-light-secondary-text/80 hover:underline">Pricing</li>
                <li className="text-light-muted-text text-sm hover:text-light-secondary-text/80 hover:underline">Contact Us</li>
              </ul>

              <ul className="flex flex-col gap-2">
                <li className="text-light-secondary-text text-md ">Resources</li>
                <li className="text-light-muted-text text-sm hover:text-light-secondary-text/80 hover:underline">Blog</li>
                <li className="text-light-muted-text text-sm hover:text-light-secondary-text/80 hover:underline ">Support</li>
                <li className="text-light-muted-text text-sm hover:text-light-secondary-text/80 hover:underline">Tutorials</li>
                <li className="text-light-muted-text text-sm hover:text-light-secondary-text/80 hover:underline">Status</li>
                <li className="text-light-muted-text text-sm hover:text-light-secondary-text/80 hover:underline">Join Community</li>
              </ul>

              <ul className="flex flex-col gap-2">
                <li className="text-light-secondary-text text-md ">Documentation</li>
                <li className="text-light-muted-text text-sm hover:text-light-secondary-text/80 hover:underline">Getting Started</li>
                <li className="text-light-muted-text text-sm hover:text-light-secondary-text/80 hover:underline ">Component</li>
                <li className="text-light-muted-text text-sm hover:text-light-secondary-text/80 hover:underline">API Playground</li>
                <li className="text-light-muted-text text-sm hover:text-light-secondary-text/80 hover:underline">Pricing</li>
                <li className="text-light-muted-text text-sm hover:text-light-secondary-text/80 hover:underline">INtegration</li>
              </ul>

              <ul className="flex flex-col gap-2">
                <li className="text-light-secondary-text text-md ">Legal</li>
                <li className="text-light-muted-text text-sm hover:text-light-secondary-text/80 hover:underline">Privacy Policy</li>
                <li className="text-light-muted-text text-sm hover:text-light-secondary-text/80 hover:underline ">Terms of Service</li>
                <li className="text-light-muted-text text-sm hover:text-light-secondary-text/80 hover:underline">Cookie Policy</li>
              </ul>


            </div>

            <div className="pt-7 pb-16 flex justify-between items-center border-t border-light-border
                text-light-muted-text text-sm " >
              <span className="flex items-center gap-1">
                <span className="pt-0.5">
                  {copyWrite}
                </span>
                2025 Finovex | All rights reserved.
              </span>
              <ul className="flex gap-4">
                <button>{insta}</button>
                <button>{faceBook}</button>
                <button>{twitter}</button>
                <button>{youtube}</button>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
