import PageTitle from "@/components/common/PageTitle.tsx";

export const NoticeManagementList: React.FC = () => {
  return (
    <main className={"relative pb-4"} role="main">
      <PageTitle
        title={" Management Notice"}
        breadcrumb={false}
      />
    </main>
  );
};
