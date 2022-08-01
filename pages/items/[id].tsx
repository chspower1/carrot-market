import type { NextPage } from "next";

const ItemDetail: NextPage = () => {
    return (
        <div className="px-5">
            <div>
                <div className="h-96  bg-gray-200" />
                <div className="flex items-center space-x-3 py-3 border-y-2">
                    <div className="w-14 h-14 bg-gray-200 rounded-full" />
                    <div className="flex flex-col">
                        <p className="text-medium">Steve Jebs</p>
                        <p className="text-xs text-gray-500">View profile &rarr;</p>
                    </div>
                </div>
                <div className=" mt-2 pt-5">
                    <h1 className="text-3xl font-bold ">Galaxy S50</h1>
                    <span className="text-3xl font-medium text-gray-900">$140</span>
                    <p className="text-base mt-4 text-gray-700">
                        My money&apos;s in that office, right? If she start giving me some bullshit
                        about it ain&apos;t there, and we got to go someplace else and get it,
                        I&apos;m gonna shoot you in the head then and there. Then I&apos;m gonna
                        shoot that bitch in the kneecaps, find out where my goddamn money is. She
                        gonna tell me too. Hey, look at me when I&apos;m talking to you,
                        motherfucker. You listen: we go in there, and that ni**a Winston or anybody
                        else is in there, you the first motherfucker to get shot. You understand?
                    </p>
                    <div className="flex items-center justify-between my-5">
                        <button
                            className="flex-1 w-full text-white p-3 bg-orange-500
                        rounded-xl shadow-sm  focus:ring-2 focus:ring-offset-2 focus:outline-none focus:ring-orange-500"
                        >
                            Talk to seller
                        </button>
                        <button className="p-3 flex justify-center itmes-center text-red-400">
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold">Similar items</h2>
                <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((_, i) => (
                        <div key={i}>
                            <div className="h-56 w-full bg-gray-500" />
                            <h3 className="mt-2 text-medium">Galaxy S60</h3>
                            <p className="text-sm  font-bold">$6</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
