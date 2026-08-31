// export default function AdminPage(){
//     return(
//         <div>
            
//         </div>
//     )
// }

import { Link } from "react-router-dom";

export default function AdminPage(){

    return(
        <div className="w-full h-screen bg-white flex">

            {/* Left Sidebar */}
            <div className="w-64 h-full bg-green-600 text-white flex flex-col">

                {/* Admin Panel */}
                <div className="h-24 flex justify-center items-center border-b border-green-500">
                    <h1 className="text-2xl font-bold">
                        Admin Panel
                    </h1>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col mt-6">

                    <Link
                        to="/admin/adminProfile"
                        className="px-8 py-4 text-lg font-medium hover:bg-green-700 transition-colors duration-200"
                    >
                        Profiles
                    </Link>

                </div>

            </div>

            {/* Main Content */}
            <div className="flex-1 h-full bg-white">

                <div className="p-8">

                    <h2 className="text-3xl font-bold text-gray-800">
                        Admin Dashboard
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Welcome to the Admin Panel
                    </p>

                </div>

            </div>

        </div>
    )
}