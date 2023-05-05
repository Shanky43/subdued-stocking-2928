import {React, useState} from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import background from "../images/adminbackground.jpg";
import { AdminNav } from "../Components/AdminNav";

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e);
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        window.location.href = '/admin'; // Redirect to dashboard page after login
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
      console.log(error);
    }
  };

  return (
    <>
    <AdminNav/>
    <Box position={'relative'} style={{ backgroundImage: `url(${background})` }}>
      <Box pt="50px"h="720px">
        <Flex minH={"70vh"} align={"center"} justify={"center"} >
          <Stack spacing={7} mx={"auto"} maxW={"lg"} py={4} px={6} h="500px" w="500px">
            <Box box-shadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px" h="100%" w="100%" rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
              <Stack mt="20px" mb="10px">
                <Text fontSize="20px" color={"gray.600"} textColor="black" fontWeight="800">
                  Login to view your Adminpage ✌️
                </Text>
              </Stack>
              <Stack spacing={10} pt="40px">
                <form action="" onSubmit={handleSubmit}>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input border="1px solid black" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Email Password</FormLabel>
                    <Input border="1px solid black" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </FormControl>
                    <Button border="1px solid black" mt="50px" type="submit" width="250px">Log in</Button>
                </form>
                {error && <p>{error}</p>}
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </Box>
    </>
  );
}
export default AdminLogin;