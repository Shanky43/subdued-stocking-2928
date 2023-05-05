import React from 'react'
import {VStack, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,HStack,Heading,Text,Box,Divider,Image} from '@chakra-ui/react'
  import { AddIcon,MinusIcon } from '@chakra-ui/icons'
import logo from '../../Assests/logo.png'
import styles from './footer.module.css';
const MobFooter = () => {
  return (
    <div className={styles.only_for_mobile} >
 <VStack align='center' w='80%' m='auto' gap='15px' backgroundColor= "rgb(253, 249, 249)" >
 <Box w='50%' m='auto' align={'center'}>
  
 <Image w='50%' src={logo} align={'center'}/>
 </Box>
 <Box w='max-content' m='auto'>
<Text>Making healthcare understandable, accessible & affordable </Text>
 </Box>
 {/* <Box border='2 px solid blackAlpha' >  */}
{/* <Divider size='5px' height='12px' colorScheme='gray' color='blackAlpha.800' /> */}
{/* </Box> */}

<Box>
<VStack>
    <Text>India’s largest healthcare platform</Text>
</VStack>
<HStack justifyContent={'space-around'}  >
    <VStack>
    <Heading>260m+</Heading>
     <Text>Visitors</Text>
    </VStack>
    <VStack>
    <Heading>260m+</Heading>
     <Text>Visitors</Text>
    </VStack>
    <VStack>
    <Heading>260m+</Heading>
     <Text>Visitors</Text>
    </VStack>
</HStack>

</Box>
<Divider w='1rem'/>
<Box>
<VStack>
    <Text>India's only LegitScript and ISO/ IEC 27001 certified online healthcare platform</Text>

<HStack justify={'space-around'} >
   <Image src='https://static.legitscript.com/seals/729605.png' /> 
   <Image src='https://onemg.gumlet.io/URS_ebgmxc.png' /> 
</HStack>
</VStack>
</Box>

 </VStack>

 <Accordion allowMultiple my={5} colorScheme={'#BDBDBD'} >
    <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton color='blackAlpha.800'>
            <Box as="span" flex='1' textAlign='left' color='blackAlpha.800'>
              Know more about Health CUBE
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        <div id={styles.information} >
                <h2 style={{fontSize:'20px'}} >Stay Healthy with Tata 1mg: Your Favourite Online Pharmacy and Healthcare Platform</h2>
                <h3>We Bring Care to Health.</h3>
                <p>Tata 1mg is India's leading digital healthcare platform. From doctor consultations on chat to online pharmacy and lab tests at home: we have it all covered for you. Having delivered over 25 million orders in 1000+ cities till date, we are on a mission to bring "care" to "health" to give you a flawless healthcare experience.</p>

                <h3>Tata 1mg: Your Favourite Online Pharmacy!</h3>
                <p>Tata 1mg is India's leading online chemist with over 2 lakh medicines available at the best prices. We are your one-stop destination for other healthcare products as well, such as over the counter pharmaceuticals, healthcare devices and homeopathy and ayurveda medicines</p>
                <p>With Tata 1mg, you can buy medicines online and get them delivered at your doorstep anywhere in India! But, is ordering medicines online a difficult process? Not at all! Simply search for the products you want to buy, add to cart and checkout. Now all you need to do is sit back as we get your order delivered to you.</p>
                <p>In case you need assistance, just give us a call and we will help you complete your order.</p>
                <p>Don't want to go through the hassle of adding each medicine separately? You can simply upload your prescription and we will place your order for you. And there is more! At Tata 1mg, you can buy health products and medicines online at best discounts.</p>
                <p>Now, isn't that easy? Why go all the way to the medicine store and wait in line, when you have Tata 1mg Pharmacy at your service.</p>

                <h3>The Feathers in Our Cap</h3>
                <p>At Tata 1mg, our goal is to make healthcare understandable, accessible and affordable in India. We set out on our journey in 2015, and have come a long way since then. Along the way, we have been conferred with prestigious titles like BML Munjal Award for 'Business Excellence through Learning and Development', Best Online Pharmacy in India Award and Top 50 venture in The Smart CEO-Startup50 India. We have been selected as the only company from across the globe for SD#3 "Health & Well Being for all" by Unreasonable group, US State Department. In 2019 alone we received three awards including the BMW Simply Unstoppable Award.</p>

                <h3>The Services We Offer</h3>
                <p>Tata 1mg is India's leading digital healthcare platform, where you can buy medicines online with discount. Buy medicine online in Delhi, Mumbai, Bangalore, Hyderabad, Pune, Gurgaon, Noida, Kolkata, Chennai, Ahmedabad, Lucknow and around a 1000 more cities. Besides delivering your online medicine order at your doorstep, we provide accurate, authoritative & trustworthy information on medicines and help people use their medicines effectively and safely.</p>
                <p>We also facilitate lab tests at home. You can avail over 2,000 tests and get tested by 120+ top and verified labs at the best prices. Need to consult a doctor? On our platform, you can talk to over 20 kinds of specialists in just a few clicks.</p>
                <p>Customer centricity is the core of our values. Our team of highly trained and experienced doctors, phlebotomists and pharmacists looks into each order to give you a fulfilling experience.</p>
                <p>We’ve made healthcare accessible to millions by giving them quality care at affordable prices. Customer centricity is the core of our values. Our team of highly trained and experienced doctors, phlebotomists and pharmacists looks into each order to give you a fulfilling experience.</p>
                <p>Visit our online medical store now, and avail online medicine purchase at a discount.</p>
                <p>Stay Healthy!</p>
            </div>
          
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>

<VStack align='center' w='80%' m='auto' gap='15px' my='10px' >
<Box w='50%' m='auto' align={'center'}>
  
  <Image w='50%' src={logo} align={'center'}/>
  </Box>
  <Box w='fit-content' m='auto'>
 <Text color='blackAlpha.500' >© 2023 Tata 1mg. All rights reserved. All medicines are dispensed in compliance with the Drugs and Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945. We do not process requests for Schedule X and habit forming drugs.</Text>
  </Box>
</VStack>


    </div>


  )
}

export default MobFooter