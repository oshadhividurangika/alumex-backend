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



// import { useState } from "react";
// import { toast } from "react-hot-toast";
// import uploadMedia from "../../Utils/mediaUpload";

// export default function AdminaddProfilesPage() {

//     const [image, setImage] = useState("");
//     const [drawing, setDrawing] = useState("");
//     const [isAvailable, setIsAvailable] = useState(true);

//     const [profileName, setProfileName] = useState("");
//     const [profileType, setProfileType] = useState("Hollow");
//     const [temper, setTemper] = useState("T4");
//     const [alloy, setAlloy] = useState("1085");
//     const [plants, setPlants] = useState([]);

//     function handlePlantChange(e) {

//         const plant = e.target.value;

//         if (e.target.checked) {
//             setPlants([...plants, plant]);
//         } else {
//             setPlants(plants.filter((item) => item !== plant));
//         }

//     }

//     async function handleSave() {

//         try {

//             const token = localStorage.getItem("token");

//             if (token == null) {
//                 toast.error("You must be logged in to perform this action.");
//                 window.location.href = "/login";
//                 return;
//             }

//             if (profileName.trim() === "") {
//                 toast.error("Please enter a profile name.");
//                 return;
//             }

//             if (plants.length === 0) {
//                 toast.error("Please select at least one plant.");
//                 return;
//             }

//             if (image) {
//                 await uploadMedia(image);
//             }

//             if (drawing) {
//                 await uploadMedia(drawing);
//             }

//             console.log({
//                 profileName,
//                 profileType,
//                 temper,
//                 alloy,
//                 plants,
//                 isAvailable,
//                 image,
//                 drawing
//             });

//             toast.success("Profile added successfully.");

//         } catch (error) {

//             toast.error(
//                 error?.response?.data?.message ||
//                 "Failed to add profile. Please try again."
//             );

//         }

//     }

//     return (

//        <div className="w-full h-screen bg-gray-50 p-4 sm:p-6 md:p-8 overflow-y-auto">

//             <div className="max-w-5xl mx-auto">

//                 {/* Header */}
//                 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

//                     <div>

//                         <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
//                             Add New Profile
//                         </h1>

//                     </div>

//                     <div className="flex gap-3">

//                         {/* Cancel Button */}
//                         <button
//                             type="button"
//                             onClick={() => window.history.back()}
//                             className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
//                         >
//                             Cancel
//                         </button>

//                         {/* Save Button */}
//                         <button
//                             type="button"
//                             onClick={handleSave}
//                             className="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
//                         >
//                             Save
//                         </button>

//                     </div>

//                 </div>


//                 {/* Form */}
//                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-6 md:p-8">

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


//                         {/* Profile Name */}
//                         <div className="flex flex-col gap-2">

//                             <label className="text-sm font-medium text-gray-700">
//                                 Profile Name
//                             </label>

//                             <input
//                                 type="text"
//                                 value={profileName}
//                                 onChange={(e) => {
//                                     setProfileName(e.target.value);
//                                 }}
//                                 placeholder="Enter profile name"
//                                 className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                             />

//                         </div>


//                         {/* Profile Type */}
//                         <div className="flex flex-col gap-2">

//                             <label className="text-sm font-medium text-gray-700">
//                                 Profile Type
//                             </label>

//                             <select
//                                 value={profileType}
//                                 onChange={(e) => {
//                                     setProfileType(e.target.value);
//                                 }}
//                                 className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                             >

//                                 <option value="Hollow">
//                                     Hollow
//                                 </option>

//                                 <option value="Solid">
//                                     Solid
//                                 </option>

//                             </select>

//                         </div>


//                         {/* Temper */}
//                         <div className="flex flex-col gap-2">

//                             <label className="text-sm font-medium text-gray-700">
//                                 Temper
//                             </label>

//                             <select
//                                 value={temper}
//                                 onChange={(e) => {
//                                     setTemper(e.target.value);
//                                 }}
//                                 className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                             >

//                                 <option value="T4">T4</option>
//                                 <option value="T5">T5</option>
//                                 <option value="T6">T6</option>
//                                 <option value="T66">T66</option>

//                             </select>

//                         </div>


//                         {/* Alloy */}
//                         <div className="flex flex-col gap-2">

//                             <label className="text-sm font-medium text-gray-700">
//                                 Alloy
//                             </label>

//                             <select
//                                 value={alloy}
//                                 onChange={(e) => {
//                                     setAlloy(e.target.value);
//                                 }}
//                                 className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                             >

