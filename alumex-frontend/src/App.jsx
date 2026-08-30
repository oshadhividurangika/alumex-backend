import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import AdminPage from './Pages/AdminPage'
import LoginPage from './Pages/LoginPage'
import TestPage from "./Pages/TestPage";
import AdminProfilePage from "./Pages/admin/adminProfilePage";
import AdminAddProfilesPage from "./Pages/admin/adminaddProfile";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
      <Toaster position='top-right'/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path="/test" element={<TestPage />} />
          <Route path="/admin/adminProfile" element={<AdminProfilePage />} />
          <Route path="/admin/addProfile" element={<AdminAddProfilesPage/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
