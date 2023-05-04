
import React, { useState, useCallback } from 'react'
import { Image, Box, color, Center, VStack, Button } from '@chakra-ui/react'
// import Carousel from 'better-react-carousel'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'
import { CustomLeftArrow, CustomRightArrow } from './ProductRow';
const BrandRowCard = () => {

  const [showArrow, setShowArrow] = useState(false)

  const handleHover = useCallback(() => {
    setShowArrow(show => !show)
  }, [])


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  const brandData = [
    {
      image: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/cdb36765-0dc7-43d4-81e8-106dddb9e970.png",
      name: "Cetaphil"
    },
    {
      image: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/f1c85f6b-737b-4330-87f8-3bb5ad647495.png",
      name: "Organic India"
    },
    {
      image: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/d499a94b-a3d9-4ba9-9c1e-b9d233e2ce79.png",
      name: "Dr. Morepen"
    },
    {
      image: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/b1eb4ea9-0a15-4a45-9c79-63478b73ec4d.png",
      name: "Bournvita"
    },
    {
      image: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/3b2f13fc-381b-4306-94f6-65ce3c88cc25.png",
      name: "Baidyanath"
    },
    {
      image: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/b33da4e8-ed75-422d-9964-a13601bc7285.png",
      name: "Wellness"
    },
    {
      image: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c113948e-cb12-4582-aa5e-1b4af442ddc7.png",
      name: "Protinex"
    },
  ]




  return (
    <div style={{ margin: "40px 0" }}>
      <div style={{ display: "flex", width: "87%", justifyContent: "space-between", margin: "auto" }}>
        <p style={{ fontSize: "20px", fontWeight: "600" }}>Featured Brands</p>
        <button style={{ color: "white", backgroundColor: "#ff6f61", padding: "8px", fontSize: "16px", borderRadius: "5px", fontWeight: '700' }}>SEE ALL</button>
      </div>
      <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <Carousel rows={1} customRightArrow={<CustomRightArrow />} infinite={true} autoPlay='2000' removeArrowOnDeviceType={["tablet", "mobile"]}
          responsive={responsive} containerClass="carousel-container-homepage" customLeftArrow={<CustomLeftArrow />}

        >
          {
            brandData.map((el, ind) =>
              <VStack p={15} marginLeft={ind == 0 ? '20px' : '1px'} _hover={{ border: '2px solid #E0E0E0', cursor: 'pointer', motion: 'none' }}  >
                <img src={el.image} alt="" />
                <span style={{ marginTop: '10px', textAlign: 'center' }}>{el.name}</span>
              </VStack>
            )
          }
        </Carousel>


      </div>
    </div>

  )
}

export default BrandRowCard

