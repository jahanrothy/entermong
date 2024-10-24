import React from "react";
import {Link} from "react-router-dom";
import {ButtonProps} from "@/types/props";


const Button:React.FC<ButtonProps> = ({name,link,children, className= ''}) =>{

    const classNames = (...classes: string[]) => {
        return classes.filter(Boolean).join(" ");
    };
    return(
        <Link
            to={link}
            className={classNames('inline-flex items-center gap-x-2 bg-primary hover:bg-secondary shadow-button transition ease-in duration-100 rounded-lg py-3.5 px-4 text-base text-white font-semibold', className)}
        >
            { children && (
                <span className={'flex-shrink-0'}>
                    {children}
                </span>
            )}
            <span className={'flex-auto'}>
                {name}
            </span>
        </Link>
    )
}

export default Button