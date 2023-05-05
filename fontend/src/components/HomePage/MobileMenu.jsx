import React from "react";
import {
  AccordionItem,
  AccordionPanel,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Accordion,
  AccordionIcon,
  AccordionButton,
  Box,
} from "@chakra-ui/react";
import { navData } from "./data";
import { Link } from "react-router-dom";
export default function MobileMenu({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Drawer color='black' placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color='black' fontSize={'17px'} onClick={onClose} />
          <DrawerHeader borderBottomWidth="1px">Categories</DrawerHeader>
          <DrawerBody>
            {navData?.map(
              (label) => (
                <Accordion allowMultiple>
                  <AccordionItem color='blackAlpha.700'> 
                    <h2>
                      <AccordionButton color='black'>
                        <Box as="span" color='blackAlpha.800' flex="1" textAlign="left">
                          {label.text}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    {label?.alldata?.map((i) => (
                      <AccordionPanel pb={2} display={{xl:'none'}} >
                        <Link
                          to={`/products/${label.text}/${i.heading}`}>
                          {i.heading}
                        </Link>
                      </AccordionPanel>
                    ))}
                  </AccordionItem>
                </Accordion>
              )
           
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}