//                                 <option value="1085">1085</option>
//                                 <option value="6005">6005</option>
//                                 <option value="6060">6060</option>
//                                 <option value="6061">6061</option>
//                                 <option value="6063">6063</option>
//                                 <option value="6082">6082</option>

//                             </select>

//                         </div>


//                         {/* Plant */}
//                         <div className="flex flex-col gap-3 md:col-span-2">

//                             <label className="text-sm font-medium text-gray-700">
//                                 Plant
//                             </label>

//                             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">


//                                 {/* Alumex */}
//                                 <label className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-50 transition">

//                                     <input
//                                         type="checkbox"
//                                         value="Alumex"
//                                         checked={plants.includes("Alumex")}
//                                         onChange={handlePlantChange}
//                                         className="w-4 h-4 accent-green-600"
//                                     />

//                                     <span className="text-gray-700">
//                                         Alumex
//                                     </span>

//                                 </label>


//                                 {/* Alco */}
//                                 <label className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-50 transition">

//                                     <input
//                                         type="checkbox"
//                                         value="Alco"
//                                         checked={plants.includes("Alco")}
//                                         onChange={handlePlantChange}
//                                         className="w-4 h-4 accent-green-600"
//                                     />

//                                     <span className="text-gray-700">
//                                         Alco
//                                     </span>

//                                 </label>


//                                 {/* Prime */}
//                                 <label className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-50 transition">

//                                     <input
//                                         type="checkbox"
//                                         value="Prime"
//                                         checked={plants.includes("Prime")}
//                                         onChange={handlePlantChange}
//                                         className="w-4 h-4 accent-green-600"
//                                     />

//                                     <span className="text-gray-700">
//                                         Prime
//                                     </span>

//                                 </label>

//                             </div>

//                         </div>


//                         {/* Availability */}
//                         <div className="flex flex-col gap-2 md:col-span-2">

//                             <label className="text-sm font-medium text-gray-700">
//                                 Availability
//                             </label>

//                             <label className="flex items-center gap-3 cursor-pointer">

//                                 <input
//                                     type="checkbox"
//                                     checked={isAvailable}
//                                     onChange={(e) => {
//                                         setIsAvailable(e.target.checked);
//                                     }}
//                                     className="w-4 h-4 accent-green-600"
//                                 />

//                                 <span className="text-gray-700">
//                                     Profile is available
//                                 </span>

//                             </label>

//                         </div>


//                         {/* Profile Image + Drawing */}
//                         <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">


//                             {/* Profile Image */}
//                             <div className="flex flex-col gap-2">

//                                 <label className="text-sm font-medium text-gray-700">
//                                     Profile Image
//                                 </label>

//                                 <div className="flex items-center gap-4">

//                                     <input
//                                         id="profileImage"
//                                         type="file"
//                                         accept="image/*"
//                                         onChange={(e) => {
//                                             setImage(e.target.files[0]);
//                                         }}
//                                         className="hidden"
//                                     />

//                                     <label
//                                         htmlFor="profileImage"
//                                         className="px-5 py-2.5 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition font-medium"
//                                     >
//                                         Choose Image
//                                     </label>

//                                     {image && (
//                                         <span className="text-sm text-gray-600 truncate">
//                                             {image.name}
//                                         </span>
//                                     )}

//                                 </div>

//                             </div>


//                             {/* Drawing */}
//                             <div className="flex flex-col gap-2">

//                                 <label className="text-sm font-medium text-gray-700">
//                                     Drawing
//                                 </label>

//                                 <div className="flex items-center gap-4">

//                                     <input
//                                         id="drawing"
//                                         type="file"
//                                         accept="image/*"
//                                         onChange={(e) => {
//                                             setDrawing(e.target.files[0]);
//                                         }}
//                                         className="hidden"
//                                     />

//                                     <label
//                                         htmlFor="drawing"
//                                         className="px-5 py-2.5 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition font-medium"
//                                     >
//                                         Choose Drawing
//                                     </label>

//                                     {drawing && (
//                                         <span className="text-sm text-gray-600 truncate">
//                                             {drawing.name}
//                                         </span>
//                                     )}

//                                 </div>

//                             </div>

//                         </div>

//                     </div>

//                 </div>

//             </div>

//         </div>

//     );

// }








import { useState } from "react";
import { toast } from "react-hot-toast";
import { ImageIcon, FileEditIcon } from "lucide-react";
import uploadMedia from "../../Utils/mediaUpload";
import Header from "../../Components/Header";


