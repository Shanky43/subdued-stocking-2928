import React, { useState, useCallback, Children } from "react";
import {
  Image,
  Box,
  Center,
  VStack,
  Button,
  Text,
  Flex,
  Spacer,
  HStack,
} from "@chakra-ui/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { CustomLeftArrow, CustomRightArrow } from "./ProductRow";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const DisplayProductsRow = () => {
  const data = [
    {
      image:
        "https://www.netmeds.com/images/product-v1/150x150/844103/himalaya_anxocare_vet_tablets_60_s_0.jpg",
      discount: "10% OFF",
      name: "Himalaya Anxocare Vet Tablets 60's",
      subcat2: "Veterinary",
      subcategory: "Petcare",
      brand: "Mkt: Himalaya Wellness Company",
      price: 154.8,
      mainprice: "Rs.172.00",
      category: "Veterinary",
      "price-box": "Best price",
    },
    {
      image:
        "https://www.netmeds.com/images/product-v1/150x150/844097/himalaya_erina_coat_cleanser_450_ml_0.jpg",
      discount: "10% OFF",
      name: "Himalaya Erina Coat Cleanser 450 ml",
      subcat2: "Veterinary",
      subcategory: "Petcare",
      brand: "Mkt: Himalaya Wellness Company",
      price: 405,
      mainprice: "Rs.450.00",
      category: "Veterinary",
      "price-box": "Best price",
    },
    {
      image:
        "https://www.netmeds.com/images/product-v1/150x150/844096/himalaya_erina_coat_cleanser_200_ml_0.png",
      discount: "10% OFF",
      name: "Himalaya Erina Coat Cleanser 200 ml",
      subcat2: "Veterinary",
      subcategory: "Petcare",
      brand: "Mkt: Himalaya Wellness Company",
      price: 220.5,
      mainprice: "Rs.245.00",
      category: "Veterinary",
      "price-box": "Best price",
    },
    {
      image:
        "https://www.netmeds.com/images/product-v1/150x150/844102/himalaya_freshcoat_spray_400_ml_0.jpg",
      discount: "10% OFF",
      name: "Himalaya Freshcoat Spray 400 ml",
      subcat2: "Veterinary",
      subcategory: "Petcare",
      brand: "Mkt: Himalaya Wellness Company",
      price: 495,
      mainprice: "Rs.550.00",
      category: "Veterinary",
      "price-box": "Best price",
    },
    {
      image:
        "https://www.netmeds.com/images/product-v1/150x150/1069696/pet_mankind_caniboon_joint_support_supplement_tablet_30s_509133_0_1.jpg",
      discount: "22% OFF",
      name: "Pet Mankind Caniboon Joint Support Supplement Tablet 30's",
      subcat2: "Veterinary",
      subcategory: "Petcare",
      brand: "Mkt: Pet Mankind (Mankind Pharma)",
      price: 624,
      mainprice: "Rs.800.00",
      category: "Veterinary",
      "price-box": "Best price",
    },
    {
      image:
        "https://www.netmeds.com/images/product-v1/150x150/1066495/drools_100_vegetarian_adult_dry_dog_food_3_kg_with_free_1_2kg_4200_gm_497050_0_0.jpg",
      discount: "18% OFF",
      name: "Drools 100% Vegetarian Adult Dry Dog Food, 3 kg with Free 1.2kg 4200 gm",
      subcat2: "Veterinary",
      subcategory: "Petcare",
      brand: "Mkt: Abis Exports (India) Pvt. Ltd.",
      price: 615,
      mainprice: "Rs.750.00",
      category: "Veterinary",
      "price-box": "Best price",
    },
    {
      image:
        "https://www.netmeds.com/images/product-v1/150x150/1065590/whiskas_adult_tuna_flavour_480_gm_495285_0_0.jpg",
      discount: "8% OFF",
      name: "Whiskas Adult Tuna Flavour 480 gm",
      subcat2: "Veterinary",
      subcategory: "Petcare",
      brand: "Mkt: Mars International India Pvt Ltd",
      price: 184,
      mainprice: "Rs.200.00",
      category: "Veterinary",
      "price-box": "Best price",
    },
    {
      image:
        "https://www.netmeds.com/images/product-v1/150x150/1066454/canine_creek_adult_dry_dog_food_ultra_premium_1200_gm_496789_0_0.jpg",
      discount: "24% OFF",
      name: "Canine Creek Adult Dog Food, Ultra Premium 1200 gm",
      subcat2: "Veterinary",
      subcategory: "Petcare",
      brand: "Mkt: Abis Exports (India) Pvt. Ltd.",
      price: 448.4,
      mainprice: "Rs.590.00",
      category: "Veterinary",
      "price-box": "Best price",
    },
    {
      image:
        "https://www.netmeds.com/images/product-v1/150x150/1072188/himalaya_vet_digyton_plus_liquid_100_ml_504903_0_0.jpg",
      discount: "10% OFF",
      name: "Himalaya Vet Digyton Plus Liquid 100 ml",
      subcat2: "Veterinary",
      subcategory: "Petcare",
      brand: "Mkt: Himalaya Wellness Company",
      price: 207,
      mainprice: "Rs.230.00",
      category: "Veterinary",
      "price-box": "Best price",
    },
    {
      image:
        "https://www.netmeds.com/images/product-v1/150x150/1070423/wiggles_floor_cleaner_liquid_pet_friendly_lemongrass_500_ml_526211_0_0.jpg",
      discount: "45% OFF",
      name: "Wiggles Floor Cleaner Liquid Pet Friendly (Lemongrass) 500 ml",
      subcat2: "Veterinary",
      subcategory: "Petcare",
      brand: "Mkt: Sixth Sense Retail Private Limited",
      price: 219.45,
      mainprice: "Rs.399.00",
      category: "Veterinary",
      "price-box": "Best price",
    },
    {
      image:
        "https://www.netmeds.com/images/product-v1/150x150/1072186/himalaya_vet_liv_52_forte_tablet_60s_504901_0_0.jpg",
      discount: "4% OFF",
      name: "Himalaya Vet Liv 52 Forte Tablet 60's",
      subcat2: "Veterinary",
      subcategory: "Petcare",
      brand: "Mkt: Himalaya Wellness Company",
      price: 134.4,
      mainprice: "Rs.140.00",
      category: "Veterinary",
      "price-box": "Best price",
    },
    {
      image:
        "https://www.netmeds.com/images/product-v1/150x150/1063443/natural_remedies_natlife_paste_30_ml_481341_0_0.jpg",
      discount: "17% OFF",
      name: "Natural Remedies Natlife Paste 30 ml",
      subcat2: "Veterinary",
      subcategory: "Petcare",
      brand: "Mkt: Natural Remedies Pvt. Ltd.",
      price: 398.4,
      mainprice: "Rs.480.00",
      category: "Veterinary",
      "price-box": "Best price",
    },
  ];

  const [showArrow, setShowArrow] = useState(false);

  const handleHover = useCallback(() => {
    setShowArrow((show) => !show);
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div style={{ margin: "40px 0" }}>
      <div
        style={{
          display: "flex",
          width: "87%",
          justifyContent: "space-between",
          margin: "auto",
        }}
      >
        <p style={{ fontSize: "20px", fontWeight: "600" }}>
          Our Veterinary Products
        </p>
        <Link to="/products/Veterinary">
          {" "}
          <button
            style={{
              color: "white",
              backgroundColor: "#ff6f61",
              padding: "8px",
              fontSize: "16px",
              borderRadius: "5px",
              fontWeight: "700",
            }}
          >
            SEE ALL
          </button>
        </Link>
      </div>
      <Box
        p={"15px"}
        display="inline-block"
        width="100%"
        boxShadow="0 0 7px 0 rgba(0,0,0,.14)"
        background="#fff"
        margin-top="10px"
        min-height="150px"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <Carousel
          rows={1}
          customRightArrow={<CustomRightArrow />}
          infinite={true}
          autoPlay="2000"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          responsive={responsive}
          containerClass="carousel-container-checkup"
          customLeftArrow={<CustomLeftArrow />}
        >
          {data.map((el, ind) => (
            <LabTestCard key={ind} items={el} />
          ))}
        </Carousel>
      </Box>
    </div>
  );
};

export default DisplayProductsRow;

const LabTestCard = ({ items }) => {
  return (
    <Flex
      textAlign="left"
      borderRadius="20px"
      _hover={{
        border: "2px solid #E0E0E0",
        cursor: "pointer",
        motion: "none",
        transform: "none",
        transition: "none",
      }}
    >
      <VStack textAlign="left">
        <Center w="full" h="60%">
          <Image src={items.image} />
        </Center>

        <Box textAlign="left">
          <Text fontSize="15px" mt="8px" fontWeight="600">
            {items.name.substring(0, 23)}...
          </Text>
          <Text fontSize="14px" color="blackAlpha.500">
            {items.brand}
          </Text>
        </Box>

        <VStack mt="10px" textAlign="left">
          <Text mt="5" fontSize={".85em"} color={"gray"}>
            MRP{" "}
            <Text as={"span"} textDecoration={"line-through"}>
              ₹{items.mainprice}
            </Text>{" "}
            <Text color="green" as={"span"}>
              {items.discount}
            </Text>
          </Text>
          <Text fontSize="1em" fontWeight="500" align="left">
            ₹{items.price}{" "}
          </Text>
        </VStack>
      </VStack>
        
    </Flex>
  );
};
