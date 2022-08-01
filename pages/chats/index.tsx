import { NextPage } from "next";

const Chats: NextPage = () => {
    return (
        <div className="py-10 divide-y-2 ">
            {[1, 1, 1, 1, 1].map((_, i) => (
                <div key={i} className="px-4 flex items-center space-x-3 py-3">
                    <div className="w-14 h-14 bg-gray-200 rounded-full" />
                    <div className="flex flex-col">
                        <p className="text-medium">Steve Jebs</p>
                        <p className="text-xs text-gray-500">Hi carrot colon</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Chats;
