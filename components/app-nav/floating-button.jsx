import { plus } from "../lib/icons";

const FloatingButton = () => {
    return ( 
        <button className="fixed md:hidden w-14 h-14 bg-[#84d2f6] rounded-full bottom-20 right-2 z-20 flex justify-center items-center">
           {plus}
        </button>
     );
}
 
export default FloatingButton;