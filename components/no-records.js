import { useLanguage } from "@/app/application/context/LanguageContext";
import { noRecords } from "@/lib/icons";

export default function NoRecords({children}){
    const {nav} = useLanguage();

    return (
        <div className="flex flex-col justify-center items-center
        text-light-secondary-text dark:text-dark-secondary-text
        ">
            {noRecords}
            <h1 className="pt-2">{nav.noRecords}</h1>
            <span className="text-light-muted-text dark:text-dark-muted-text text-[12px]">{children}</span>
        </div>
    )
}