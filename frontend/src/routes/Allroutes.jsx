import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homeopathy from '../Pages/Homeopathy.jsx'
// import Ayurvedaproducts from '../Pages/Ayurvedaproducts'
import Adminlogin from "../Admin_Page/Pages/AdminLogin"
import Admin from '../Admin_Page/Pages/Admin'
import HomePage from '../Pages/HomePage'

const Allroutes = () => {
    return (
        <div>
            <Routes>
                {/* <Route path='/homeopathy' element={<Homeopathy />}></Route> */}
                <Route path='/products/:category' element={<Homeopathy />}></Route>
                <Route path='/adminlogin'element={<Adminlogin/>}></Route>
                <Route path='/admin'element={<Admin/>}></Route>
             <Route path='/' element={<HomePage/>} />
            </Routes>
        </div>
    )
}

export default Allroutes
