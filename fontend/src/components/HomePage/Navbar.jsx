import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { BiSearchAlt2 } from "react-icons/bi";
import { Country, State, City } from 'country-state-city';
import {FcFlashOn} from 'react-icons/fc'
import {
    Text, Badge, HStack, Box, Center, Flex, Link, Icon, Divider, FormControl,
    Input,
    Button,
    InputGroup,
    InputLeftElement,
    InputRightElement,
} from '@chakra-ui/react'
import { MdLocationPin, MdOutlineMyLocation } from "react-icons/md";
import { getAllStates } from 'country-state-city/lib/state';
const Navbar = () => {






    return (
        <>
            <UpperFullRow />
            <SecondFullRow />
        </>
    )
}

export default Navbar


// first Row--  

/**
 * components--
 * 1- Row text function ==> RowTextHeading
 * 2-- Upper Most Whole row ===> UpperFullRow
 * 3- Second Full row  ===> SecondFullRow
 * 3.1 location search ==> SearchLocation
 */


const RowTextHeading = ({ title, active, badge }) => {

    return (

        <Center>
            <Text
                transition="0.3s ease-in-out"
                fontWeight={650}
                color={active ? '#ff6f61' : 'black.600'}
                _hover={{
                    color: "#ff6f61",
                    cursor: "pointer",
                }}
            >
                {title}
            </Text>
            {badge && <Badge colorScheme='red'>{badge}</Badge>}
        </Center>

    )

}



const UpperFullRow = () => {

    const uppermostrow = [
        { title: "MEDICINE", active: true },
        { title: "LAB TESTS", badge: 'SAFE' },
        { title: "CONSULT DOCTORS" },
        { title: "CANCER CARE" },
        { title: "AYURVEDA" },
        { title: "CARE PLAN", badge: "SAVE MORE" },

    ]
    return (
        <>
            <HStack justifyContent={'space-between'} >
                <Box role='logo' w='30px' mx='10px' >
                    LOGO
                </Box>

                {" "}
                <Flex display={{ base: 'none', lg: 'flex' }} justifyContent={'space-between'} w='60%'>
                    {
                        uppermostrow.map((el, ind) => <RowTextHeading key={ind} {...el} />)
                    }
                </Flex>
                {" "}
                <Flex display={{ base: 'none', lg: 'flex' }} fontSize='15px' justifyContent={'space-between'} w='100px'>
                    <Link to='#'> <Text>Login</Text> </Link>
                    <Text> | </Text>
                    <Link to='#'> <Text>Sign Up</Text> </Link>
                </Flex>
                {" "}
                <Text>Offers</Text>
                <Center>
                    <BsCart3 size='24px' />
                </Center>

                <Box w='100px' fontSize='14px'  >
                    <Text >Need Help ?</Text>
                </Box>

            </HStack>
            <Divider />
        </>
    )
}


const SecondFullRow = () => {


    return (
        <>

            <Flex display={{ base: 'none', lg: 'flex' }} justifyContent='space-between' mx='50px' mr='20px' >
                <Box pr='5px' >
                    <SearchLocation width='180px' lefticon='true' placeholder='Location' righticon={MdOutlineMyLocation} />
                </Box>
                
                <Box>
                    <SearchLocation width='600px' righticon={BiSearchAlt2} placeholder='Search for Medicines and Health Products' />
                </Box>

   <Center  >
<FcFlashOn />
   </Center>
  
  <HStack gap='1mm'> 
                <Text w={"200px"} fontSize='15px' >
            QUICK BUY! Get 15% off on medicines*
          </Text>
          <FormControl w={{ base: "100%", md: "150px" }}>
            <Button
              h={"35px"}
              fontSize={"sm"}
          _hover={{decoration:'none'}}
              bg={"#ff6f61"}
              color={"white"}
            
            >
              Quick Order
            </Button>
          </FormControl>
          </HStack>
            </Flex>

        </>
    )
}


const SearchLocation = ({ width, lefticon, placeholder, righticon }) => {


    return (
        <>
            <FormControl w={width}>
                <InputGroup>
                    {lefticon && <InputLeftElement
                        pointerEvents="none"
                        children={<MdLocationPin color="black" />}
                    />}
                    <Input
                        variant={"solid"}
                        color={"gray.800"}
                        bgColor={"#f1f4f6"}
                        border={"0.2mm solid gray"}
                        _placeholder={{
                            color: "gray.600",
                            fontWeight:'400',
                            fontSize:'13px'
                        }}
                        type={"email"}
                        required
                        placeholder={placeholder}
                        height={"35px"}
                        borderRadius={"none"}
                    />
                    <InputRightElement>
                        <Icon as={righticon} />
                    </InputRightElement>
                </InputGroup>
            </FormControl>
        </>
    )
}