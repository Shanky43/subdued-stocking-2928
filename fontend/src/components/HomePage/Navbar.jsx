import React, { useState } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { BiSearchAlt2 } from "react-icons/bi";
import { GiHamburgerMenu, GiExitDoor } from 'react-icons/gi'
import { FcFlashOn } from 'react-icons/fc'
import logo from '../../Assests/logo.png'
import {
    Text, Badge, HStack, Box, Center, Flex, Link, Icon, Divider, FormControl,
    Input,
    Button,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    useToast,
    VStack,
} from '@chakra-ui/react'
import MobileMenu from './MobileMenu'

import { useNavigate } from 'react-router-dom'
import { MdLocationPin, MdOutlineMyLocation } from "react-icons/md";
import NavDrop from './NavDrop';
import MobileNav from './MobileNav';

const Navbar = () => {
    return (
        <>
            <VStack w="100%" mb='8px'>
                <MobileNav />
                <Flex display={{ base: "none", xl: "flex" }} w='100%' direction={"column"} id="maindiv">

                    <UpperFullRow />
                    <SecondFullRow />
                    <NavDrop />
                </Flex>
                <Box w='96%' m='auto' display={{ base: 'block', xl: 'none' }} border='1px solid gray' borderStyle={'double'}  >
                    <SearchLocation p={1} righticon={BiSearchAlt2} placeholder='Search for Medicines and Health Products' />
                </Box>
            </VStack>
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
                fontSize='15px'
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
    const [menuOpen, setMenuOpen] = useState(false);
    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

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
            <HStack justifyContent={'space-between'} p={2} borderBottom='1px solid #f1f4f6' mb={'3px'} display={{ base: 'none', xl: 'flex' }} >
                <Box role='logo' w='120px' mx='10px' >
                    <Image src={logo} />
                </Box>

                {" "}
                <Flex display={{ base: 'none', xl: 'flex' }} justifyContent={'space-between'} w='60%' >
                    {
                        uppermostrow.map((el, ind) => <RowTextHeading key={ind} {...el} />)
                    }
                </Flex>
                {" "}
                <Flex display={{ base: 'none', xl: 'flex' }} fontSize='15px' justifyContent={'space-between'} w='100px'>
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

        </>
    )
}


const SecondFullRow = () => {

    const navigate = useNavigate()


    const toast = useToast()
    const handleReachadmin = () => {

        toast({
            title: 'Congratulations, To Became Our seller',
            description: "Navigating To Admin section",
            position: 'top',

            duration: 2000,
            variant: 'top-accent',
            isClosable: true,
        })
        navigate('/admin')
    }

    const handleLogOut = () => {
        toast({
            title: 'Successfully LOGGED OUT',
            description: "ThankYou To visit our website",
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: 'top'
        })
        localStorage.removeItem("token")
        navigate('/')
    }



    return (
        <>

            <Flex display={{ base: 'none', xl: 'flex' }} justifyContent='space-between' mx='50px' mr='20px' >
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
                    <Menu px={4}
                        py={2}
                        transition='all 0.2s'
                        borderRadius='md'
                        h={"35px"}
                        fontSize={"sm"}
                        borderWidth='1px'

                        _expanded={{ bg: '#ff6f61' }}
                        _focus={{ boxShadow: 'outline' }} >
                        {({ isOpen }) => (
                            <>
                                <MenuButton isActive={isOpen} as={Button} _hover={{ decoration: 'none' }} color='orange.600' rightIcon={<GiExitDoor />}>
                                    {!isOpen ? 'Enter' : 'Exit'}
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={handleLogOut} >LOG OUT</MenuItem>
                                    <MenuDivider />
                                    <MenuItem onClick={handleReachadmin}>ADMIN</MenuItem>
                                </MenuList>
                            </>
                        )}
                    </Menu>
                </HStack>
            </Flex>

        </>
    )
}


const SearchLocation = ({ width, lefticon, placeholder, righticon }) => {


    return (
        <>
            <FormControl w={width} border='0'>
                <InputGroup>
                    {lefticon && <InputLeftElement
                        pointerEvents="none"
                        children={<MdLocationPin color='blackAlpha.600' />}
                    />}
                    <Input
                        variant={"solid"}
                        color={"gray.800"}
                        bgColor={"#f1f4f6"}

                        _placeholder={{
                            color: "gray.600",
                            fontWeight: '400',
                            fontSize: '13px'
                        }}
                        type={"email"}
                        required
                        placeholder={placeholder}
                        height={"35px"}
                        borderRadius={"none"}
                    />
                    <InputRightElement>
                        <Icon as={righticon} color='blackAlpha.600' />
                    </InputRightElement>
                </InputGroup>
            </FormControl>
        </>
    )
}