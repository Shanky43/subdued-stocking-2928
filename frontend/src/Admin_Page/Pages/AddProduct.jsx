import React from 'react'
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

export const AddProduct = () => {
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
          <Input />
        </FormControl>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input />
        </FormControl>
        <FormControl id="price" isRequired>
          <FormLabel>Price</FormLabel>
          <Input />
        </FormControl>
        <FormControl id="category" isRequired>
          <FormLabel>Category</FormLabel>
          <Input />
        </FormControl>
        <FormControl id="brand" isRequired>
          <FormLabel>Brand</FormLabel>
          <Input />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'#ff9698'}
            color={'white'}
            >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}




