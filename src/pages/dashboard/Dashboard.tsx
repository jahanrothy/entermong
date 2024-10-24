import PageTitle from "@/components/common/PageTitle.tsx";
import React from "react";

const Dashboard:React.FC = () => {

    return (
        <main className={'relative pb-4'} role="main">
            <PageTitle title={'Welcome'} breadcrumb={false} />
        </main>
    )
};

export default Dashboard;