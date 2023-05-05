import React from "react";

import { BsCart3 } from 'react-icons/bs'

import { GiHamburgerMenu, GiExitDoor } from 'react-icons/gi'
import {
  Flex, IconButton, useDisclosure, Image, Menu,
  MenuButton, HStack, Button, Box, textDecoration
} from "@chakra-ui/react";
import logo from '../../Assests/logo.png'
import { Link, useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  const navigate = useNavigate()


  return (

    <HStack w='98%' justifyContent={'space-between'} p={2} mx='10px' margin='auto' borderBottom='1px solid #f1f4f6' mb={'2px'} display={{ base: 'flex', xl: 'none' }} >
      <Flex w={{ base: '35%', md: '20%', "lg": '15%' }} align='center' justify='space-around' >
        <IconButton
          textDecoration='none'
          color='black'

          _hover={{ textDecoration: 'none' }}
          outline='none'
          bg="0 0"
          aria-label="hamburger"
          icon={<GiHamburgerMenu fontSize='20px' />}
          onClick={onOpen}
        />
        <MobileMenu isOpen={isOpen} onClose={onClose} />

        <Link to="/" mx='10px'>
          {" "}   <Box role='logo' w='115px' >
            <Image objectFit='cover' src={logo} />
          </Box>


        </Link>
      </Flex>


      <BsCart3 size='24px' />

    </HStack>



  );
};

export default MobileNav;

