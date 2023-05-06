import { Box, Container, Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homeopathy from '../Pages/Homeopathy'
import Ayurvedaproducts from '../Pages/Ayurvedaproducts'

const Sidebar = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    console.log(category)
    return (
        <div>
            <Container maxW={"100%"} minH={"100vh"} bgColor={"#f6f6f6"} mt={20}>
                <Box>
                    <Flex>
                        <Box maxW={"15%"} ml={"100px"} mt="10">
                            <Box style={{ "box-shadow": " rgba(0, 0, 0, 0.16) 0px 1px 4px" }} p="5" bgColor={"white"}>
                                <Text fontSize={"md"} fontWeight={"bold"} color={"#ff6f61"}>FILTERS</Text>
                                <Divider borderColor={"black"} pt="3" mb="3" />
                                <Box>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, saepe voluptate cumque cum, inventore, beatae rem libero temporibus laboriosam error laudantium tenetur sit omnis nihil similique non praesentium itaque quas.
                                </Box>

                            </Box>
                        </Box>
                        <Box maxW={"75%"} mt="10">
                            <Routes>
                                <Route path='/homeopathy' element={<Homeopathy />}></Route>
                                <Route path='/ayurveda' element={<Ayurvedaproducts />}></Route>
                            </Routes>
                        </Box>
                    </Flex>
                </Box>
            </Container >
        </div >
    )
}

export default Sidebar