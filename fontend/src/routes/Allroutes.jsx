import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homeopathy from '../Pages/Homeopathy.jsx'
import Ayurvedaproducts from '../Pages/Ayurvedaproducts'


const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/homeopathy' element={<Homeopathy />}></Route>
                <Route path='/ayurveda' element={<Ayurvedaproducts />}></Route>
            </Routes>
        </div>
    )
}

export default Allroutes