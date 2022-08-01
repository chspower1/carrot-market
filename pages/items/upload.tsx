import type { NextPage } from "next";

const Upload: NextPage = () => {
    return (
        <div className="px-4 py-16">
            <div>
                {/* 이미지업로드 */}
                <label className="w-full text-gray-500 hover:border-orange-400 hover:text-orange-400 flex items-center justify-center border-2 border-dashed boder-gray-300 h-48 rounded-md cursor-pointer transition-all">
                    <svg
                        className="h-12 w-12"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <input className="hidden" type="file" />
                </label>
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
                Upload product
            </button>
        </div>
    );
};

export default Upload;
