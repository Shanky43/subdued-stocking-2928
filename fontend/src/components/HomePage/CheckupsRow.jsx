import React, { useState, useCallback, Children } from 'react'
import { Image, Box, Center, VStack, Button, Text, Flex } from '@chakra-ui/react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'
import { CustomLeftArrow, CustomRightArrow } from './ProductRow';

const CheckupsRow = () => {

  const data = [
    {
      title: "Women Wellness Advanced Package",
      desc: "Includes 44 tests",
      img:
        "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      rating: 4.9,
      discountprice: 1499,
      price: 2998,
      name: "ISO"
    },
    {
      title: "Monsoon Health Screening",
      desc: "Includes 54 tests",
      img:
        "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      rating: 4.9,
      discountprice: 1299,
      price: 2598,
      name: "ISO"
    },
    {
      title: "Good Health Silver Package",
      desc: "Includes 58 tests",
      img:
        "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      rating: 4.,
      discountprice: 649,
      price: 1298,
      name: "ISO"
    },
    {
      title: "Comprehensive Platinum Full Body Checkup",
      desc: "Includes 91 tests",
      img:
        "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      rating: 4.2,
      discountprice: 3499,
      price: 6998,
      name: "ISO"
    },
    {
      title: "Monsoon Health Screening",
      desc: "Includes 54 tests",
      img:
        "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      rating: 4.5,
      discountprice: 1299,
      price: 2598,
      name: "ISO"
    },
    {
      title: "Good Health Silver Package",
      desc: "Includes 58 tests",
      img:
        "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      rating: 3.9,
      discountprice: 649,
      price: 1298,
      name: "ISO"
    },
    {
      title: "Women Wellness Advanced Package",
      desc: "Includes 44 tests",
      img:
        "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      rating: 2.9,
      discountprice: 1499,
      price: 2998,
      name: "ISO"
    },
    {
      title: "Comprehensive Platinum Full Body Checkup",
      desc: "Includes 91 tests",
      img:
        "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      rating: 3.4,
      discountprice: 3499,
      price: 6998,
      name: "ISO"
    },
    {
      title: "Monsoon Health Screening",
      desc: "Includes 54 tests",
      img:
        "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      rating: 4.9,
      discountprice: 1299,
      price: 2598,
      name: "ISO"
    },
    {
      title: "Good Health Silver Package",
      desc: "Includes 58 tests",
      img:
        "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      rating: 4.,
      discountprice: 649,
      price: 1298,
      name: "ISO"
    },
  ];

  const [showArrow, setShowArrow] = useState(false)

  const handleHover = useCallback(() => {
    setShowArrow(show => !show)
  }, [])


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };




  return (
    <div style={{ margin: "40px 0" }}>
      <div style={{ display: "flex", width: "87%", justifyContent: "space-between", margin: "auto" }}>
        <p style={{ fontSize: "20px", fontWeight: "600" }}>Full body health checkups</p>
        <button style={{ color: "white", backgroundColor: "#ff6f61", padding: "8px", fontSize: "16px", borderRadius: "5px", fontWeight: '700' }}>SEE ALL</button>
      </div>
      <Box p={'15px'} display='inline-block' width='100%' boxShadow='0 0 7px 0 rgba(0,0,0,.14)' background='#fff' margin-top='10px'
        min-height='150px' onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <Carousel rows={1} customRightArrow={<CustomRightArrow />} infinite={true} autoPlay='2000' removeArrowOnDeviceType={["tablet", "mobile"]}
          responsive={responsive} containerClass="carousel-container-checkup" customLeftArrow={<CustomLeftArrow />}

        >
          {
            data.map((el, ind) =>
              <LabTestCard key={ind} {...el} />
            )
          }
        </Carousel>

      </Box>
    </div>



  )
}

export default CheckupsRow


const LabTestCard = ({ title, desc, img, price, discountprice, name, rating, id }) => {


  return (
    <Box border='1px solid #eee' padding='5px' margin='5px' textAlign={'left'} borderRadius='7px' height={'180px'} boxSizing='border-box' _hover={{ border: '2px solid #E0E0E0', cursor: 'pointer', motion: 'none', transform: 'none', transition: 'none' }} >
      <Flex>
        <Text color='#212121' fontSize='15px' fontWeight='500'>{title}</Text>
        <Box position="absolute" display="inline-flex" padding="2px 4px" fontSize="12px" fontWeight="700" borderRadius="2px" color="#2b2b2b"
          lineHeight="1.42" marginLeft='3px' backgroundColor="#ffe3c2" minWidth="58px" right="3%" top="4%"> <Image height="18px" width="18px" marginRight="4px" src='https://onemg.gumlet.io/safe_bjisiz.svg' />
          <Text>SAFE</Text>
        </Box>
      </Flex>
      <Text colour='white' fontSize='13px' >{desc}</Text>
      <Flex alignItems='center' gap='11px' margin='8px 0px'>
        <Image w='33%' height='55px' border='1px solid #eee' src={img} />
        <Text width='36px' fontSize='12px' padding='1px' height='18px' textColor='#fff' align='center' colour='white' backgroundColor={'#1aaa2a'}>{rating} ★</Text>
        <Text colour='#212121' fontSize='12px'>{name}</Text>
      </Flex>
      <Flex gap='10px' alignItems='center' >
        <Text fontSize='16px' fontWeight={'500'} colour='#212121' >₹{discountprice}</Text>
        <Text colour='#757575' fontSize='12px' textDecor='line-through' >{price}</Text>
        <Text border=' 1px dashed #1aab2a' color='#1aaa2a'
          padding='3px' background-color='#f3fbf4' font-size='12px'
          font-weigh='100'>50% Off</Text>
      </Flex>
    </Box>
  )
}
