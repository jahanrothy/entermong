import Logo from "@images/logo-auth.png";
import React from "react";
import MainMenu from "./Menu.tsx";

const Sidebar: React.FC = () => {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white p-5 rounded-r-2xl">
      <div className="pl-24 w-[180px] pb-0 py-1">
        <img className="w-full max-w-[120px]" src={Logo} alt="Potential AI" />
      </div>
      <MainMenu />
    </div>
  );
};

export default Sidebar;