export default function AdminaddProfilesPage() {

    const [image, setImage] = useState("");
    const [drawing, setDrawing] = useState("");
    const [isAvailable, setIsAvailable] = useState(true);

    const [profileName, setProfileName] = useState("");
    const [profileType, setProfileType] = useState("");
    const [temper, setTemper] = useState("");
    const [alloy, setAlloy] = useState("");
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

            if (profileType === "") {
                toast.error("Please select a profile type.");
                return;
            }

            if (temper === "") {
                toast.error("Please select a temper.");
                return;
            }

            if (alloy === "") {
                toast.error("Please select an alloy.");
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

        <div className="w-full h-screen bg-emerald-100 overflow-y-auto">

            <Header />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mt-6">

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
                                className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                                    profileType === "" ? "text-gray-400" : "text-gray-700"
                                }`}
                            >

                                <option value="" disabled>
                                    Select Type
                                </option>

                                <option value="Hollow" className="text-gray-700">
                                    Hollow
                                </option>

                                <option value="Solid" className="text-gray-700">
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
                                className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                                    temper === "" ? "text-gray-400" : "text-gray-700"
                                }`}
                            >

                                <option value="" disabled>
                                    Select Temper
                                </option>

                                <option value="T4" className="text-gray-700">
                                    T4
                                </option>

                                <option value="T5" className="text-gray-700">
                                    T5
                                </option>

                                <option value="T6" className="text-gray-700">
                                    T6
                                </option>

                                <option value="T66" className="text-gray-700">
                                    T66
                                </option>

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
                                className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                                    alloy === "" ? "text-gray-400" : "text-gray-700"
                                }`}
                            >

                                <option value="" disabled>
                                    Select Alloy
                                </option>

                                <option value="1085" className="text-gray-700">
                                    1085
                                </option>

                                <option value="6005" className="text-gray-700">
                                    6005
                                </option>

                                <option value="6060" className="text-gray-700">
                                    6060
                                </option>

                                <option value="6061" className="text-gray-700">
                                    6061
                                </option>

                                <option value="6063" className="text-gray-700">
                                    6063
                                </option>

                                <option value="6082" className="text-gray-700">
                                    6082
                                </option>

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
                            <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-4">

                                {/* Card header */}
                                <div className="flex items-center gap-2">

                                    <ImageIcon className="w-4 h-4 text-green-600" />

                                    <span className="text-sm font-medium text-gray-800">
                                        Profile Image
                                    </span>

                                </div>


                                {/* Dashed drop-zone */}
                                <div className="border-2 border-dashed border-gray-200 rounded-lg py-8 px-4 flex flex-col items-center justify-center gap-3 bg-gray-50/50">

                                    <ImageIcon
                                        className="w-8 h-8 text-green-600"
                                        strokeWidth={1.5}
                                    />

                                    <div className="flex flex-col items-center gap-1">

                                        <span className="text-sm font-medium text-gray-700">
                                            Upload profile image
                                        </span>

                                        <span className="text-xs text-gray-400">
                                            PNG, JPG or JPEG (max. 5MB)
                                        </span>

                                    </div>


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
                                        className="mt-1 px-5 py-2.5 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition font-medium text-sm"
                                    >
                                        Choose Image
                                    </label>


                                    {image && (
                                        <span className="text-sm text-gray-600 truncate max-w-full">
                                            {image.name}
                                        </span>
                                    )}

                                </div>

                            </div>


                            {/* Drawing */}
                            <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-4">

                                {/* Card header */}
                                <div className="flex items-center gap-2">

                                    <FileEditIcon className="w-4 h-4 text-green-600" />

                                    <span className="text-sm font-medium text-gray-800">
                                        Drawing
                                    </span>

                                </div>


                                {/* Dashed drop-zone */}
                                <div className="border-2 border-dashed border-gray-200 rounded-lg py-8 px-4 flex flex-col items-center justify-center gap-3 bg-gray-50/50">

                                    <FileEditIcon
                                        className="w-8 h-8 text-green-600"
                                        strokeWidth={1.5}
                                    />

                                    <div className="flex flex-col items-center gap-1">

                                        <span className="text-sm font-medium text-gray-700">
                                            Upload drawing file
                                        </span>

                                        <span className="text-xs text-gray-400">
                                            PNG, JPG or JPEG (max. 10MB)
                                        </span>

                                    </div>


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
                                        className="mt-1 px-5 py-2.5 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition font-medium text-sm"
                                    >
                                        Choose Drawing
                                    </label>


                                    {drawing && (
                                        <span className="text-sm text-gray-600 truncate max-w-full">
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