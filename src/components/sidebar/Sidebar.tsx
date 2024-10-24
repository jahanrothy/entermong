
import Logo from '@/assets/e4p-logo.jpeg'
import MainMenu from "./Menu.tsx";
import React from "react";

const Sidebar:React.FC = () => {
    return (
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white p-5 rounded-r-2xl">
            <div className="flex-shrink-0 w-[160px] pt-5 pb-8">
                <img
                    className="w-full max-w-[180px]"
                    src={Logo}
                    alt="Potential AI"
                />
            </div>
            <MainMenu />
        </div>
    )
}

export default Sidebar