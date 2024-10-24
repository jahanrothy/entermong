import React from "react";
import {PageTitleProps} from "@/types/pageTitleProps";
import Breadcrumbs from "@/components/common/Breadcrumbs.tsx";

const PageTitle:React.FC<PageTitleProps> = ({ children, title, breadcrumb}) => {
    return(
       <div className={'flex items-center py-6'}>
           <div className={'flex-auto'}>
                <h1 className={'font-bold text-2xl text-[#282828]'}>{title}</h1>
               {breadcrumb && (
                   <Breadcrumbs />
               )}
           </div>

           {children && (
               <div className={'flex-shrink-0'}>
                   {children}
               </div>
           )}
       </div>
    )
}

export default PageTitle