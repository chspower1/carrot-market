import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
    return (
        <div className="py-10 px-4 space-y-4">
            <div className="flex items-start space-x-2">
                <div className="w-10 aspect-square rounded-full bg-red-400" />
                <div className="w-1/2 text-sm p-2 border-2 border-gray-400 rounded-md">
                    Hi how much are you selling them for?
                </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
                <div className="w-10 aspect-square rounded-full bg-red-400" />
                <div className="w-1/2 text-sm p-2 border-2 border-gray-400 rounded-md">
                    I want ￦20,000
                </div>
            </div>
            <div className="fixed w-full bottom-4 mx-auto max-w-md inset-x-0">
                <div className="flex items-center relative">
                    <input
                        className="w-full pr-12 border-gray-400 focus:ring-orange-400 focus:outline-none focus:border-orange-400 rounded-full"
                        type="text"
                    />
                    <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
                        <button
                            className="flex items-center text-sm text-white font-extrabold bg-orange-500 px-3 rounded-full hover:bg-orange-600 hover:cursor-pointer
                        focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none"
                        >
                            &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatDetail;
