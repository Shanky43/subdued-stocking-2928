import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
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
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'


export const EditButton = () => {
    const { id } = useParams();
    // console.log("id",id);
    const [product, setProduct] = useState({
        image: "",
        discount: "",
        name: "",
        subcat2: "",
        subcategory: "",
        brand: "",
        price: "",
        "mainprice": "",
        "category": "",
        "price-box": ""

    })
    // const [image, setImage] = useState("")
    // const [discount, setDiscount] = useState("")
    // const [name, setName] = useState("")
    // const [subcat2, setSubcat2] = useState("")
    // const [subcategory, setSubCategory] = useState("")
    // const [brand, setBrand] = useState("")
    // const [price, setPrice] = useState(0)
    // const [mainprice, setMainPrice] = useState("")
    // const [category, setCategory] = useState("")
    // const [price_box, setprice_box] = useState("")


    useEffect(() => {
        axios.get(`https://onemg-w2kv.onrender.com/products/${id}`)
            .then((res) => {
                setProduct(res.data.products);
                // setImage(res.data.products.image)
                // setDiscount(res.data.products.discount)
                // setName(res.data.products.name)
                // setSubcat2(res.data.products.subcat2)
                // setSubCategory(res.data.products.subcategory)
                // setBrand(res.data.products.brand)
                // setPrice(res.data.products.price)
                // setMainPrice(res.data.products.mainprice)
                // setCategory(res.data.products.category)
                // setprice_box(res.data.products["price-box"])

                console.log("data", res.data);
            })

            .catch((err) => console.log(err));
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
        const payload = {
            ...product
        }

        axios
            .patch(`https://onemg-w2kv.onrender.com/products/update/${id}`, payload)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <div>
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
                        Update Product Data
                    </Heading>
                    <FormControl id="image" isRequired>
                        <FormLabel>Image URL</FormLabel>
                        <Input type="text" placeholder="Enter Image URL" value={product.image} onChange={(e) => setProduct({ ...product, image: e.target.value })} />
                    </FormControl>

                    <FormControl id="discount" isRequired>
                        <FormLabel>Discount</FormLabel>
                        <Input type="text" placeholder="Enter Discount" value={product.discount} onChange={(e) => setProduct({ ...product, discount: e.target.value })} />
                    </FormControl>

                    <FormControl id="name" isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input type="text" placeholder="Enter Name" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
                    </FormControl>

                    <FormControl id="subcat2" isRequired>
                        <FormLabel>Sub-Category: 2</FormLabel>
                        <Input type="text" placeholder="Enter Sub-Category: 2" value={product.subcat2} onChange={(e) => setProduct({ ...product, subcat2: e.target.value })} />
                    </FormControl>

                    <FormControl id="subcategory" isRequired>
                        <FormLabel>Sub-Category</FormLabel>
                        <Input type="text" placeholder="Enter Sub-Category" value={product.subcategory} onChange={(e) => setProduct({ ...product, subcategory: e.target.value })} />
                    </FormControl>

                    <FormControl id="brand" isRequired>
                        <FormLabel>Brand</FormLabel>
                        <Input type="text" placeholder="Enter Brand Name" value={product.brand} onChange={(e) => setProduct({ ...product, brand: e.target.value })} />
                    </FormControl>

                    <FormControl id="price" isRequired>
                        <FormLabel>Price</FormLabel>
                        <Input type="text" placeholder="Enter Price" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} />
                    </FormControl>

                    <FormControl id="mainprice" isRequired>
                        <FormLabel>Main Price</FormLabel>
                        <Input type="text" placeholder="Enter Main Price" value={product.mainprice} onChange={(e) => setProduct({ ...product, mainprice: e.target.value })} />
                    </FormControl>

                    <FormControl id="category" isRequired>
                        <FormLabel>Category</FormLabel>
                        <Input type="text" placeholder="Enter category" value={product.category} onChange={(e) => setProduct({ ...product, category: e.target.value })} />
                    </FormControl>

                    <FormControl id="price_box" isRequired>
                        <FormLabel>Price Box</FormLabel>
                        <Input type="text" placeholder="Enter Price Box" value={product["price-box"]} onChange={(e) => setProduct({ ...product, "price-box": e.target.value })} />
                    </FormControl>

                    <Stack spacing={6}>
                        <Button
                            bg={'#ff9698'}
                            color={'white'}
                            onClick={handleSubmit}
                        >
                            Update
                        </Button>
                        {/* <Alert status='success'>
                            <AlertIcon />
                            Data uploaded to the server. Fire on!
                        </Alert> */}
                    </Stack>
                </Stack>
            </Flex>
        </div>
    );
};
