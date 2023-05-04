import React from 'react'
import Carousel from 'react-multi-carousel';
import { Box, Image, HStack,Center,Heading } from '@chakra-ui/react'
const Banner = () => {

    const bannerimagescarousel = ['https://onemg.gumlet.io/db71b6dc-79e6-42f5-abcd-6862193d7204_1667479564.jpg?w=863&h=200&format=auto',
        'https://onemg.gumlet.io/2ccd19da-c816-4ed8-935e-441c55589f18_1680270570.png?w=863&h=200&format=auto',
        'https://onemg.gumlet.io/3b5ba4c4-c3a4-4457-87d7-96de1e36e8e9_1683021568.png?w=863&h=200&format=auto',
        'https://onemg.gumlet.io/cd06586a-9f7a-4319-80e1-8dbd26d842d4_1683019034.png?w=863&h=200&format=auto',
        'https://onemg.gumlet.io/a_ignore,w_863,h_200,c_fit,q_auto,f_auto/6192f020-ebf2-4772-817f-e84ffbb4645a.png',
        'https://onemg.gumlet.io/a_ignore,w_863,h_200,c_fit,q_auto,f_auto/55862f78-7fff-4519-82fc-ebab1e517fdf.png',
        "https://onemg.gumlet.io/c8794fcd-a05a-453f-9ac4-c130582df149_1682408433.png?w=863&h=200&format=auto",
        "https://onemg.gumlet.io/e6735b27-c3ba-42c9-970f-4c24d5eb1e8a_1683113551.png?w=863&h=200&format=auto",
        "https://onemg.gumlet.io/7813da63-d0a5-4461-a897-274de753f95e_1663825942.png?w=863&h=200&format=auto"
    ]
 
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          partialVisibilityGutter: 20 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          partialVisibilityGutter: 20 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 20 // this is needed to tell the amount of px that should be visible.
        }
    }



    return (
        <Box  boxShadow='base' p='6' rounded='md' bg='white' > 
            <div style={{ display: "flex", zIndex: '-1', height: '5cm', gap: 'none', width: '99%', margin: 'auto' }}>
                <Box  width={{base:'95%',xl:'75%'}} display={{base:'none',md:'block'}}  h={{base:'10cm',xl:'5cm'}} >

                    <Carousel partialVisible={true} responsive={responsive} infinite={true} showDots  arrows={false} autoPlay='2000' >
                        {
                            bannerimagescarousel.map((el, ind) => 
                                <img width="100%" src={el} />
                           
                            )
                        }
                    </Carousel>
                </Box>

                <Image width={{base:'95%',xl:'28%'}}   height= '5cm'  src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/b9391817-5d56-4424-9a49-ededb86ef897.png" alt="" />

            </div>
          {/* ///  <Image display={{base:'block',md:'none'}}  width='90%' m='7px' src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/b9391817-5d56-4424-9a49-ededb86ef897.png" alt="" /> */}

 <Center my={{ base:'2px', xl:'15px'}}>

    <Heading fontSize='24px' fontWeight='400' colour='gray.500'> Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</Heading>
 </Center>
        </Box>

    )
}

export default Banner



   const MyDot = ({ isActive }) => {
       
       return( <div
            style={{
                display: 'inline-flex',
                borderRadius: '40%',
                height: isActive ? '8px' : '5px',
                width: isActive ? '8px' : '5px',
                background: isActive ? '#ff6f61' : 'white',
                position: 'absolute',
                bottom: '30px',
                justifyContent: 'space-between',
                marginRight: '50px',

            }}
        > </div>)
        }
