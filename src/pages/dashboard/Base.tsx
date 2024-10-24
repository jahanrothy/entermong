import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import { useState } from "react";
import { Outlet,} from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar.tsx";
import {XMarkIcon} from "@heroicons/react/24/outline";
import HeaderPanel from "@/components/section/Header.tsx";

const DashboardBase: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const MobileMenuHandler = () => {
    setSidebarOpen(true)
  }
  return (
    <main className="relative" role="main">
      <Transition show={sidebarOpen}>
        <Dialog className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <TransitionChild
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </TransitionChild>

          <div className="fixed inset-0 flex">
            <TransitionChild
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                <TransitionChild
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </TransitionChild>
                <Sidebar />
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[320px] lg:flex-col">
        <Sidebar />
      </div>

      <div className="lg:pl-[322px]">
        <HeaderPanel MobileMenu={MobileMenuHandler} />
        <main className="max-w-[1366] px-4">
          <Outlet />
        </main>
      </div>
    </main>
  );
};

export default DashboardBase;
