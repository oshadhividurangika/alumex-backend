// import { useState } from "react"
// import uploadMedia from "../../Utils/mediaUpload";

// export default function AdminaddProfilesPage(){

//     const [image,setImage]=useState("");
//     const [isAvailable,setIsAvailable]=useState(true);
//     //const[stock,setStock]=useState(0);


//    async function handleSave(){
//     try{
//         const token=localStorage.getItem("token")
//         if(token==null){
//             toast.error("You must be logged in to perform this action.")
//             window.location.href="/login"
//             return;
//         }
//         uploadMedia(images[0]) //not for multiple images

        
//     }catch(error){
//         toast.error(error?.response?.data?.message || "Failed to add profile. Please try again.")
//     }

//     }

//     return(
//         <div className=" sticky top-0 w-full h-full bg-white p-8 flex flex-col items-center overflow-y-scroll">
//             <div>

//             <h1 className="text-3xl font-bold text-gray-800">
//                 Add New Profiles
//             </h1>

//             <div className="justify-center justify-between">
//                 <button onClick={handleSave} className="px-4 py-2">Save</button>
//                 <button className="px-4">Cancle</button>

//             </div>

//             </div>

//             <div className="w-full flex flex-wrap">

//                 <div className="">
//                     <label className="bg-white">Profile Name</label>
//                     <input className=" value=(profileName) onChange=[(e)=>{setProfileName(e.target.value)}]"/>
//                 </div>

//                 <div className="">
//                     <label className="bg-white">Profile Type</label>
//                     <select>
//                         <option value="Hollow">Hollow</option>
//                         <option value="Solid">Solid</option>
//                     </select>
//                 </div>

//                 <div className="">
//                     <label className="bg-white">Temper</label>
//                     <select>
//                         <option value="T4">T4</option>
//                         <option value="T5">T5</option>
//                         <option value="T6">T6</option>
//                         <option value="T66">T66</option>
//                     </select>
//                 </div>

//                 <div className="">
//                     <label className="bg-white">Alloy</label>
//                     <select>
//                         <option value="1085">1085</option>
//                         <option value="6005">6005</option>
//                         <option value="6060">6060</option>
//                         <option value="6061">6061</option>
//                         <option value="6063">6063</option>
//                         <option value="6082">6082</option>
//                     </select>
//                 </div>

//                 <div className="">
//                     <label className="bg-white">Plant</label>
//                         <div className="flex flex-col gap-2 mt-2">
//         <label>
//             <input
//                 type="checkbox"
//                 value="Alumex"
//                 className="mr-2"
//             />
//             Alumex
//         </label>

//         <label>
//             <input
//                 type="checkbox"
//                 value="Alco"
//                 className="mr-2"
//             />
//             Alco
//         </label>

//         <label>
//             <input
//                 type="checkbox"
//                 value="Prime"
//                 className="mr-2"
//             />
//             Prime
//         </label>
//     </div>

//         </div>
//     )

// }



import { useState } from "react";
import { toast } from "react-hot-toast";
import uploadMedia from "../../Utils/mediaUpload";

