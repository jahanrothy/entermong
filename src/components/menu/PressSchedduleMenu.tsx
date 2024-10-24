import {Link, useLocation} from "react-router-dom";
import {
    VideoCameraIcon,
} from "@heroicons/react/24/outline";
import React from "react";


const PressScheduleMenu:React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const classNames = (...classes: string[]) =>{
        return classes.filter(Boolean).join(' ')
    }

    const Menu = [
        {
            name: 'Offset',
            href: `/admin/batch-management/press-schedule/offset`,
            icon: VideoCameraIcon,
            current: currentPath === `/admin/batch-management/press-schedule/offset` ||
                currentPath === `/admin/batch-management/press-schedule/`
        },
        {
            name: 'FlatBed',
            href: `/admin/batch-management/press-schedule/flatbed`,
            current: currentPath === `/admin/batch-management/press-schedule/flatbed`
        },
    ];

    return(
        <div>
            <ul className={'flex items-center divide-x divide-gray-300 border-y border-gray-300 mb-6'}>
                {Menu.map((item) => (
                    <li key={item.name} className={'flex-auto text-center'}>
                        <Link to={item.href} className={classNames(item.current ? 'bg-base text-white' : '', 'p-3 block') }>
                            {item.name}
                        </Link>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default PressScheduleMenu;