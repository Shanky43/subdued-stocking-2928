import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homeopathy from '../Pages/Homeopathy'
import Ayurvedaproducts from '../Pages/Ayurvedaproducts'
import Admin from "../Admin_Page/Admin"
import AdminLogin from "../Admin_Page/AdminLogin"


const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/homeopathy' element={<Homeopathy />}></Route>
                <Route path='/ayurveda' element={<Ayurvedaproducts />}></Route>
                <Route path="/adminLogin" element={<AdminLogin />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </div>
    )
}

export default Allroutes;