import { Box, Center, Container, Stack, Image, useMediaQuery, Text, Radio, HStack, Button, Select } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';

const SingleProductPage = () => {
  let param = useParams();
  const [product, setProduct] = useState("")
  console.log(param._id)
  let id = param._id
  useEffect(() => {
    axios.get(`http://localhost:8080/products?_id=${id}`)
      .then((res) => {
        setProduct(res.data[0])
        console.log("data", res.data[0])
      })
      .catch((err) => console.log(err))
  }, [id])
  const { image, brand, category, discount, mainprice, name, price } = product
  const [isLargerThan969] = useMediaQuery("(min-width: 969px)");
  // console.log("price", typeof price)
  // console.log("Mprice", typeof Number(mainprice))
  return (
    <div>
      <Container maxW={"100%"} pl="2%" pr="2%">
        <Box mt="10%">
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
                  <Image src={image} width={"500px"} height={"300px"} />
                </Box>
                <Box width={"100%"}>
                  <Box>
                    <Box><Text width={"100%"} fontSize={"1.8em"} fontWeight={"500"}>{name}</Text></Box>
                    <Box mt="3"><Text color={"#ff6f61"} fontWeight={"500"}>MKT : {brand}</Text></Box>
                    <Box style={{ display: "flex" }} pt="4" h={["80%", "100%"]}>
                      <Box style={{ display: "flex" }} color={"white"}
                        bgColor={"#1aab2a"} pl="2" width={"50px"}><Text fontSize={".85em"}>{"4." + (Math.floor(Math.random() * 5) + 1)}</Text>
                        <AiFillStar style={{ justifyContent: 'center', alignItems: 'center', margin: "auto" }} textAlign="center" />
                      </Box>
                      <HStack>
                        <Text pl="2" fontSize={".9em"} fontWeight={"550"} color={'#ff6f61'}>{(Math.floor(Math.random() * 10) + 10) * 100} Ratings &</Text>
                        <Text fontSize={".9em"} fontWeight={"550"} color={'#ff6f61'}>{(Math.floor(Math.random() * 10) + 10) * 20}Reviews</Text>
                      </HStack>
                    </Box>
                    <Box mt="5"><HStack><Image src={"https://onemg.gumlet.io/marketing/qubet60eokwth4ki5btj.png"} width={"40px"} /> <Text fontSize={".9em"} fontWeight={"500"} color={"#ff6f61"}>in {category}</Text></HStack>
                    </Box>
                    {
                      isLargerThan969 ? <Box mt="5">
                        <Box ><Text>Pack Size (3)</Text></Box>
                        <Box mt="5">
                          <HStack >
                            <Box p="2" width={"90px"} height={"70px"} borderRadius={"6px"} border={"1px solid black"} _hover={{ bgColor: "#fff3e3" }}>
                              <Text textAlign="center" fontWeight={"500"} color={"#983329"} fontSize={".9em"} >pack of 2</Text>
                              <Text textAlign="center" fontWeight={"500"} color={"#983329"} pt="2" fontSize={".9em"} p="1">₹ {(price * .5 + price)}</Text>
                            </Box>
                            <Box p="2" width={"90px"} height={"70px"} borderRadius={"6px"} border={"1px solid black"} _hover={{ bgColor: "#fff3e3" }}>
                              <Text textAlign="center" fontWeight={"500"} color={"#983329"} fontSize={".9em"} >pack of 3</Text>
                              <Text textAlign="center" fontWeight={"500"} color={"#983329"} pt="2" fontSize={".9em"} p="1">₹ {(price * .75 + price)}</Text>
                            </Box>
                            <Box p="2" width={"90px"} height={"70px"} borderRadius={"6px"} border={"1px solid black"} _hover={{ bgColor: "#fff3e3" }}>
                              <Text textAlign="center" fontWeight={"500"} color={"#983329"} fontSize={".9em"} >pack of 4</Text>
                              <Text textAlign="center" fontWeight={"500"} color={"#983329"} pt="2" fontSize={".9em"} p="1">₹ {(price * .9 + price)}</Text>
                            </Box>
                          </HStack>
                        </Box>
                      </Box> : null
                    }



                  </Box>
                </Box>
                <Box pl="4%" mt={isLargerThan969 ? "10" : null}>
                  <Box boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" borderRadius={"15px"} width={"400px"}>
                    <Box pt="10" pl="10" pb="10">
                      <Radio defaultChecked={"true"} >
                        <HStack><Text fontSize={"1.3em"} pl="5" fontWeight={"600"} color={"#5C5C5C"}>₹{price}</Text>
                          <Text fontSize={".8em"} textDecoration={"line-through"} fontWeight={"600"} color={"#5C5C5C"}>₹{mainprice}</Text>
                          <Text fontSize={".8em"} p="1" borderRadius={"5px"} bgColor={"#edf2f7"} fontWeight={"bold"} color={"#1aab2a"}>{discount}</Text>
                        </HStack>
                      </Radio>
                      <Radio defaultChecked={"true"} pt="5">
                        <HStack><Text fontSize={"1.3em"} pl="5" fontWeight={"600"} color={"#5C5C5C"}>₹{price}</Text>
                          <Text fontSize={".8em"} fontWeight={"600"} color={"#5C5C5C"}>
                            + free shipping and 3% Extra NeuCoins
                          </Text>
                        </HStack>
                      </Radio>
                      <Box pt="5">
                        <Text fontSize={".7em"} pb="3" fontWeight={"600"} color={"#5C5C5C"}>Inclusive of all taxes</Text>
                        <Select width={"60px"}>
                          <option value="2">2</option>
                          <option value="4">4</option>
                          <option value="6">6</option>
                        </Select>
                        <Box pr="10" pt="6"><Button _hover={{ bgColor: "none" }} width={"100%"} bgColor={"#ff6f61"}>ADD TO CART</Button></Box>
                      </Box>

                    </Box>

                  </Box>
                </Box>
              </Stack >
            </Box >
          </Center >
        </Box >
      </Container >
    </div >
  )
}

export default SingleProductPage