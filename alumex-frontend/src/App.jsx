// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import HomePage from './Pages/HomePage'
// import AdminPage from './Pages/AdminPage'
// import LoginPage from './Pages/LoginPage'
// import TestPage from "./Pages/TestPage";
// import AdminProfilePage from "./Pages/admin/adminProfilePage";
// import AdminAddProfilesPage from "./Pages/admin/adminaddProfile";
// import { Toaster } from "react-hot-toast";

// function App() {

//   return (
//     <>

//       <div className='w-full h-screen flex justify-center items-center'>

//         <Toaster position='top-right'/>

//         <Routes>

//           {/* Home Page */}
//           <Route
//             path='/'
//             element={<HomePage/>}
//           />

//           {/* Login Page */}
//           <Route
//             path='/login'
//             element={<LoginPage/>}
//           />

//           {/* Admin Page */}
//           <Route
//             path='/admin'
//             element={<AdminPage/>}
//           />

//           {/* Test Page */}
//           <Route
//             path="/test"
//             element={<TestPage />}
//           />

//           {/* Admin Profile Page */}
//           <Route
//             path="/admin/adminProfile"
//             element={<AdminProfilePage />}
//           />

//           {/* Admin Add Profile Page */}
//           <Route
//             path="/admin/addProfile"
//             element={<AdminAddProfilesPage/>}
//           />

//         </Routes>

//       </div>

//     </>
//   )
// }

// export default App













import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./Pages/HomePage";
import AdminPage from "./Pages/AdminPage";
import LoginPage from "./Pages/LoginPage";
import TestPage from "./Pages/TestPage";
import AdminProfilePage from "./Pages/admin/adminProfilePage";
import AdminAddProfilesPage from "./Pages/admin/adminaddProfile";

import { Toaster } from "react-hot-toast";


function App() {

    return (

        <div className="w-full min-h-screen">

            <Toaster position="top-right" />

            <Routes>

                {/* Home Page */}
                <Route
                    path="/"
                    element={<HomePage />}
                />


                {/* Login Page */}
                <Route
                    path="/login"
                    element={<LoginPage />}
                />


                {/* Admin Page */}
                <Route
                    path="/admin"
                    element={<AdminPage />}
                />


                {/* Test Page */}
                <Route
                    path="/test"
                    element={<TestPage />}
                />


                {/* Admin Profile Page */}
                <Route
                    path="/admin/adminProfile"
                    element={<AdminProfilePage />}
                />


                {/* Admin Add Profile Page */}
                <Route
                    path="/admin/addProfile"
                    element={<AdminAddProfilesPage />}
                />

            </Routes>

        </div>

    );

}


export default App;