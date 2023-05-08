import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homeopathy from '../Pages/Homeopathy.jsx'
// import Ayurvedaproducts from '../Pages/Ayurvedaproducts'
import Adminlogin from "../Admin_Page/Pages/AdminLogin"
import Admin from '../Admin_Page/Pages/Admin'
import { EditButton } from '../Admin_Page/Pages/EditButton.jsx'


const Allroutes = () => {
    return (
        <div>
            <Routes>
                {/* <Route path='/homeopathy' element={<Homeopathy />}></Route>
                <Route path='/ayurveda' element={<Ayurvedaproducts />}></Route> */}
                <Route path='/adminlogin'element={<Adminlogin/>}></Route>
                <Route path='/admin/*'element={<Admin/>}></Route>
                <Route path='/admin/product/editButton/:id'element={<EditButton/>}></Route>
            </Routes>
        </div>
    )
}

export default Allroutes