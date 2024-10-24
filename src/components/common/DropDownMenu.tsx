import {Menu, MenuButton, MenuItem, MenuItems, Transition} from "@headlessui/react";
import {Link} from "react-router-dom";
import React from "react";
import {EllipsisHorizontalIcon, EyeIcon, PencilIcon, TrashIcon} from "@heroicons/react/24/outline";

const DropDownMenu:React.FC = () => {

    const userNavigation = [
        {
            id: 1,
            name: "View details",
            href: "#",
            icon: EyeIcon,
        },
        {
            id: 2,
            name: "Edit info",
            href: "/" ,
            icon: PencilIcon,
        },
        {
            id: 3,
            name: "Logout",
            href: "/" ,
            icon: TrashIcon,
        },
    ];

    const menuClickHandler = () => {
        console.log('Menu Clicked')
    }

    const classNames = (...classes: string[]) => {
        return classes.filter(Boolean).join(" ");
    };
    return(
        <Menu as="div" className="relative">
            <MenuButton className="-m-1.5 flex items-start gap-x-3 p-1.5">
                <EllipsisHorizontalIcon className={'w-6'} />
            </MenuButton>
            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <MenuItems
                    className="custom_table_dropdown_option absolute w-[158px] right-0 border-[0.5px] border-gray-100 z-10 mt-2.5 origin-top-right rounded-2xl bg-white py-4 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                            {({focus}) => (
                                <Link
                                    onClick={menuClickHandler}
                                    to={item.href}
                                    className={classNames(
                                        focus ? "bg-gray-50" : "",
                                        "flex items-center px-5 py-1.5 text-xs leading-6 text-gray-900 hover:bg-red-50 hover:text-red-500 hover:font-medium"
                                    )}
                                >
                                    <item.icon className={'w-5 h-5 mr-4'}  />
                                    {item.name}
                                </Link>
                            )}
                        </MenuItem>
                    ))}
                </MenuItems>
            </Transition>
        </Menu>
    )
}

export default DropDownMenu