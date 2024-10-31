import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Link, useLocation } from "react-router-dom";

// icons
import { default as DashboardIcon } from "@/assets/icons/dashboard.svg";

import InquiryManagment from "@/assets/icons/inpuiry.svg";
import NoticeManagment from "@/assets/icons/notice.svg";
import ParentManagment from "@/assets/icons/parent.svg";
import PaymentManagment from "@/assets/icons/payment.svg";
import ServiceManagment from "@/assets/icons/service.svg";
import OthersManagment from "@/assets/icons/settings.svg";
import TeacherManagment from "@/assets/icons/teacher.svg";

const MainMenu: React.FC = () => {
  // const { data, success } = useSelector<RootState, UserState>((state) => state.profile);

  const location = useLocation();
  const currentPath = location.pathname;

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: <DashboardIcon />,
      current: currentPath === "/admin",
    },
    {
      name: "Parent User Management",
      icon: <ParentManagment />,
      href: "/admin/parent-user-management",
      current: currentPath === "/admin/parent-user-management",
    },

    {
      name: "Teacher User Management",
      icon: <TeacherManagment />,
      href: "/admin/teacher-user-management",
      current: currentPath === "/admin/teacher-user-management",
    },

    {
      name: "Service Management",
      icon: <ServiceManagment />,
      href: "/admin/service-management",
      current: currentPath === "/admin/service-management",
    },

    {
      name: "Withdrawl Management",
      icon: <PaymentManagment />,
      href: "/admin/withdrawl-management",
      current: currentPath === "/admin/withdrawl-management",
    },

    {
      name: "Notice Management",
      icon: <NoticeManagment />,
      href: "/admin/notice-management",
      current: currentPath === "/admin/notice-management",
    },

    {
      name: "1:1 Inquiry Management",
      icon: <InquiryManagment />,
      href: "/admin/inquiry-management",
      current: currentPath === "/admin/inquiry-management",
    },

    {
      name: "Others Management",
      icon: <OthersManagment />,
      href: "/admin/others-management",
      current: currentPath === "/admin/others-management",
      children: [
        {
          name: "Category list",
          href: "/admin/products/category",
          current:
            currentPath === "/admin/products/category" ||
            currentPath === "/admin/products/category/create" ||
            currentPath.match(
              /\/admin\/products\/category\/[a-zA-Z0-9_-]+\/details/
            ) ||
            currentPath.match(
              /\/admin\/products\/category\/[a-zA-Z0-9_-]+\/edit/
            ),
        },
      ],
    },
  ];

  const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <nav className="flex flex-1 flex-col sidebar_menu">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                {!item.children ? (
                  <Link
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-[#F7E342] text-black font-bold current"
                        : "text-white hover:text-black hover:bg-[#F7E342]",
                      "group flex gap-x-2 rounded-lg p-3 px-4 text-base leading-6 font-medium"
                    )}
                  >
                    {React.cloneElement(item.icon, {
                      className: classNames(
                        item.current ? "current_active" : "text-gray-500",
                        "h-6 w-6 shrink-0"
                      ),
                    })}
                    {item.name}
                  </Link>
                ) : (
                  <Disclosure as="div">
                    {({ open }) => (
                      <>
                        <DisclosureButton
                          className={classNames(
                            item.current
                              ? "bg-primary text-white font-bold current_button"
                              : "text-primary hover:text-white hover:bg-[#F7E342]",
                            open
                              ? "bg-[#F7E342] text-black font-bold button_open"
                              : "",
                            "flex items-center w-full text-left rounded-lg gap-x-2 p-3 px-4 text-base leading-6 font-medium text-white"
                          )}
                        >
                          {React.cloneElement(item.icon, {
                            className: classNames(
                              item.current ? "text-white" : "text-gray-500",
                              open ? "op" : "",
                              "h-6 w-6 shrink-0"
                            ),
                          })}
                          {item.name}
                          <ChevronDownIcon
                            className={classNames(
                              item.current ? "text-white" : "text-indigo-200",
                              open
                                ? "rotate-180 text-white"
                                : "text-indigo-200",
                              "ml-auto h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        </DisclosureButton>
                        <DisclosurePanel
                          as="ul"
                          className="sub_items pl-5 pb-2 flex flex-col"
                        >
                          {item.children.map((subItem) => (
                            <li
                              key={subItem.name}
                              className={classNames(
                                subItem.current
                                  ? "sub_items_item_active"
                                  : "text-black",
                                "sub_items_item"
                              )}
                            >
                              <Link
                                to={subItem.href}
                                className={classNames(
                                  subItem.current
                                    ? "bg-gray-100 text-primary font-medium"
                                    : "text-gray-500 hover:text-primary hover:bg-gray-100",
                                  "group flex gap-x-3 rounded-md p-3 px-4 text-base font-normal"
                                )}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                )}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
