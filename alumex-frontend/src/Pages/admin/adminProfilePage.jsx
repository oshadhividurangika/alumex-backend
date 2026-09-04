import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function AdminProfilePage() {
    return (
        <div className="w-full min-h-screen bg-white relative flex flex-col justify-between">

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

            {/* Main Content with reduced top padding */}
            <main className="w-full flex-1 px-4 sm:px-6 md:px-8 lg:px-10 pt-2 sm:pt-4 pb-6 sm:pb-8">

                {/* Page Header */}
                <div className="px-8 pt-2 pb-4">

                    <h1 className="text-3xl font-bold text-gray-800">
                        Profiles
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Manage aluminum profiles
                    </p>

                </div>

            </main>

            {/* Floating Plus Button positioned higher up (bottom-16) */}
            <Link
                to="/admin/addProfile"
                className="fixed bottom-16 right-8 z-50 w-14 h-14 flex justify-center items-center text-white bg-green-600 rounded-full shadow-lg shadow-green-200 hover:bg-green-700 transition-colors duration-200"
            >
                <FaPlus className="text-xl" />
            </Link>

            {/* Footer */}
            <Footer />

        </div>
    );
}