import React, { useState, useCallback } from 'react'
import { Image, Box, color, Center, VStack, Button } from '@chakra-ui/react'
// import Carousel from 'better-react-carousel'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'
const ProductRow = () => {
  return (
    <div>

      <Image w={{ base: '97%', lg: '90%' }} margin=' 50px auto' src='https://onemg.gumlet.io/marketing/b7a67795-9aa3-482b-9fb5-12d0afa57aea.png' />
      <Box>
        <ShopbyhealthCarousel />
      </Box>


    </div>
  )
}

export default ProductRow


const ShopbyhealthCarousel = () => {

  const [showArrow, setShowArrow] = useState(false)

  const handleHover = useCallback(() => {
    setShowArrow(show => !show)
  }, [])


  const healthConcerns = [
    {
      image: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c2a0598f-483c-48ff-9783-71e402aa28d3.png",
      name: "Diabetes Care"
    },
    {
      image: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ab1da5f4-c074-47d2-b278-a5fbd2c93f1f.png",
      name: "Cardiac Care"
    },
    {
      image: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/702457a8-ff7d-43a6-bd1d-6bcb278ce686.png",
      name: "Stomach Care"
    },
    {
      image: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/995e64ba-5bd9-42bc-8db6-5dc0b821c89d.png",
      name: "Liver Care"
    },
    {
      image: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ba975795-98dc-4cd8-8b55-3c20230d70e3.png",
      name: "Bone, Joint Care"
    },
    {
      image: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e77d5099-d905-4462-ab9d-b51802e3739b.png",
      name: "Kidney Care"
    },
    {
      image: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/6f9a726a-4a98-42e6-a834-67381be5e330.png",
      name: "Derma Care"
    },
    {
      image: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/4a788b46-97f3-460e-afb6-428368f779ee.png",
      name: "Respiratory Care"
    },
    {
      image: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/631e3dca-3d5b-49f8-832b-8341ec4784e7.png",
      name: "Eye Care"
    },
    {
      image: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ba975795-98dc-4cd8-8b55-3c20230d70e3.png",
      name: "Bone, Joint Care"
    },
    {
      image: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e77d5099-d905-4462-ab9d-b51802e3739b.png",
      name: "Kidney Care"
    },
  ]

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
    <>
      <div style={{ margin: "40px 0" }}>

        <p style={{ fontSize: "20px", fontWeight: "600",marginLeft:'82px',marginBottom:'10px' }}>Ayurveda top brands</p>


        <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
          <Carousel rows={1} customRightArrow={<CustomRightArrow />} loop={true} autoPlay='2000' removeArrowOnDeviceType={["tablet", "mobile"]}
            responsive={responsive} containerClass="carousel-container-homepage" customLeftArrow={<CustomLeftArrow />}

          >
            {
              healthConcerns.map((el, ind) =>

                <VStack p={15} marginLeft={ind == 0 ? '20px' : '1px'} _hover={{ border: '2px solid #E0E0E0', cursor: 'pointer', motion: 'none' }}  >
                  <img src={el.image} alt="" />
                  <span style={{ marginTop: '10px', textAlign: 'center' }}>{el.name}</span>
                </VStack>
              )
            }
          </Carousel>


        </div>
      </div>
    </>
  )
}

export const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;

  return (
    <Button borderRadius='50%' position='absolute' right='3%' color='none' onClick={() => onClick()} >
      <MdOutlineArrowForwardIos color='ff6f61' fontSize='35px' />
    </Button>
  )
}

export const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;

  return (
    <Button  borderRadius='50%' position='absolute' left='3%' color='none' onClick={() => onClick()} >
      <MdOutlineArrowBackIos color='ff6f61' fontSize='35px' />
    </Button>
  )
}