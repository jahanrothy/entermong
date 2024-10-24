import {MessageProps} from "../types/message";

const Message: React.FC<MessageProps> = ({title, loading, success, error, isUpdate}) => {
    return (
        <div className="status-message block my-3">
            {error && (
                <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 px-4 py-2" role="alert">
                    <p className="font-bold">Failed!</p>
                    <p className='text-[14px]'>{title} was not {isUpdate ? 'updated' : 'created'}!</p>
                </div>
            )}
            {loading && (
                <div id="loading-overlay"
                     className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-60">

                    <svg className="animate-spin h-8 w-8 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>

                    <span
                        className="text-white text-[18px] font-bold"
                    >Please wait! {title} is {isUpdate ? 'updating' : 'creating'}...
                    </span>
                </div>
            )}
            {success && !loading && !error && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 px-4 py-2" role="alert">
                    <p className="font-bold">Success!</p>
                    <p className='text-[14px]'>{title} {isUpdate ? 'updated' : 'created'} successfully!</p>
                </div>
            )}
        </div>
    );
};

export default Message;
