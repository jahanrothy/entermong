import Breadcrumbs from "@/components/common/Breadcrumbs.tsx";
import { PageTitleProps } from "@/types/pageTitleProps";
import React from "react";

const PageTitle: React.FC<PageTitleProps> = ({
  children,
  title,
  breadcrumb,
}) => {
  return (
    <div className={"flex items-center py-5 px-5"}>
      <div className={"flex-auto"}>
        <h1 className={"font-extrabold text-2xl text-[#1E2428] "}>{title}</h1>
        {breadcrumb && <Breadcrumbs />}
      </div>

      {children && <div className={"flex-shrink-0"}>{children}</div>}
    </div>
  );
};

export default PageTitle;
