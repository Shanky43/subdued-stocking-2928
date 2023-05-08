import { Box, Center, Container, Stack, Image, useMediaQuery, Text, Radio, HStack, Button, Select, VStack, Spacer } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { AdvertisementBanner, SpotlightAds, cities, responsive } from './Homeo_Pathy';
import { BsFillTagFill } from 'react-icons/bs';
import Carousel from 'react-multi-carousel';
import { useToast } from '@chakra-ui/react'


const SingleProductPage = () => {
  
  let { id } = useParams();
  const [product, setProduct] = useState({})
  const ChangedPrice = (localStorage.getItem('ChangedPrice')) || 0;
  const [prices, setPrices] = useState(ChangedPrice)
  const City = JSON.parse(localStorage.getItem('City'));
  const PinCode = JSON.parse(localStorage.getItem('Pincode'));
  const [city, setCity] = useState(City || "Bangalore")
  const [pinCode, setPincode] = useState(PinCode || "560001")
  const toast = useToast()

  console.log(id)

  useEffect(() => {
    axios.get(`http://localhost:8080/products/products/${id}`)
      .then((res) => {
        setProduct(res.data.products)
        // console.log("data", res.data.products)
        if (prices === 0) {
          setPrices(res.data.products.price)
        } else {
          setPrices(localStorage.getItem("ChangedPrice"))
        }
      })
      .catch((err) => console.log(err))
  }, [id])

  const { image, brand, category, discount, mainprice, name, price } = product
  const [isLargerThan969] = useMediaQuery("(min-width: 1025px)");

  const handlePrice = (value) => {
    localStorage.setItem("ChangedPrice", (value))
    setPrices(value)
  }


  const handlePriceOnSelect = (e) => {
    let Pricevalue = e.target.value
    Pricevalue === "2" ? setPrices((((price * 0.5 + price)).toFixed(2))) :
      Pricevalue === "3" ? setPrices((((price * 0.75 + price)).toFixed(2))) :
        setPrices((((price * 0.9 + price)).toFixed(2)))
  }

  const handleCityAndPincode = (e) => {
    const city = e.target.value
    setCity(city)
    localStorage.setItem('City', JSON.stringify(city));
    let pin = cities.filter((el) => el.city === city)
    localStorage.setItem('Pincode', JSON.stringify(pin[0].pincode));
    setPincode(pin[0].pincode)
  }

  const token = localStorage.getItem("token");
  const baseUrl = "https://healthcube.onrender.com";

  const handleCart = (product) => {
    console.log(product)
    console.log(prices,"line68")

    product = { ...product, "price": prices }

    console.log(product, "line59")

    axios.post(`${baseUrl}/cart/add`, product, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      console.log(res)
      toast({
        title: "Product added to the cart.",
        description: "Redirecting to the cart page",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top"
      })
    }).catch((err) => console.log(err))
  }

  return (
    <div>
      <Container maxW={"100%"}>
        <Box>
          <Center>
            <Box>
              <Stack direction={["column", "column", "column", "row", "row"]} ml={[0, 0, 0, "10%"]}>
                <Box
                  w={["80px", "100px", "100px", "500px"]}
                  mr={["0%", "45%", "50%", "15%"]}
                  display="flex"
                  margin="auto"
                  justifyContent={[
                    "center",
                    "center",
                    "center",
                    isLargerThan969 ? "center" : "left",
                  ]}
                >
                  <Image src={image} width={["100%", "100%", "100%", "500px", "500px"]} height={"300px"} transform={["none", "scale(1)", "scale(1)", "scale(1.25)", "scale(1.25)"]} />
                </Box>
                <Box width={"100%"}>
                  <Box>
                    <Box><Text width={"100%"} fontSize={["1.2em", "1.2em", "1.4em", "1.6em", "1.8em"]} textAlign={["center", "center", "left", "left", "left"]} fontWeight={"500"}>{name}</Text></Box>
                    <Box mt="3"><Text color={"#ff6f61"} fontWeight={"500"} pl={["12%", "16%", "0", "0", "0"]} >MKT : {brand}</Text></Box>
                    <Box style={{ display: "flex" }} pt="4" pl={["12%", "16%", "0", "0", "0",]} h={["80%", "100%"]}>
                      <Box style={{ display: "flex" }} color={"white"} alignItems={["center", "center", "left", "left", "left"]}
                        bgColor={"#1aab2a"} pl="2" width={"50px"}><Text fontSize={".85em"}>{"4." + (Math.floor(Math.random() * 5) + 1)}</Text>
                        <AiFillStar style={{ justifyContent: 'center', alignItems: 'center', margin: "auto" }} textAlign="center" />
                      </Box>
                      <HStack>
                        <Text pl="2" fontSize={".9em"} fontWeight={"550"} color={'#ff6f61'}>{(Math.floor(Math.random() * 10) + 10) * 100} Ratings &</Text>
                        <Text fontSize={".9em"} fontWeight={"550"} color={'#ff6f61'}>{(Math.floor(Math.random() * 10) + 10) * 20}Reviews</Text>
                      </HStack>
                    </Box>
                    <Box mt="5" pl={["12%", "16%", "0", "0", "0",]}><HStack><Image src={"https://onemg.gumlet.io/marketing/qubet60eokwth4ki5btj.png"} width={"40px"} /> <Text fontSize={".9em"} fontWeight={"500"} color={"#ff6f61"}>in {category}</Text></HStack>
                    </Box>
                    {
                      isLargerThan969 ? <Box mt="5">
                        <Box ><Text fontWeight={500}>Pack Size (3)</Text></Box>
                        <Box mt="5">
                          <HStack >
                            <Box p="2" width={"90px"} height={"70px"} borderRadius={"6px"} border={"1px solid black"} _hover={{ bgColor: "#fff3e3" }}>
                              <Text textAlign="center" fontWeight={"500"} color={"#983329"} fontSize={".9em"} >pack of 2</Text>
                              <Text textAlign="center" fontWeight={"500"} color={"#983329"} pt="2" fontSize={".9em"} p="1" onClick={() => handlePrice((price * 0.5 + price).toFixed(2))}>₹ {((price * 0.5 + price)).toFixed(2)}</Text>
                            </Box>
                            <Box p="2" width={"90px"} height={"70px"} borderRadius={"6px"} border={"1px solid black"} _hover={{ bgColor: "#fff3e3" }}>
                              <Text textAlign="center" fontWeight={"500"} color={"#983329"} fontSize={".9em"} >pack of 3</Text>
                              <Text textAlign="center" fontWeight={"500"} color={"#983329"} pt="2" fontSize={".9em"} p="1" onClick={() => handlePrice((price * 0.75 + price).toFixed(2))}>₹ {((price * 0.75 + price)).toFixed(2)}</Text>
                            </Box>
                            <Box p="2" width={"90px"} height={"70px"} borderRadius={"6px"} border={"1px solid black"} _hover={{ bgColor: "#fff3e3" }}>
                              <Text textAlign="center" fontWeight={"500"} color={"#983329"} fontSize={".9em"} >pack of 4</Text>
                              <Text textAlign="center" fontWeight={"500"} color={"#983329"} pt="2" fontSize={".9em"} p="1" onClick={() => handlePrice((price * 0.9 + price).toFixed(2))}>₹ {((price * 0.9 + price)).toFixed(2)}</Text>
                            </Box>

                          </HStack>
                        </Box>
                      </Box> : null
                    }

                    <Box mt="5">
                      <Text fontWeight={500} pl={["12%", "16%", "0", "0", "0"]}>Product highlights</Text>
                      {/*  */}
                      <Box mt="2" pl={["12%", "16%", "0", "0", "0"]} >
                        <ul >
                          <li> Made from high-quality, natural ingredients. </li>
                          <li> Manufactured using advanced technology and rigorous quality control standards. </li>
                          <li> Non-allergenic and free from harmful chemicals or additives.</li>
                          <li> Good customer reviews and satisfaction ratings. </li>
                          <li>Suitable for all ages and genders.</li>
                          <li>Affordable and competitive pricing.</li>
                        </ul>
                      </Box>
                    </Box>
                    <br />
                  </Box>
                </Box>
                <Box pl="4%" mt={isLargerThan969 ? "10" : null}>
                  <Box boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" borderRadius={"15px"} width={["350px", "400px", "400px", "400px", "400px"]} margin={["auto", "auto", "auto", "auto", "auto"]}>
                    <Box pt="10" pl="10" pb="10">
                      <Radio defaultChecked={"true"} >
                        <HStack><Text fontSize={"1.3em"} pl="5" fontWeight={"600"} color={"#5C5C5C"}>₹{prices}</Text>
                          <Text fontSize={".8em"} textDecoration={"line-through"} fontWeight={"600"} color={"#5C5C5C"}>₹{mainprice}</Text>
                          <Text fontSize={".8em"} p="1" borderRadius={"5px"} bgColor={"#edf2f7"} fontWeight={"bold"} color={"#1aab2a"}>{discount}</Text>
                        </HStack>
                      </Radio>
                      <Radio defaultChecked={"true"} pt="5">
                        <HStack><Text fontSize={"1.3em"} pl="5" fontWeight={"600"} color={"#5C5C5C"}>₹{prices}</Text>
                          <Text fontSize={".8em"} fontWeight={"600"} color={"#5C5C5C"}>
                            + free shipping and 3% Extra NeuCoins
                          </Text>
                        </HStack>
                      </Radio>
                      <Box pt="5">
                        <Text fontSize={".7em"} pb="3" fontWeight={"600"} color={"#5C5C5C"}>Inclusive of all taxes</Text>
                        <Select width={"60px"} onChange={handlePriceOnSelect}>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </Select>
                        <Box pr="10" pt="6"><Button _hover={{ bgColor: "none" }} width={"100%"} bgColor={"#ff6f61"} onClick={handleCart}>ADD TO CART</Button></Box>
                      </Box>

                    </Box>

                  </Box>
                  <br />
                  <Box mt="7" boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" borderRadius={"15px"} width={["350px", "400px", "400px", "400px", "400px"]} margin={["auto", "auto", "auto", "auto", "auto"]}>
                    <Box p="10">
                      <Text fontSize={"1.3em"} fontWeight={"600"} color={"#5C5C5C"}> Earliest delivery by <Text as="span" color={"#1aab2a"}>Tomorrow</Text></Text>
                      <HStack mt="2">
                        <Text fontSize={"1em"} fontWeight={"600"}>Delivering to: {pinCode}</Text>
                        <Select width={"50%"} border={"none"} onChange={handleCityAndPincode} placeholder={city} outline={"none"}
                          _focusVisible={{ outline: "none" }}
                        >
                          {
                            cities.map((city) => (
                              <option value={city.city}><Text fontSize={".8em"}>{city.city}</Text></option>
                            ))
                          }
                        </Select>
                      </HStack>
                    </Box>
                  </Box>
                  {
                    isLargerThan969 ? <Box mt="5">
                      <Image src={AdvertisementBanner[(Math.floor(Math.random() * 8))].image} alt="banner" borderRadius={"5px"} />
                    </Box> : null
                  }
                  {
                    isLargerThan969 ? <Box mt="5" mb="5">
                      <Box border={"1px dashed black"} borderRadius={"20px"} width={"100%"} >
                        <HStack pt="8" pb="8" pl="7" pr="10">
                          <BsFillTagFill size={40} color="#1aab2a" />
                          <Text fontSize={".8em"} pl="2" fontWeight={500} >Amazon Pay: Pay with Amazon Pay on Tata 1mg for Rs. 100 and more and earn 1% cashback up to Rs. 500. Valid till 31st May 2023</Text>
                        </HStack>

                      </Box>
                    </Box> : null
                  }
                </Box>
              </Stack >
              <br />
              <br />
            </Box >

          </Center >
          <Center bgColor={"#f8f8f8"}>
            <Box mt="10" width={"100%"} mb="10">
              <Stack direction={["column", "column", "column", "row", "row"]} width={["100%", "90%", "90%", "90%"]} margin={["auto", "auto", "auto", "auto", "auto"]}>
                <Box width={["100%", "100%", "100%", "200%"]} margin={"center"} bgColor={"white"} p="10">
                  <Text fontWeight={"500"} fontSize={"1.2em"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corporis amet error fugiat odit, aliquid porro nulla exercitationem quisquam voluptatibus dolorum quo sequi, ut quidem labore blanditiis modi quos ullam?</Text>
                  <Text mt="5"><Text as={"span"} fontWeight={"500"} >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text> Quae iure quisquam labore obcaecati necessitatibus incidunt sed iste ullam expedita nisi vitae, doloribus, saepe porro aspernatur molestiae. Repellendus ab quod voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quae in architecto quos cumque odio ea iste aspernatur vel ducimus.</Text>
                  <Box>
                    <Text fontWeight={"500"} mt="5">Key Ingredients:</Text>
                    <ul>
                      <li style={{ marginTop: "10px" }}>  Lorem ipsum dolor, sit amet consectetur adipisicing elitillo atque! Provident natus, eveniet fugit incidunt repudiandae voluptatibus beatae . </li>
                      <li style={{ marginTop: "10px" }}>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
                      <li style={{ marginTop: "10px" }}>  Lorem ipsum dolor, sit amet consectetur adipisicing elitProvident natus, eveniet fugit incidunt repudiandae. </li>
                      <li style={{ marginTop: "10px" }}>  Lorem ipsum dolor, sit amet consectetur adipisicing elitillo atque! Provident natus, eveniet fugit incidunt repudiandae voluptatibus beatae . </li>
                      <li style={{ marginTop: "10px" }}>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
                      <li style={{ marginTop: "10px" }}>  Lorem ipsum dolor, sit amet consectetur adipisicing elitillo atque! Provident natus, eveniet fugit incidunt repudiandae voluptatibus beatae . </li>
                    </ul>
                  </Box>
                  <Box>
                    <Text fontWeight={"500"} mt="5">Key Benefits:</Text>
                    <ul>
                      <li style={{ marginTop: "10px" }}>  Lorem ipsum dolor, sit amet consectetur adipisicing elitProvident natus, eveniet fugit incidunt repudiandae. </li>
                      <li style={{ marginTop: "10px" }}>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
                      <li style={{ marginTop: "10px" }}>  Lorem ipsum dolor, sit amet consectetur adipisicing elitillo atque! Provident natus, eveniet fugit incidunt repudiandae voluptatibus beatae . </li>
                      <li style={{ marginTop: "10px" }}>  Lorem ipsum dolor, sit amet consectetur adipisicing elitProvident natus, eveniet fugit incidunt repudiandae. </li>
                      <li style={{ marginTop: "10px" }}>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
                      <li style={{ marginTop: "10px" }}>  Lorem ipsum dolor, sit amet consectetur adipisicing elitillo atque! Provident natus, eveniet fugit incidunt repudiandae voluptatibus beatae . </li>
                    </ul>
                  </Box>
                  <Box>
                    <Text fontWeight={"500"} mt="5">Good to Know</Text>
                    <ul>
                      <li style={{ marginTop: "10px" }}>  Lorem ipsum dolor, sit amet consectetur adipisicing elitProvident natus, eveniet fugit incidunt repudiandae. </li>
                      <li style={{ marginTop: "10px" }}>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
                      <li style={{ marginTop: "10px" }}>  Lorem ipsum dolor, sit amet consectetur adipisicing elitillo atque! Provident natus, eveniet fugit incidunt repudiandae voluptatibus beatae . </li>

                    </ul>
                  </Box>
                  <Box width={["100%", "100%", "100%", "500px", "900px"]}>
                    <Box mt="5" width={"100%"} >
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
                  </Box>

                </Box>

                {
                  isLargerThan969 ? <Box pl="5%" width={["200px", "300px", "400px", "450px", "1300px"]} margin={["auto", "auto", "auto", "auto", "auto"]}>
                    <Box>
                      <Box display={"flex"} justifyContent={"center"} bgColor={"white"} p="10" borderRadius={"10px"}>
                        <VStack>
                          <Image src={"https://1mgstaticfiles.s3.amazonaws.com/skuicons/labs.png"} alt="banner" />
                          <Box pt="10"><Button outlineColor={"#ff6f61"} width={"100%"} color="#ff6f61"><Text p="2">BOOK A LAB TEST</Text></Button></Box>
                        </VStack>

                      </Box>
                      <Box display={"flex"} mt="10" justifyContent={"center"} bgColor={"white"} p="10" borderRadius={"10px"}>
                        <VStack>
                          <Image pt="5" src={"https://onemg.gumlet.io/Doctor_xqon4h.png"} alt="banner" width={"100px"} height={"100px"} />
                          <Box pt="10"><Button outlineColor={"#ff6f61"} width={"100%"} color="#ff6f61"><Text p="2">CONSULT A DOCTOR ONLINE</Text></Button></Box>
                        </VStack>

                      </Box>
                    </Box>
                  </Box> : null
                }

              </Stack>
            </Box>
          </Center>
          <Center>

          </Center>
        </Box >
      </Container >
    </div >
  )
}

export default SingleProductPage