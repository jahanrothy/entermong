import React from "react";
import {ChevronRightIcon} from "@heroicons/react/24/solid";


const Breadcrumbs:React.FC = () => {
    const pages = [
        { name: 'Projects', href: '#', current: false },
        { name: 'Project Nero', href: '#', current: true },
    ]
    const classNames = (...classes: string[]) => {
        return classes.filter(Boolean).join(" ");
    };
    return (
        <nav aria-label="Breadcrumb" className="flex pt-2.5">
            <ol role="list" className="flex items-center">
                <li>
                    <div>
                        <a href="#" className="text-base text-neutral-400 hover:text-gray-500">
                            Dashboard
                        </a>
                    </div>
                </li>
                {pages.map((page) => (
                    <li key={page.name}>
                        <div className="flex items-center">
                            <ChevronRightIcon aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-neutral-400 mx-1.5"/>
                            <a
                                href={page.href}
                                aria-current={page.current ? 'page' : undefined}
                                className={classNames(page.current ? 'text-[#1E2428] font-medium' : '', 'text-base font-normal text-neutral-400')}
                            >
                                {page.name}
                            </a>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default Breadcrumbs