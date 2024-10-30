import Approve from "@/assets/icons/approve.svg";
import Reject from "@/assets/icons/reject.svg";
import ViewDetails from "@/assets/icons/view.svg";

const TeacherTable: React.FC = () => {
  return (
    <table className="min-w-full  leading-normal">
      <thead className="bg-[#EDEFEE] ">
        <tr>
          <th className="px-5 py-3   text-left text-base font-medium text-[#727272] capitalize">
            Nanny Name
          </th>
          <th className="px-5 py-3 pl-0  text-left text-base font-medium text-[#727272] capitalize">
            Email
          </th>
          <th className="px-5 py-3 text-left pl-0  text-base font-medium text-[#727272] capitalize">
            Adress
          </th>
          <th className="px-5 py-3 pl-0 text-left text-base font-medium text-[#727272] capitalize">
            Contact
          </th>
          <th className="px-5 py-3 pl-24 text-left text-base font-medium text-[#727272] capitalize">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
          <td className="px-5 py-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-12 h-12">
                <img
                  className="w-full h-full rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
                Lee-Ji-Won
              </p>
              <div className="ml-3"></div>
            </div>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              demoleejiwon@gmail.com
            </p>
          </td>
          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              demoleejiwon
            </p>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              12345567889
            </p>
          </td>

          <td className="px-5 text-sm  text-[#6BA475] ">
            <div className=" flex items-center gap-3 pl-7 ">
              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#EDEFEE] text-[#6BA475] rounded-lg"
              >
                <ViewDetails />
              </button>

              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#DBEDE1] rounded-lg"
              >
                <Approve />
              </button>

              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#F0D7D7] rounded-lg"
              >
                <Reject />
              </button>
            </div>
          </td>
        </tr>

        <tr className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
          <td className="px-5 py-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-12 h-12">
                <img
                  className="w-full h-full rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
                Lee-Ji-Won
              </p>
              <div className="ml-3"></div>
            </div>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              demoleejiwon@gmail.com
            </p>
          </td>
          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              demoleejiwon
            </p>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              12345567889
            </p>
          </td>

          <td className="px-5 text-sm  text-[#6BA475] ">
            <div className=" flex items-center gap-3 pl-7 ">
              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#EDEFEE] text-[#6BA475] rounded-lg"
              >
                <ViewDetails />
              </button>

              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#DBEDE1] rounded-lg"
              >
                <Approve />
              </button>

              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#F0D7D7] rounded-lg"
              >
                <Reject />
              </button>
            </div>
          </td>
        </tr>

        <tr className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
          <td className="px-5 py-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-12 h-12">
                <img
                  className="w-full h-full rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
                Lee-Ji-Won
              </p>
              <div className="ml-3"></div>
            </div>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              demoleejiwon@gmail.com
            </p>
          </td>
          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              demoleejiwon
            </p>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              12345567889
            </p>
          </td>

          <td className="px-5 text-sm  text-[#6BA475] ">
            <div className=" flex items-center gap-3 pl-7 ">
              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#EDEFEE] text-[#6BA475] rounded-lg"
              >
                <ViewDetails />
              </button>

              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#DBEDE1] rounded-lg"
              >
                <Approve />
              </button>

              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#F0D7D7] rounded-lg"
              >
                <Reject />
              </button>
            </div>
          </td>
        </tr>

        <tr className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
          <td className="px-5 py-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-12 h-12">
                <img
                  className="w-full h-full rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
                Lee-Ji-Won
              </p>
              <div className="ml-3"></div>
            </div>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              demoleejiwon@gmail.com
            </p>
          </td>
          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              demoleejiwon
            </p>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              12345567889
            </p>
          </td>

          <td className="px-5 text-sm  text-[#6BA475] ">
            <div className=" flex items-center gap-3 pl-7 ">
              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#EDEFEE] text-[#6BA475] rounded-lg"
              >
                <ViewDetails />
              </button>

              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#DBEDE1] rounded-lg"
              >
                <Approve />
              </button>

              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#F0D7D7] rounded-lg"
              >
                <Reject />
              </button>
            </div>
          </td>
        </tr>

        <tr className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
          <td className="px-5 py-4 text-sm">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-12 h-12">
                <img
                  className="w-full h-full rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
                Lee-Ji-Won
              </p>
              <div className="ml-3"></div>
            </div>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              demoleejiwon@gmail.com
            </p>
          </td>
          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              demoleejiwon
            </p>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              12345567889
            </p>
          </td>

          <td className="px-5 text-sm  text-[#6BA475] ">
            <div className=" flex items-center gap-3 pl-7 ">
              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#EDEFEE] text-[#6BA475] rounded-lg"
              >
                <ViewDetails />
              </button>

              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#DBEDE1] rounded-lg"
              >
                <Approve />
              </button>

              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#F0D7D7] rounded-lg"
              >
                <Reject />
              </button>
            </div>
          </td>
        </tr>

        <tr className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
          <td className="px-5 py-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-12 h-12">
                <img
                  className="w-full h-full rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
                Lee-Ji-Won
              </p>
              <div className="ml-3"></div>
            </div>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              demoleejiwon@gmail.com
            </p>
          </td>
          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              demoleejiwon
            </p>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              12345567889
            </p>
          </td>

          <td className="px-5 text-sm  text-[#6BA475] ">
            <div className=" flex items-center gap-3 pl-7 ">
              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#EDEFEE] text-[#6BA475] rounded-lg"
              >
                <ViewDetails />
              </button>

              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#DBEDE1] rounded-lg"
              >
                <Approve />
              </button>

              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#F0D7D7] rounded-lg"
              >
                <Reject />
              </button>
            </div>
          </td>
        </tr>

        <tr className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
          <td className="px-5 py-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-12 h-12">
                <img
                  className="w-full h-full rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
                Lee-Ji-Won
              </p>
              <div className="ml-3"></div>
            </div>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              demoleejiwon@gmail.com
            </p>
          </td>
          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              demoleejiwon
            </p>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              12345567889
            </p>
          </td>

          <td className="px-5 text-sm  text-[#6BA475] ">
            <div className=" flex items-center gap-3 pl-7 ">
              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#EDEFEE] text-[#6BA475] rounded-lg"
              >
                <ViewDetails />
              </button>

              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#DBEDE1] rounded-lg"
              >
                <Approve />
              </button>

              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#F0D7D7] rounded-lg"
              >
                <Reject />
              </button>
            </div>
          </td>
        </tr>

        <tr className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
          <td className="px-5 py-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-12 h-12">
                <img
                  className="w-full h-full rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
                Lee-Ji-Won
              </p>
              <div className="ml-3"></div>
            </div>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              demoleejiwon@gmail.com
            </p>
          </td>
          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              demoleejiwon
            </p>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              12345567889
            </p>
          </td>

          <td className="px-5 text-sm  text-[#6BA475] ">
            <div className=" flex items-center gap-3 pl-7 ">
              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#EDEFEE] text-[#6BA475] rounded-lg"
              >
                <ViewDetails />
              </button>

              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#DBEDE1] rounded-lg"
              >
                <Approve />
              </button>

              <button
                type="button"
                className="flex items-center justify-center  w-11 h-11 bg-[#F0D7D7] rounded-lg"
              >
                <Reject />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TeacherTable;
