import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export default function AdminProfilePage () {
    return (
        <div className="w-full h-full bg-white relative">

            <Link
                to="/admin/addProfile"
                className="fixed bottom-8 right-8 w-14 h-14 flex justify-center items-center text-white bg-green-600 rounded-full shadow-lg shadow-green-200 hover:bg-green-700 transition-colors duration-200"
            >
                <FaPlus className="text-xl" />
            </Link>

        </div>
    );
}