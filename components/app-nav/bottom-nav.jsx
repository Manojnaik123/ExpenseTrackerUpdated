import { leftArrow, logo, setting, dashboard, transaction, budget, savings, goals } from "../lib/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomNavigation = () => {
    const path = usePathname();

    return (
        <nav className="fixed w-full h-16 bg-[#003566] bottom-0 md:hidden flex p-3 justify-between">
            <Link href='/'
                className={` ${path === '/' ? 'bg-white/20' : 'bg-none'} px-5 rounded-full flex flex-col justify-center items-center text-white`}
            >
                <span className="">{dashboard}</span>
                {/* <span>Dashboard</span> */}
            </Link>

            <Link href='/transactions'
                className={` ${path === '/transactions' ? 'bg-white/20' : 'bg-none'} px-5 rounded-full flex flex-col justify-center items-center text-white`}
            >
                <span className="">{transaction}</span>
                {/* <span>Dashboard</span> */}
            </Link>
            <Link href='/budget'
                className={` ${path === '/budget' ? 'bg-white/20' : 'bg-none'} px-5 rounded-full flex flex-col justify-center items-center text-white`}
            >
                <span className="">{budget}</span>
                {/* <span>Dashboard</span> */}
            </Link>
            <Link href='/savings'
                className={` ${path === '/savings' ? 'bg-white/20' : 'bg-none'} px-5 rounded-full flex flex-col justify-center items-center text-white`}
            >
                <span className="">{savings}</span>
                {/* <span>Dashboard</span> */}
            </Link>
            <Link href='/goals'
                className={` ${path === '/goals' ? 'bg-white/20' : 'bg-none'} px-5 rounded-full flex flex-col justify-center items-center text-white`}
            >
                <span className="">{goals}</span>
                {/* <span>Dashboard</span> */}
            </Link>

        </nav>
    );
}

export default BottomNavigation;