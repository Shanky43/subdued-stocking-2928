
import React, { useState, useCallback, Children } from 'react'
import { Image, Box, color, Center, VStack, Button } from '@chakra-ui/react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'
import { CustomLeftArrow, CustomRightArrow } from './ProductRow';
const TemplateCarousel = ({ data, Children }) => {

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


  return (
    <div style={{ margin: "40px 0" }}>
      <div style={{ display: "flex", width: "87%", justifyContent: "space-between", margin: "auto" }}>
        <p style={{ fontSize: "20px", fontWeight: "600" }}>Featured Brands</p>
        <button style={{ color: "white", backgroundColor: "#ff6f61", padding: "8px", fontSize: "16px", borderRadius: "5px", fontWeight: '700' }}>SEE ALL</button>
      </div>
      <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <Carousel rows={1} customRightArrow={<CustomRightArrow />} loop={true} autoPlay='2000' removeArrowOnDeviceType={["tablet", "mobile"]}
          responsive={responsive} containerClass="carousel-container-homepage" customLeftArrow={<CustomLeftArrow />}

        >
          {
            data.map((el, ind) => <>
              {Children}
            </>)
          }
        </Carousel>


      </div>
    </div>

  )
}


export default TemplateCarousel

