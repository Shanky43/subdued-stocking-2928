import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homeopathy from '../Pages/Homeopathy.jsx'
// import Ayurvedaproducts from '../Pages/Ayurvedaproducts'
import Adminlogin from "../Admin_Page/Pages/AdminLogin"
import Admin from '../Admin_Page/Pages/Admin'
import HomePage from '../Pages/HomePage.jsx'
import SingleProductPage from '../Pages/SingleProductPage.jsx'


const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/products/:category' element={<Homeopathy />}></Route>
                <Route path='/:_id' element={<SingleProductPage />}></Route>
                <Route path='/adminlogin' element={<Adminlogin />}></Route>
                <Route path='/admin' element={<Admin />}></Route>

            </Routes>
        </div>
    )
}

export default Allroutes