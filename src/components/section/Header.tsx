import {Bars3Icon, BellIcon, UserIcon, Cog6ToothIcon, ArrowRightEndOnRectangleIcon} from "@heroicons/react/24/outline";
import {Menu, MenuButton, MenuItem, MenuItems, Transition} from "@headlessui/react";
import {Link} from "react-router-dom";
import React from "react";
import SearchBar from "@/components/atoms/SearchBar.tsx";
import AuthImg from "@/assets/profile.png";
import ArrowIcon from "@/assets/icons/arrow-down.svg";

interface HeaderProps {
    MobileMenu: string | any,
}

const HeaderPanel:React.FC<HeaderProps> = ({MobileMenu}) => {
    const userNavigation = [
        {
            id: 1,
            name: "View Profile",
            href: "#",
            icon: UserIcon,
        },
        {
            id: 2,
            name: "Settings",
            href: "/" ,
            icon: Cog6ToothIcon,
        },
        {
            id: 3,
            name: "Logout",
            href: "/" ,
            icon: ArrowRightEndOnRectangleIcon,
        },
    ];

    const menuClickHandler = () => {
        console.log('Menu Clicked')
    }

    const classNames = (...classes: string[]) => {
        return classes.filter(Boolean).join(" ");
    };
    return (
        <div
            className="mx-4 sticky top-0 z-40 flex h-20 shrink-0 items-center gap-x-4 rounded-b-2xl bg-white px-6 py-5 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <div className="flex flex-1 gap-x-4 self-stretch justify-end lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                        onClick={MobileMenu}>
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                </button>
                <div className={'flex items-center justify-between w-auto flex-auto'}>
                    <div className={'relative'}>
                        <SearchBar placeholder={"Search order,products, etc..."} />
                    </div>
                    <div className="flex items-center gap-x-4 lg:gap-x-6">
                        <button
                            type="button"
                            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>

                        {/* Separator */}
                        <div
                            className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                            aria-hidden="true"
                        />

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative">
                            <MenuButton className="-m-1.5 flex items-start gap-x-3 p-1.5">
                               <img src={AuthImg} alt={''} className={'w-10 h-10 rounded-full'} />
                                <span className={'text-left'}>
                                    <span className={'block text-sm font-semibold text-primary'}>Isaac Kim</span>
                                    <span className={'block text-xs text-[#454545]'}>Admin</span>
                                </span>
                              {/*<span>*/}
                              {/*      {profileSuccess*/}
                              {/*        ? data?.data.full_name ?? data?.data?.email*/}
                              {/*        : ""}*/}
                              {/*</span>*/}
                                <span className="hidden lg:flex lg:items-center pt-[6px]">
                                    <ArrowIcon />
                              </span>
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
                                    className="absolute w-[188px] right-0 border-[0.5px] border-gray-100 z-10 mt-2.5 origin-top-right rounded-2xl bg-white py-5 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                    {userNavigation.map((item) => (
                                        <MenuItem key={item.name}>
                                            {({focus}) => (
                                                <Link
                                                    onClick={menuClickHandler}
                                                    to={item.href}
                                                    className={classNames(
                                                        focus ? "bg-gray-50" : "",
                                                        "flex items-center px-5 py-2 text-sm leading-6 text-gray-900 hover:bg-red-50 hover:text-red-500 hover:font-medium"
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderPanel