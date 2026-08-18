import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import AdminPage from './Pages/AdminPage'
import LoginPage from './Pages/LoginPage'
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
