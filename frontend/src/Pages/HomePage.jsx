import React from "react";
import Navbar from "../components/HomePage/Navbar";
import Banner from "../components/HomePage/Banner";
import ProductRow from "../components/HomePage/ProductRow";
import BrandRowCard from "../components/HomePage/BrandRowCard";
import CheckupsRow from "../components/HomePage/CheckupsRow";
import Footer from "../components/HomePage/Footer";
import PopularCategory from "../components/HomePage/PopularCategory";
import MobFooter from "../components/HomePage/MobFooter";
import DisplayProductsRow from "../components/HomePage/DisplayProduct";

const HomePage = () => {
  return (
    <div id="app-body">
      {/* <Navbar /> */}
      <Banner />
      <ProductRow />
      <PopularCategory />
      <BrandRowCard />
      <CheckupsRow />
      <DisplayProductsRow />
      <Footer />
      <MobFooter />
    </div>
  );
};

export default HomePage;
