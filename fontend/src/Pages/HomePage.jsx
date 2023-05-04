import React from 'react'
import Navbar from '../components/HomePage/Navbar'
import Banner from '../components/HomePage/Banner'
import ProductRow from '../components/HomePage/ProductRow'
import BrandRowCard from '../components/HomePage/BrandRowCard'
import CheckupsRow from '../components/HomePage/CheckupsRow'
import Footer from '../components/HomePage/Footer'

const HomePage = () => {
  return (
    <div>
<Navbar/>
<Banner/>
<ProductRow/>
<BrandRowCard/>
<CheckupsRow/>

{" "}
<Footer/>
    </div>
  )
}

export default HomePage