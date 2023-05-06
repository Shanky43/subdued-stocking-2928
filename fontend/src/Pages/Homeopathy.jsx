import {
    Box, Container, Divider, HStack, Image, Spacer, Text, Flex, Select, SimpleGrid, Checkbox, Button, Icon,
    Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, RadioGroup, Stack, Radio, VStack
} from '@chakra-ui/react'
import { React, useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { homeopathyProducts } from '../Redux/Homeopathy/action';
import { useMediaQuery } from "@chakra-ui/react"
import { SpotlightAds, popularbrands, ShopByConcern, ShopByHomeopathy, brands, age, gender, cities } from "./Homeo_Pathy.js"
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineDown } from "react-icons/ai"
import { BiSortAlt2 } from "react-icons/bi"
import { RiFilter3Line } from "react-icons/ri"
import { useSearchParams } from 'react-router-dom';




const Homeopathy = () => {
    const [city, setCity] = useState("Select City");
    const [value, setValue] = useState('')
  

    const [searchParams, setSearchParams] = useSearchParams()
    const initialOrder = searchParams.has("order") ? searchParams.getAll("order")[0] : "";
    const [order, setOrder] = useState(initialOrder)
    const initialCategory=searchParams.getAll("brand")
    const [category, setCategory] = useState(initialCategory||[])

    // const location = useLocation()
    const dispatch = useDispatch()
    const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)")
    const [isLargerThan769] = useMediaQuery("(min-width: 769px)")
    // const { isOpen, onOpen, onClose } = useDisclosure()

    const { isOpen: isOpenDrawer1, onOpen: onOpenDrawer1, onClose: onCloseDrawer1 } = useDisclosure();
    const { isOpen: isOpenDrawer2, onOpen: onOpenDrawer2, onClose: onCloseDrawer2 } = useDisclosure();
    // const [selectedOption, setSelectedOption] = useState("");


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 800 },
            items: 3
        },
        ipad: {
            breakpoint: { max: 800, min: 500 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 1
        }
    };
    const responsive1 = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 800 },
            items: 4
        },
        ipad: {
            breakpoint: { max: 800, min: 500 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 2
        }
    };
    // console.log(location.search, "line70")
    const handleSelectChanges = (e) => {
        e.preventDefault();
        let newCategory = [...category];
        const value = e.target.value;

        if (newCategory.includes(value)) {
            newCategory = newCategory.filter((el) => el !== value);
        } else {
            newCategory.push(value);
        }
        setCategory(newCategory);
        let params = new URLSearchParams(searchParams);
        if (newCategory.length > 0) {
            newCategory.forEach((cat) => params.append("brand", cat));
        } else {
            params.delete("brand");
        }
        setSearchParams(params);
    };

    const handleDiscountChanges = (e) => {
        // console.log(e.target.value)
        setOrder(e.target.value)
    };

    // console.log(order)
    useEffect(() => {
        const params = { category: "Homeopathy" };
        category.length > 0 && (params.brand = category.join(','));
        order && (params.order = order);
        setSearchParams(new URLSearchParams(params));
    }, [category, order]);




    useEffect(() => {
        const decodedParams = new URLSearchParams(decodeURIComponent(searchParams.toString()));
        dispatch(homeopathyProducts(decodedParams));
    }, [dispatch, searchParams]);




    const HomeopathyProducts = useSelector((state) => {
        return state.Homeopathy.products
    })
    // console.log(HomeopathyProducts)
    const handleCitySelect = (selectedCity) => {
        setCity(selectedCity);
        onCloseDrawer1();
    };
    // console.log(value)
    return (
        <div >
            <Container maxW={"100%"} minH={"100vh"} bgColor={"#f6f6f6"} mt={20}>
                {
                    isLargerThan1024 ? null :
                        <Box>
                            <Divider mt="10" borderColor={"grey"} />
                            <Box>
                                <Button variant="filled" onClick={onOpenDrawer1}><Icon as={HiOutlineLocationMarker} boxSize={[5, 5, 5, 6]}></Icon> {city}  &nbsp;<Box mt="1"><AiOutlineDown /></Box></Button>
                                <Box>
                                    <Drawer
                                        isOpen={isOpenDrawer1}
                                        placement="bottom"
                                        onClose={onCloseDrawer1}
                                        finalFocusRef={null}
                                    >
                                        <DrawerOverlay />
                                        <DrawerContent height={"30em"}>
                                            <DrawerCloseButton />
                                            <DrawerHeader>Choose the City</DrawerHeader>
                                            <DrawerBody >
                                                {cities.map((items, index) => (
                                                    <Box
                                                        key={index}
                                                        onClick={() => handleCitySelect(items.city)}
                                                        _hover={{ cursor: "pointer", backgroundColor: "gray.200" }}
                                                        p="2"
                                                    >
                                                        <Icon as={HiOutlineLocationMarker} boxSize={[5, 5, 5, 6]} />
                                                        &nbsp; &nbsp;{items.city}
                                                    </Box>
                                                ))}
                                            </DrawerBody>
                                            <DrawerFooter>

                                            </DrawerFooter>
                                        </DrawerContent>
                                    </Drawer>
                                </Box>

                            </Box>
                            <Divider borderColor={"grey"} mt="2" />
                            <Box display={'flex'} justifyContent={"space-around"}>
                                <Box display={'flex'} justifyContent={"space-around"}>
                                    <Box display={'flex'} justifyContent={"space-around"}>
                                        <HStack justifyContent="center" alignItems="center" spacing={4}>
                                            <Box alignContent="center" pr={["10px", "30px", "50px", "170px", "200px"]}>
                                                <HStack>
                                                    <Box><BiSortAlt2 /></Box>
                                                    <Box><Button variant={"filled"} onClick={onOpenDrawer2} onChange={handleDiscountChanges}><Text>Sort by</Text></Button></Box>
                                                </HStack>
                                                <Box>
                                                    <Drawer
                                                        isOpen={isOpenDrawer2}
                                                        placement="bottom"
                                                        onClose={onCloseDrawer2}
                                                        finalFocusRef={null}
                                                    >
                                                        <DrawerOverlay />
                                                        <DrawerContent height={"30em"}>
                                                            <DrawerCloseButton />
                                                            <DrawerHeader>Sort By</DrawerHeader>
                                                            <DrawerBody >
                                                                <RadioGroup onChange={setValue} value={value}>
                                                                    <Stack direction='column'>
                                                                        <Radio onChange={handleDiscountChanges} value='hightolow' color='#ff6f61' defaultChecked={order === "hightolow"}>High to Low</Radio>
                                                                        <Radio onChange={handleDiscountChanges} value='lowtohigh' color='#ff6f61' defaultChecked={order === "lowtohigh"}>Low to High</Radio>
                                                                        <Radio onChange={handleDiscountChanges} value='discount5%-10%' color='#ff6f61'>Discount 5% - 10%</Radio>
                                                                        <Radio onChange={handleDiscountChanges} value='discount20%-50%' color='#ff6f61'>Discount 20% - 50%</Radio>
                                                                    </Stack>
                                                                </RadioGroup>
                                                            </DrawerBody>
                                                            <DrawerFooter>

                                                            </DrawerFooter>
                                                        </DrawerContent>
                                                    </Drawer>
                                                </Box>
                                            </Box>

                                            <Box>  <Divider orientation="vertical" borderColor="gray.400" h="40px" w="2px" /></Box>

                                            <Box textAlign="center" pl={["10px", "30px", "50px", "170px", "200px"]}>
                                                <HStack>
                                                    <Box><RiFilter3Line /></Box>
                                                    <Box><Text> <Text as="span">Filter</Text></Text></Box>
                                                </HStack>
                                            </Box>
                                        </HStack>
                                    </Box>


                                </Box>
                            </Box>
                            <Divider borderColor={"grey"} />
                        </Box>
                }
                <Box>
                    <Flex>
                        {
                            isLargerThan1024 ?
                                <Box maxW={"15%"} ml={"100px"} mt="10" >
                                    <Box style={{ "box-shadow": " rgba(0, 0, 0, 0.16) 0px 1px 4px" }} p="5" bgColor={"white"}>
                                        <Text fontSize={"md"} fontWeight={"bold"} color={"#ff6f61"}>FILTERS</Text>
                                        <Divider borderColor={"black"} pt="3" mb="3" />
                                        <Box>
                                            <Box>
                                                <Box> <Text width={"100%"} fontSize={"1em"} fontWeight={"600"}>Brands</Text></Box>

                                                <Box>
                                                    {
                                                        brands.map((brands, index) => (
                                                            <HStack key={index}>
                                                                <Checkbox pt="2" onChange={handleSelectChanges} value={brands.brand} ><Text fontSize={".8em"}>{brands.brand}</Text></Checkbox>
                                                                <Spacer />
                                                                <Box><Text fontSize={".8em"}>{brands.numbers}</Text></Box>
                                                            </HStack>

                                                        ))
                                                    }
                                                </Box>
                                                <Divider mt="5" borderColor={"black"} />
                                                <Box mt="5">
                                                    <Box> <Text width={"100%"} fontSize={"1em"} fontWeight={"600"}>DISCOUNT</Text></Box>

                                                    <Box>
                                                        <VStack alignItems={"left"}>
                                                            <Box> <RadioGroup >
                                                                <Stack direction='column'>
                                                                    <Radio onChange={handleDiscountChanges} value='hightolow' color='#ff6f61' defaultChecked={order === "hightolow"}><Text fontSize={".8em"} >High to Low</Text></Radio>
                                                                    <Radio onChange={handleDiscountChanges} value='lowtohigh' color='#ff6f61' defaultChecked={order === "lowtohigh"}><Text fontSize={".8em"} >Low to High</Text></Radio>
                                                                </Stack>
                                                            </RadioGroup></Box>
                                                            <Box><Checkbox pt="2" value={"discount5%-10%"} onChange={handleDiscountChanges}><Text fontSize={".8em"} >Discount 5% - 10%</Text></Checkbox></Box>
                                                            <Box><Checkbox pt="2" value={"discount20%-50%"} onChange={handleDiscountChanges}><Text fontSize={".8em"} >Discount 20% - 50%</Text></Checkbox></Box>

                                                        </VStack>
                                                    </Box>
                                                </Box>
                                                <Divider mt="5" borderColor={"black"} />
                                                <Box mt="5">
                                                    <Box> <Text width={"100%"} fontSize={"1em"} fontWeight={"600"}>AGE</Text></Box>
                                                    <Box>
                                                        {
                                                            age.map((items, index) => (
                                                                <HStack key={index}>
                                                                    <Checkbox pt="2"><Text fontSize={".8em"}>{items.age}</Text></Checkbox>
                                                                    <Spacer />
                                                                    <Box><Text fontSize={".8em"}>{items.numbers}</Text></Box>
                                                                </HStack>

                                                            ))
                                                        }
                                                    </Box>
                                                </Box>
                                                <Divider mt="5" borderColor={"black"} />
                                                <Box mt="5">
                                                    <Box> <Text width={"100%"} fontSize={"1em"} fontWeight={"600"}>GENDER</Text></Box>
                                                    <Box>
                                                        {
                                                            gender.map((items, index) => (
                                                                <HStack key={index}>
                                                                    <Checkbox pt="2"><Text fontSize={".8em"}>{items.gender}</Text></Checkbox>
                                                                    <Spacer />
                                                                    <Box><Text fontSize={".8em"}>{items.numbers}</Text></Box>
                                                                </HStack>

                                                            ))
                                                        }
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>

                                    </Box>
                                </Box> : null
                        }




                        <Box maxW={["100%", "100%", "100%", "100%", "70%"]} mt="12" margin="auto">
                            <Container maxW={"100%"}>
                                <Box ml={5}>
                                    <Text fontSize={"2xl"} fontWeight={"bold"} mt="10">HOMEOPATHY</Text>
                                    {
                                        isLargerThan1024 ? <Box mt="5">
                                            <Image src='https://onemg.gumlet.io/c0a6a2ef-7fa4-4d42-b7df-fb90828aa145_1667474655.jpg?w=1062&h=124&format=auto' alt='banner'
                                                width={"100%"} />
                                        </Box> : null
                                    }


                                    <Box mt="5" width={"100%"}>
                                        <Text textAlign={"left"} fontWeight={"600"}>In the Spotlight</Text>
                                        <Box bgColor={"white"}
                                            mt="5">
                                            <Carousel
                                                swipeable={false}
                                                draggable={false}
                                                // showDots={true}
                                                responsive={responsive}
                                            >
                                                {
                                                    SpotlightAds.map((items, index) => (
                                                        <Box p="5" m="2" width={"100%"} _hover={{
                                                            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                                                        }} borderRadius={"10"} key={index}>
                                                            <Box style={{ display: 'flex', justifyContent: "center" }}> <Image src={items.image} alt={items.name} width={"100px"} h={["100px", "170px"]} /></Box>
                                                            <Box><Text width={"100%"} height={"20"} pt="5" fontSize={".85em"} fontWeight={"600"}>{items.name}</Text></Box>
                                                            <Box><Text fontSize={".8em"} pt="1" color={"gray"}>{items.description}</Text></Box>
                                                            <Box style={{ display: "flex" }} pt="3" h={["80%", "100%"]}>
                                                                <Box style={{ display: "flex" }} color={"white"}
                                                                    bgColor={"#1aab2a"} pl="2" width={"50px"}><Text fontSize={".85em"}>{items.rating}</Text>
                                                                    <AiFillStar style={{ justifyContent: 'center', alignItems: 'center', margin: "auto" }} textAlign="center" />
                                                                </Box>
                                                                <Text pl="2" fontSize={".8em"} color={'gray'}>{items.users_rating}</Text>
                                                            </Box>
                                                            <Box> <Text mt="5" fontSize={".85em"} color={"gray"}>MRP <Text as={"span"} textDecoration={"line-through"}>₹ {items.mrp}</Text> <Text color="green" as={"span"}>{items.offer}</Text></Text></Box>
                                                            <Box><HStack><Text fontWeight={"bold"}>₹{items.price}</Text> <Spacer /> <Text color={"#ff6f61"} cursor={"pointer"} fontWeight={"bold"}>ADD</Text></HStack></Box>

                                                        </Box>
                                                    ))
                                                }
                                            </Carousel>
                                        </Box>
                                    </Box>
                                    <Box mt="5" width={"100%"} >
                                        <Text textAlign={"left"} fontWeight={"600"}>Popular brands</Text>
                                        <Box bgColor={"white"} mt="5" >
                                            <Carousel
                                                swipeable={false}
                                                draggable={false}
                                                // showDots={true}
                                                responsive={responsive1}
                                            >
                                                {
                                                    popularbrands.map((items, index) => (
                                                        <Box p="5" key={index}>
                                                            <Box p="5" _hover={{
                                                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                                                            }} borderRadius={"10"} >
                                                                <Image src={items.image} alt={items.name} width={"250px"} />
                                                                <Text textAlign={'center'} pt="5" fontWeight={500} fontSize={[".7em", ".9em"]}>{items.name}</Text>
                                                            </Box>
                                                        </Box>
                                                    ))
                                                }
                                            </Carousel>
                                        </Box>

                                    </Box>
                                    {isLargerThan769 ? <Box mt="5" mb="5">
                                        <Image src='https://onemg.gumlet.io/c0a6a2ef-7fa4-4d42-b7df-fb90828aa145_1667474655.jpg?w=1062&h=124&format=auto' alt='banner'
                                            width={"100%"} />
                                    </Box> : null}
                                    <Box mt="5" width={"100%"} mb="5">
                                        <Text textAlign={"left"} fontWeight={"600"}>Shop by concern</Text>
                                        <Box bgColor={"white"} mt="5" >
                                            <Carousel
                                                swipeable={false}
                                                draggable={false}
                                                // showDots={true}
                                                responsive={responsive1}
                                            >
                                                {
                                                    ShopByConcern.map((items, index) => (
                                                        <Box pl="5" pr="5" key={index} >
                                                            <Box p="5" _hover={{
                                                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                                                            }} borderRadius={"10"} >
                                                                <Image src={items.image} alt={items.name} width={"250px"} />
                                                                <Text textAlign={'center'} pt="5" fontWeight={500} fontSize={[".7em", ".9em"]}>{items.name}</Text>
                                                            </Box>
                                                        </Box>
                                                    ))
                                                }
                                            </Carousel>
                                        </Box>

                                    </Box>
                                    <Box mt="5" width={"100%"} mb="5">
                                        <Text textAlign={"left"} fontWeight={"600"}>Shop by homeopathy salts</Text>
                                        <Box bgColor={"white"} mt="5" >
                                            <Carousel
                                                swipeable={false}
                                                draggable={false}
                                                // showDots={true}
                                                backgroundColor='#ff6f61'
                                                responsive={responsive1}
                                            >
                                                {
                                                    ShopByHomeopathy.map((items, index) => (
                                                        <Box pl="5" pr="5" key={index}>
                                                            <Box p="5" _hover={{
                                                                "boxShadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                                                            }} borderRadius={"10"} >
                                                                <Image src={items.image} alt={items.name} width={"250px"} />
                                                                <Text textAlign={'center'} pt="5" fontSize={[".7em", ".9em"]} fontWeight={500}>{items.name}</Text>
                                                            </Box>
                                                        </Box>
                                                    ))
                                                }
                                            </Carousel>
                                        </Box>

                                    </Box>

                                    <Box mt="5" width={"100%"} mb="5">
                                        <Box>
                                            {isLargerThan1024 ? <HStack>
                                                <Text textAlign={"left"} fontWeight={"600"}>All Products</Text>
                                                <Spacer />
                                                <Select variant='filled' bgColor={"white"} width={["65%", "20%"]} borderColor="white"
                                                    _focus={{ border: "1px solid white" }}
                                                    _hover={{ border: "1px solid white" }}
                                                    styles={{ option: { color: "red", backgroundColor: "blue", borderRadius: "4px" } }}
                                                    onChange={handleDiscountChanges}
                                                >
                                                    <option value="hightolow" bgColor="#FAFAFA">High to Low</option>
                                                    <option value="lowtohigh">Low to High</option>
                                                    <option value="discount5%-10%">Discount 5% - 10%</option>
                                                    <option value="discount20%-50%">Discount 20% - 50%</option>
                                                </Select>

                                            </HStack> : null}
                                            <Box mt="5">
                                                <SimpleGrid columns={[1, 2, 3, 4]} spacing={7}>
                                                    {
                                                        HomeopathyProducts.map((items, ind) => (
                                                            <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" bgColor={"white"} key={ind}>
                                                                <Box p="5">
                                                                    <Image p="10" src={items.image} alt={items.name} style={{ display: "flex", justifyContent: "center", alignItems: "center", alignContent: 'center' }} width={"100%"} height={"250px"} />
                                                                    <Box height="10" >
                                                                        <Text width={"100%"} height={"100%"} pt="5" fontSize={".85em"} fontWeight={"500"}>{items.name}</Text>
                                                                    </Box>
                                                                    <Box pt="10">
                                                                        <Text width={"100%"} height={"100%"} fontSize={".6em"} color={"gray"} fontWeight={"500"}>{items.brand}</Text>
                                                                    </Box>
                                                                    <Box style={{ display: "flex" }} pt="3" h={["80%", "100%"]}>
                                                                        <Box style={{ display: "flex" }} color={"white"}
                                                                            bgColor={"#1aab2a"} pl="2" width={"50px"}><Text fontSize={".85em"}>{"4." + (Math.floor(Math.random() * 5) + 1)}</Text>
                                                                            <AiFillStar style={{ justifyContent: 'center', alignItems: 'center', margin: "auto" }} textAlign="center" />
                                                                        </Box>
                                                                        <Text pl="2" fontSize={".8em"} color={'gray'}>{(Math.floor(Math.random() * 10) + 10) * ind} ratings</Text>
                                                                    </Box>
                                                                    <Text mt="5" fontSize={".85em"} color={"gray"}>MRP <Text as={"span"} textDecoration={"line-through"}>₹ {items.mainprice}</Text> <Text color="green" as={"span"}>{items.discount}</Text></Text>
                                                                    <Box mt="2"><HStack><Text fontWeight={"bold"}>₹{items.price}</Text> <Spacer /> <Text color={"#ff6f61"} cursor={"pointer"} fontWeight={"bold"}>ADD</Text></HStack></Box>
                                                                </Box>
                                                            </Box>
                                                        ))
                                                    }
                                                </SimpleGrid>
                                            </Box>
                                        </Box>
                                    </Box>



                                    {/* /********** */}
                                </Box>
                            </Container>
                        </Box>
                    </Flex>
                </Box >
            </Container >

        </div >
    )
}

export default Homeopathy