import ViewDetails from "@/assets/icons/view.svg";

const ServiceTable: React.FC = () => {
  return (
    <table className="min-w-full  leading-normal">
      <thead className="bg-[#EDEFEE] ">
        <tr>
          <th className="px-5 py-3  text-left text-base font-medium text-[#727272] capitalize">
            Service ID
          </th>
          <th className="px-5 py-3  text-left text-base font-medium text-[#727272] capitalize">
            Parent Name
          </th>
          <th className="px-5 py-3 pr-0 text-left   text-base font-medium text-[#727272] capitalize">
            Teacher Name
          </th>
          <th className="px-5 py-3 pl-0 text-left text-base font-medium text-[#727272] capitalize">
            Service Date
          </th>
          <th className="px-5 py-3 pl-0 text-left text-base font-medium text-[#727272] capitalize">
            Amount
          </th>
          <th className="px-5 py-3  text-left text-base font-medium text-[#727272] capitalize">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className=" border-b border-gray-200 bg-white text-sm">
          <td className="px-5 py-3 text-sm">
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              #127899
            </p>
          </td>

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
              15-10-2024
            </p>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              $5000
            </p>
          </td>

          <td className="px-5 text-sm text-[#6BA475] ">
            <button
              type="button"
              className="flex items-center justify-center  w-11 h-11 bg-[#EDEFEE] text-[#6BA475] rounded-lg"
            >
              <ViewDetails />
            </button>
          </td>
        </tr>

        <tr className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
          <td className="px-5 py-3 text-sm">
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              #127899
            </p>
          </td>

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
              15-10-2024
            </p>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              $5000
            </p>
          </td>

          <td className="px-5 text-sm text-[#6BA475] ">
            <button
              type="button"
              className="flex items-center justify-center  w-11 h-11 bg-[#EDEFEE] text-[#6BA475] rounded-lg"
            >
              <ViewDetails />
            </button>
          </td>
        </tr>

        <tr className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
          <td className="px-5 py-3 text-sm">
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              #127899
            </p>
          </td>

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
              15-10-2024
            </p>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              $5000
            </p>
          </td>

          <td className="px-5 text-sm text-[#6BA475] ">
            <button
              type="button"
              className="flex items-center justify-center  w-11 h-11 bg-[#EDEFEE] text-[#6BA475] rounded-lg"
            >
              <ViewDetails />
            </button>
          </td>
        </tr>

        <tr className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
          <td className="px-5 py-3 text-sm">
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              #127899
            </p>
          </td>

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
              15-10-2024
            </p>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              $5000
            </p>
          </td>

          <td className="px-5 text-sm text-[#6BA475] ">
            <button
              type="button"
              className="flex items-center justify-center  w-11 h-11 bg-[#EDEFEE] text-[#6BA475] rounded-lg"
            >
              <ViewDetails />
            </button>
          </td>
        </tr>

        <tr className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
          <td className="px-5 py-3 text-sm">
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              #127899
            </p>
          </td>

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
              15-10-2024
            </p>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              $5000
            </p>
          </td>

          <td className="px-5 text-sm text-[#6BA475] ">
            <button
              type="button"
              className="flex items-center justify-center  w-11 h-11 bg-[#EDEFEE] text-[#6BA475] rounded-lg"
            >
              <ViewDetails />
            </button>
          </td>
        </tr>

        <tr className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
          <td className="px-5 py-3 text-sm">
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              #127899
            </p>
          </td>

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
              15-10-2024
            </p>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              $5000
            </p>
          </td>

          <td className="px-5 text-sm text-[#6BA475] ">
            <button
              type="button"
              className="flex items-center justify-center  w-11 h-11 bg-[#EDEFEE] text-[#6BA475] rounded-lg"
            >
              <ViewDetails />
            </button>
          </td>
        </tr>

        <tr className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
          <td className="px-5 py-3 text-sm">
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              #127899
            </p>
          </td>

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
              15-10-2024
            </p>
          </td>

          <td>
            <p className="text-[#242424] font-medium text-base leading-5 whitespace-no-wrap">
              $5000
            </p>
          </td>

          <td className="px-5 text-sm text-[#6BA475] ">
            <button
              type="button"
              className="flex items-center justify-center  w-11 h-11 bg-[#EDEFEE] text-[#6BA475] rounded-lg"
            >
              <ViewDetails />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ServiceTable;