export default function AdminaddProfilesPage() {

    const [image, setImage] = useState("");
    const [drawing, setDrawing] = useState("");
    const [isAvailable, setIsAvailable] = useState(true);

    const [profileName, setProfileName] = useState("");
    const [profileType, setProfileType] = useState("Hollow");
    const [temper, setTemper] = useState("T4");
    const [alloy, setAlloy] = useState("1085");
    const [plants, setPlants] = useState([]);

    function handlePlantChange(e) {

        const plant = e.target.value;

        if (e.target.checked) {
            setPlants([...plants, plant]);
        } else {
            setPlants(plants.filter((item) => item !== plant));
        }

    }

    async function handleSave() {

        try {

            const token = localStorage.getItem("token");

            if (token == null) {
                toast.error("You must be logged in to perform this action.");
                window.location.href = "/login";
                return;
            }

            if (profileName.trim() === "") {
                toast.error("Please enter a profile name.");
                return;
            }

            if (plants.length === 0) {
                toast.error("Please select at least one plant.");
                return;
            }

            if (image) {
                await uploadMedia(image);
            }

            if (drawing) {
                await uploadMedia(drawing);
            }

            console.log({
                profileName,
                profileType,
                temper,
                alloy,
                plants,
                isAvailable,
                image,
                drawing
            });

            toast.success("Profile added successfully.");

        } catch (error) {

            toast.error(
                error?.response?.data?.message ||
                "Failed to add profile. Please try again."
            );

        }

    }

    return (

        <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 overflow-y-auto">

            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

                    <div>

                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                            Add New Profile
                        </h1>

                    </div>

                    <div className="flex gap-3">

                        {/* Cancel Button */}
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
                        >
                            Cancel
                        </button>

                        {/* Save Button */}
                        <button
                            type="button"
                            onClick={handleSave}
                            className="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
                        >
                            Save
                        </button>

                    </div>

                </div>


                {/* Form */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-6 md:p-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                        {/* Profile Name */}
                        <div className="flex flex-col gap-2">

                            <label className="text-sm font-medium text-gray-700">
                                Profile Name
                            </label>

                            <input
                                type="text"
                                value={profileName}
                                onChange={(e) => {
                                    setProfileName(e.target.value);
                                }}
                                placeholder="Enter profile name"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            />

                        </div>


                        {/* Profile Type */}
                        <div className="flex flex-col gap-2">

                            <label className="text-sm font-medium text-gray-700">
                                Profile Type
                            </label>

                            <select
                                value={profileType}
                                onChange={(e) => {
                                    setProfileType(e.target.value);
                                }}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            >

                                <option value="Hollow">
                                    Hollow
                                </option>

                                <option value="Solid">
                                    Solid
                                </option>

                            </select>

                        </div>


                        {/* Temper */}
                        <div className="flex flex-col gap-2">

                            <label className="text-sm font-medium text-gray-700">
                                Temper
                            </label>

                            <select
                                value={temper}
                                onChange={(e) => {
                                    setTemper(e.target.value);
                                }}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            >

                                <option value="T4">T4</option>
                                <option value="T5">T5</option>
                                <option value="T6">T6</option>
                                <option value="T66">T66</option>

                            </select>

                        </div>


                        {/* Alloy */}
                        <div className="flex flex-col gap-2">

                            <label className="text-sm font-medium text-gray-700">
                                Alloy
                            </label>

                            <select
                                value={alloy}
                                onChange={(e) => {
                                    setAlloy(e.target.value);
                                }}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            >

                                <option value="1085">1085</option>
                                <option value="6005">6005</option>
                                <option value="6060">6060</option>
                                <option value="6061">6061</option>
                                <option value="6063">6063</option>
                                <option value="6082">6082</option>

                            </select>

                        </div>


                        {/* Plant */}
                        <div className="flex flex-col gap-3 md:col-span-2">

                            <label className="text-sm font-medium text-gray-700">
                                Plant
                            </label>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">


                                {/* Alumex */}
                                <label className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-50 transition">

                                    <input
                                        type="checkbox"
                                        value="Alumex"
                                        checked={plants.includes("Alumex")}
                                        onChange={handlePlantChange}
                                        className="w-4 h-4 accent-green-600"
                                    />

                                    <span className="text-gray-700">
                                        Alumex
                                    </span>

                                </label>


                                {/* Alco */}
                                <label className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-50 transition">

                                    <input
                                        type="checkbox"
                                        value="Alco"
                                        checked={plants.includes("Alco")}
                                        onChange={handlePlantChange}
                                        className="w-4 h-4 accent-green-600"
                                    />

                                    <span className="text-gray-700">
                                        Alco
                                    </span>

                                </label>


                                {/* Prime */}
                                <label className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-50 transition">

                                    <input
                                        type="checkbox"
                                        value="Prime"
                                        checked={plants.includes("Prime")}
                                        onChange={handlePlantChange}
                                        className="w-4 h-4 accent-green-600"
                                    />

                                    <span className="text-gray-700">
                                        Prime
                                    </span>

                                </label>

                            </div>

                        </div>


                        {/* Availability */}
                        <div className="flex flex-col gap-2 md:col-span-2">

                            <label className="text-sm font-medium text-gray-700">
                                Availability
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">

                                <input
                                    type="checkbox"
                                    checked={isAvailable}
                                    onChange={(e) => {
                                        setIsAvailable(e.target.checked);
                                    }}
                                    className="w-4 h-4 accent-green-600"
                                />

                                <span className="text-gray-700">
                                    Profile is available
                                </span>

                            </label>

                        </div>


                        {/* Profile Image + Drawing */}
                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">


                            {/* Profile Image */}
                            <div className="flex flex-col gap-2">

                                <label className="text-sm font-medium text-gray-700">
                                    Profile Image
                                </label>

                                <div className="flex items-center gap-4">

                                    <input
                                        id="profileImage"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            setImage(e.target.files[0]);
                                        }}
                                        className="hidden"
                                    />

                                    <label
                                        htmlFor="profileImage"
                                        className="px-5 py-2.5 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition font-medium"
                                    >
                                        Choose Image
                                    </label>

                                    {image && (
                                        <span className="text-sm text-gray-600 truncate">
                                            {image.name}
                                        </span>
                                    )}

                                </div>

                            </div>


                            {/* Drawing */}
                            <div className="flex flex-col gap-2">

                                <label className="text-sm font-medium text-gray-700">
                                    Drawing
                                </label>

                                <div className="flex items-center gap-4">

                                    <input
                                        id="drawing"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            setDrawing(e.target.files[0]);
                                        }}
                                        className="hidden"
                                    />

                                    <label
                                        htmlFor="drawing"
                                        className="px-5 py-2.5 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition font-medium"
                                    >
                                        Choose Drawing
                                    </label>

                                    {drawing && (
                                        <span className="text-sm text-gray-600 truncate">
                                            {drawing.name}
                                        </span>
                                    )}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}


