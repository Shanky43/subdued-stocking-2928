import React, { useState } from 'react'
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';

export const AddProduct = () => {

  const [image, setImage] = useState("")
  const [discount, setDiscount] = useState("")
  const [name, setName] = useState("")
  const [subcat2, setSubcat2] = useState("")
  const [subcategory, setSubCategory] = useState("")
  const [brand, setBrand] = useState("")
  const [price, setPrice] = useState("")
  const [mainprice, setMainPrice] = useState("")
  const [category, setCategory] = useState("")
  const [price_box, setprice_box] = useState("")


  const handleSubmit = async () => {
    const payload = {
      image: image,
      discount: discount,
      name: name,
      subcat2: subcat2,
      subcategory: subcategory,
      brand: brand,
      price: price,
      "mainprice": mainprice,
      "category": category,
      "price-box": price_box,
    }

    // connecting FE with BE
    axios.post("https://onemg-w2kv.onrender.com/products/add",payload )
      .then(res => console.log(res.data))
      
      .catch(err => console.log(err))

      setImage("")
      setDiscount("")
      setName("")
      setSubcat2("")
      setSubCategory("")
      setBrand("")
      setPrice("")
      setMainPrice("")
      setCategory("")
      setprice_box("")
    }

  return (
    <Flex minH={'80vh'} align={'center'} justify={'center'}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={4}
        my={8}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Add Product
        </Heading>
        <FormControl id="image" isRequired>
          <FormLabel>Image URL</FormLabel>
          <Input type="text" placeholder="Enter Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
        </FormControl>

        <FormControl id="discount" isRequired>
          <FormLabel>Discount</FormLabel>
          <Input type="text" placeholder="Enter Discount" value={discount} onChange={(e) => setDiscount(e.target.value)} />
        </FormControl>

        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>

        <FormControl id="subcat2" isRequired>
          <FormLabel>Sub-Category: 2</FormLabel>
          <Input type="text" placeholder="Enter Sub-Category: 2" value={subcat2} onChange={(e) => setSubcat2(e.target.value)} />
        </FormControl>

        <FormControl id="subcategory" isRequired>
          <FormLabel>Sub-Category</FormLabel>
          <Input type="text" placeholder="Enter Sub-Category" value={subcategory} onChange={(e) => setSubCategory(e.target.value)} />
        </FormControl>

        <FormControl id="brand" isRequired>
          <FormLabel>Brand</FormLabel>
          <Input type="text" placeholder="Enter Brand Name" value={brand} onChange={(e) => setBrand(e.target.value)} />
        </FormControl>

        <FormControl id="price" isRequired>
          <FormLabel>Price</FormLabel>
          <Input type="text" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </FormControl>

        <FormControl id="mainprice" isRequired>
          <FormLabel>Main Price</FormLabel>
          <Input type="text" placeholder="Enter Main Price" value={mainprice} onChange={(e) => setMainPrice(e.target.value)} />
        </FormControl>

        <FormControl id="category" isRequired>
          <FormLabel>Category</FormLabel>
          <Input type="text" placeholder="Enter category" value={category} onChange={(e) => setCategory(e.target.value)} />
        </FormControl>

        <FormControl id="price_box" isRequired>
          <FormLabel>Price Box</FormLabel>
          <Input type="text" placeholder="Enter Price Box" value={price_box} onChange={(e) => setprice_box(e.target.value)} />
        </FormControl>

        <Stack spacing={6}>
          <Button
            bg={'#ff9698'}
            color={'white'}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}




