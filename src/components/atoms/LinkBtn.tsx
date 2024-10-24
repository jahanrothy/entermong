import React from 'react';
import {Link} from "react-router-dom";

interface LinkBtnProps {
    text: string;
    to: string;
    className?: string;
}

const LinkBtn:React.FC<LinkBtnProps> = ({ text, to, className = '' }) => {
    const classNames = (...classes: string[]) =>{
        return classes.filter(Boolean).join(' ')
    }
    return(
        <Link
            to={to}
            className={classNames('block rounded-md bg-base px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-baseDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base', className)}
        >
            {text}
        </Link>
    )
}

export default LinkBtn