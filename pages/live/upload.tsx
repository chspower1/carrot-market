import type { NextPage } from "next";

const LiveUpload: NextPage = () => {
    return (
        <div className="px-4 py-16">
            <div>
                {/* 이미지업로드 */}
                <div className="pt-4  px-4">
                    <div className="w-full rounded-md shadow-md bg-slate-300 aspect-video" />
                    <h3 className="mt-2 text-gray-700 text-lg">Lets try potatos</h3>
                </div>
            </div>
            <div className="my-5">
                <label htmlFor="price" className="mb-1 block text-sm font-bold text-gray-500">
                    Price
                </label>
                <div className="relative flex items-center">
                    <div className="absolute lefr-0 pl-3 flex items-center justify-center pointer-events-none">
                        <span className="text-gray-500 text-sm font-bold">$</span>
                    </div>
                    <input
                        id="price"
                        type="text"
                        placeholder="0.00"
                        className="appearance-none w-full pl-6 px-3 py-2 rounded-lg shadow-sm placeholder-gray-400 border-gray-300
                                focus:outline-none focus:ring-orange-500
                                focus:border-orange-500 "
                    />
                    <div className="absolute right-3 pointer-events-none">
                        <span>USD</span>
                    </div>
                </div>
            </div>
            <div>
                <label className="mb-1 block text-sm font-bold text-gray-500">Description</label>
                <div>
                    <textarea
                        className="mt-1 w-full rounded-xl border-gray-300 shadow-sm
                        focus:ring-2 focus:ring-offset-2 focus:outline-none focus:ring-orange-400 focus:border-none "
                        rows={4}
                    />
                </div>
            </div>
            <button
                className="w-full bg-orange-500 hover:bg-orange-600 rounded-lg p-2.5 text-white mt-2 text-sm
                        focus:outline-none focus:ring-2
                        focus:ring-offset-2 focus:ring-orange-500
                        "
            >
                Go Live
            </button>
        </div>
    );
};

export default LiveUpload;
