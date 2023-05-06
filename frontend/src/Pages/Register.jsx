import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  InputRightElement,
  InputGroup,
  useToast,
  Image,
} from "@chakra-ui/react";

import { FormErrorMessage } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { CONFETTI_LIGHT, CONFETTI_DARK } from "../components/Confetti";

import React from "react";
import axios from "axios";
// import { useContext } from "react";
// import { AuthContext } from "../components/authContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
    name: "",
    username: "",
  });

  const Navigate = useNavigate();
  const baseUrl = "http://localhost:8080";
  const { email, password, username, name } = userData;

  const [emailError, setEmailError] = React.useState("");
  const [passError, setPassError] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [usernameError, setUsernameError] = React.useState("");

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const toast = useToast();

  React.useEffect(() => {
    if (!name) {
      setNameError("Please Fill the Name");
    }
    if (!password) {
      setPassError("Please Fill the Password");
    }

    if (!email) {
      setEmailError("Email address is required.");
    }

    if (!username) {
      setUsernameError("Please Fill the username");
    }
  }, [email, password, name, username]);

  //Handle User Data to the server

  const handleUserData = async () => {
    try {
      const res = await axios.post(`${baseUrl}/users/register`, userData);
      if (res.status === 201) {
        toast({
          title: "Sucessfully Register.",
          description: "Go to the Login Page.",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
        Navigate("/login");
      }
      console.log("Neeraj");
    } catch (error) {
      console.log(error);
      toast({
        title: "Email already exists.",
        description: "Please correct your detail.",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack
      bg={useColorModeValue("gray.100", "gray.900")}
      css={{
        backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
        backgroundAttachment: "fixed",
      }}
      p={3}
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
    >
      <Flex flex={1} justifyContent="center" alignItems="center">
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1683116959~exp=1683117559~hmac=df6a00f7e71511df5cf07b5c7144a5a914f8fcce01295b17c36e6367e84cc5ee"
          }
        />
      </Flex>

      <Flex p={10} flex={1} align={"center"} justify={"center"}>
        <Stack
          shadow="5px 1px 3px rgba(0, 0, 0, 0.3)"
          spacing={4}
          w={"full"}
          maxW={"md"}
          p={5}
        >
          <Heading fontSize={"2xl"}>Register Here</Heading>
          <hr />

          <Flex>
            <FormControl
              isRequired
              isInvalid={!!nameError}
              errorBorderColor="green"
              mr="5%"
            >
              <FormLabel>Name</FormLabel>
              <Input
                borderColor="black"
                value={name}
                onChange={(e) => {
                  setUserData({ ...userData, name: e.target.value });
                  if (!e.target.value) {
                    setNameError("Name input is required.");
                  } else {
                    setNameError("");
                  }
                }}
                id="name"
                placeholder="Name"
              />
              <FormErrorMessage>{nameError}</FormErrorMessage>
            </FormControl>

            <FormControl
              isRequired
              isInvalid={!!usernameError}
              errorBorderColor="green"
              mr="5%"
            >
              <FormLabel>Username</FormLabel>
              <Input
                borderColor="black"
                value={username}
                onChange={(e) => {
                  setUserData({ ...userData, username: e.target.value });
                  if (!e.target.value) {
                    setUsernameError("Username is required.");
                  } else {
                    setUsernameError("");
                  }
                }}
                id="last-name"
                placeholder="Username"
              />
              <FormErrorMessage>{usernameError}</FormErrorMessage>
            </FormControl>
          </Flex>

          <FormControl
            isRequired
            isInvalid={!!emailError}
            errorBorderColor="green"
            mr="5%"
            mt="2%"
          >
            <FormLabel>Email address</FormLabel>
            <Input
              borderColor="black"
              value={email}
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
                if (!e.target.value) {
                  setEmailError("Email address is required.");
                } else {
                  setEmailError("");
                }
              }}
              id="email"
              type="email"
              placeholder="Enter password"
            />
            <FormErrorMessage>{emailError}</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={!!passError}
            errorBorderColor="green"
            mr="5%"
          >
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                borderColor="black"
                value={password}
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                  if (!e.target.value) {
                    setPassError("Passsword address is required.");
                  } else {
                    setPassError("");
                  }
                }}
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />

              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{passError}</FormErrorMessage>
          </FormControl>

          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"orange.500"}>Forgot password?</Link>
            </Stack>
            <Button
              onClick={() => {
                if (!emailError && !passError && !nameError && !usernameError) {
                  //Checking for the email validation
                  const re = /\S+@\S+\.\S+/;
                  if (re.test(email)) {
                    handleUserData();
                  } else {
                    toast({
                      title: "Correct the Email.",
                      description: "Please correct your Email.",
                      status: "error",
                      duration: 1000,
                      isClosable: true,
                    });
                    return;
                  }
                } else {
                  toast({
                    title: "Fill all the Input.",
                    description: "Please correct your detail.",
                    status: "warning",
                    duration: 1000,
                    isClosable: true,
                  });
                }
              }}
              bg={"orange.400"}
              colorScheme={"orange"}
              variant={"solid"}
            >
              Sign Up
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
