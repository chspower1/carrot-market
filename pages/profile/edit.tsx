import { NextPage } from "next";

const ProfileEdit: NextPage = () => {
    return (
        <div className="py-10 px-4 space-y-4">
            <div>
                <div className="flex items-center space-x-3">
                    <div className="w-14 aspect-square rounded-full bg-orange-400" />
                    <label htmlFor="picture" className="hover:text-orange-400 cursor-pointer">
                        Change photo
                        <input id="picture" type="file" className="hidden" accept="image/*" />
                    </label>
                </div>
                <label htmlFor="email" className="text-sm font-bold text-gray-700 ">
                    Email
                </label>
                <div className="mt-1">
                    <input
                        id="email"
                        type="email"
                        required
                        className="appearance-none w-full px-3 py-2 rounded-lg shadow-sm placeholder-gray-400 border-gray-300
                    focus:outline-none focus:ring-orange-500
                    focus:border-orange-500 "
                    />
                </div>
            </div>
            <div>
                <label htmlFor="input" className="text-sm font-bold text-gray-700 ">
                    Phone
                </label>
                <div className="flex">
                    <span className="flex justify-center items-center px-3 py-2 border-2 rounded-l-lg">
                        +82
                    </span>
                    <input
                        id="input"
                        type="number"
                        required
                        className="appearance-none w-full px-3 py-2 rounded-r-lg shadow-sm placeholder-gray-400 border-gray-300
                    focus:outline-none focus:ring-orange-500
                    focus:border-orange-500 "
                    />
                </div>
            </div>
            <button
                className="w-full bg-orange-500 hover:bg-orange-600 rounded-lg p-2.5 text-white mt-2 text-sm
                focus:outline-none focus:ring-2
        focus:ring-offset-2 focus:ring-orange-500
        "
            >
                Updata Profile
            </button>
        </div>
    );
};

export default ProfileEdit;
