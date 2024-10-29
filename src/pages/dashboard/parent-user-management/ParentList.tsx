import FilterIcon from "@/assets/icons/filter.svg";
import PageTitle from "@/components/common/PageTitle.tsx";
import Pagination from "../../../components/table/Pagination.tsx";
import ParentTable from "./ParentTable.tsx";

export const ParentUserManagementList: React.FC = () => {
  const totalItems = 100;
  const itemsPerPage = 7;

  const handlePageChange = (pageNumber: number) => {
    console.log("Page changed to:", pageNumber);
  };
  return (
    <main className={"relative pb-7 mb-6 bg-white my-3 rounded-xl"} role="main">
      <div className=" flex justify-between  items-center">
        <PageTitle title={"Parent List"} breadcrumb={false} />

        <div className="relative pr-5 py-4">
          <label className="relative">
            <input
              className="placeholder:text-[#9C9C9C] placeholder:text-sm placeholder:font-medium border-1.5 rounded-3xl border-[#DEEBE7] block  w-full py-2.5 px-5 pl-9 shadow-sm focus:outline-none focus:outline-0 sm:text-sm "
              placeholder="Search here..."
              type="text"
              name="search"
            />

            <span className="absolute  top-3 px-2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>

            <button
              type="button"
              className=" absolute flex items-center justify-center  right-0 top-[4.5px] w-14 h-8 mr-3 bg-[#E5EAE7] text-[#8B8D8C] rounded-3xl"
            >
              <FilterIcon />
            </button>
          </label>
        </div>

        {/* <SearchBar classNameNameName={""} placeholder={placeholder} /> */}
      </div>
      <ParentTable />

      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onSubmit={handlePageChange}
      />
    </main>
  );
};
