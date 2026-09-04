// export default function AdminPage(){
//     return(
//         <div>
            
//         </div>
//     )
// }
import { Link } from "react-router-dom";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function AdminPage() {
    return (
        <div className="w-full min-h-screen bg-white flex flex-col justify-between">

            {/* Gray Webkit Scrollbar Styling */}
            <style>{`
                ::-webkit-scrollbar {
                    width: 8px;
                }
                ::-webkit-scrollbar-track {
                    background-color: transparent;
                }
                ::-webkit-scrollbar-thumb {
                    background-color: #9ca3af;
                    border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background-color: #6b7280;
                }
            `}</style>

            {/* Header */}
            <Header />

            {/* Main Wrapper with spacing below header */}
            <div className="w-full flex-1 flex pt-6">

                {/* Left Sidebar - Neutral Slate Theme */}
                <div className="w-64 bg-slate-900 text-white flex flex-col">

                    {/* Admin Panel Header */}
                    <div className="h-20 flex justify-center items-center border-b border-slate-800">
                        <h1 className="text-xl font-bold tracking-wide text-emerald-400">
                            Admin Panel
                        </h1>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col mt-4 px-3 gap-1">
                        <Link
                            to="/admin/adminProfile"
                            className="px-5 py-3 rounded-lg text-base font-medium text-slate-200 bg-slate-800 border border-transparent hover:border-emerald-400 hover:bg-slate-800/80 transition-all duration-200"
                        >
                            Profiles
                        </Link>
                    </div>

                </div>

                {/* Main Content Area */}
                <main className="flex-1 bg-white pb-6 sm:pb-8">

                    {/* Page Header */}
                    <div className="px-8 pb-4">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Admin Dashboard
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Welcome to the Admin Panel
                        </p>
                    </div>

                </main>

            </div>

            {/* Footer */}
            <Footer />

        </div>
    );
}