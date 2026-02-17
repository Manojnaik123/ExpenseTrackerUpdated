import { useCurrency } from "@/app/application/context/CurrencyContext";
import { useLanguage } from "@/app/application/context/LanguageContext";
import { goalCategoryIcons, goalIconColor, more } from "@/lib/icons";
import { hexToRgba } from "@/util/ui";

function ActiveGoal({ prop }) {
    console.log(prop);

    const { currentCurrencySymbol } = useCurrency();
    const { nav } = useLanguage();
    return (
        <>
            <div className='border-b
              border-light-border dark:border-dark-border'>
                <div className='flex justify-start items-center gap-2 py-4 pb-2'>
                    <div className='p-3 bg-red-400/20 text-red-400 rounded-md'
                        style={{
                            backgroundColor: hexToRgba(goalIconColor[prop.categoryId], 0.3),
                            color: hexToRgba(goalIconColor[prop.categoryId], 1)
                        }}>
                        {goalCategoryIcons[prop.categoryId]}
                    </div>
                    <div className='grow'>
                        <div className='flex justify-between'>
                            <span className='text-light-primary-text dark:text-dark-primary-text'>
                                {prop.title}
                            </span>
                            <span className='text-sm text-light-primary-text dark:text-dark-primary-text'>
                                {currentCurrencySymbol + ' ' + new Intl.NumberFormat().format(prop.amount)}
                            </span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-sm text-light-secondary-text'>
                                {prop.category}
                            </span>
                            <span className='text-sm text-light-secondary-text'>
                                <span className="text-xs text-light-muted-text dark:text-dark-muted-text">
                                    {nav.deadLine + ' ' + '-' + ' '}
                                </span>
                                {prop.date}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='pb-2'>
                    <div className="w-full h-3 overflow-hidden 
                                            rounded-full border border-light-border dark:border-dark-border
                                            bg-hover-gray/50
                                            ">
                        <div
                            className="h-full transition-all duration-300 rounded-r-full"
                            style={
                                {
                                    width: `${(prop.fund/prop.amount)*100}%`,
                                     backgroundColor: hexToRgba(goalIconColor[prop.categoryId], 0.8),
                                }
                            }
                        />
                    </div>
                </div>
            </div>
        </>

    )
}

export default ActiveGoal;