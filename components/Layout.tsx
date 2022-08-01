import { NextPage } from "next";

interface LayoutProps {
    title?: string;
    canGoBack?: boolean;
    hasTabBar?: boolean;
    children: React.ReactNode;
}

export default function Layout({ title, canGoBack, hasTabBar, children }: LayoutProps):NextPage {
    return (
        <div>
            <div className="bg-white w-full text-lg font-medium fixed border-b top-0 flex justify-center items-center">{title? <span>{title}</sapn> : null}</div>
            {children}
            {hasTabBar?
            <nav>
                <div className="fixed mx-w-lg bottom-0 h-16 bg-white flex justify-center items-center text-orange-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        <span>Home</span>
                </div>
            </nav> : null}
        </div>
    );
}
