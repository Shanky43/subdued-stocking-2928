import React, { useEffect, useRef, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { GiHamburgerMenu, GiExitDoor } from "react-icons/gi";
import { FcFlashOn } from "react-icons/fc";
import logo from "../../Assests/logo.png";
import style from "../../App.css";
import {
  Text,
  Badge,
  HStack,
  Box,
  Center,
  Flex,
  Icon,
  Divider,
  FormControl,
  Input,
  Select,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useToast,
  VStack,
} from "@chakra-ui/react";
import MobileMenu from "./MobileMenu";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import { MdLocationPin, MdOutlineMyLocation } from "react-icons/md";
import NavDrop from "./NavDrop";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <>
      <VStack w="100%" mb="8px">
        <MobileNav />
        <Flex
          display={{ base: "none", xl: "flex" }}
          w="100%"
          direction={"column"}
          id="maindiv"
        >
          <UpperFullRow />
          <SecondFullRow />
          <NavDrop />
        </Flex>
        <Box
          w="96%"
          m="auto"
          display={{ base: "block", xl: "none" }}
          border="1px solid gray"
          borderStyle={"double"}
        >
          <SearchLocation
            p={1}
            righticon={BiSearchAlt2}
            placeholder="Search for Medicines and Health Products"
          />
        </Box>
      </VStack>
    </>
  );
};

export default Navbar;

// first Row--

/**
 * components--
 * 1- Row text function ==> RowTextHeading
 * 2-- Upper Most Whole row ===> UpperFullRow
 * 3- Second Full row  ===> SecondFullRow
 * 3.1 location search ==> SearchLocation
 */

const RowTextHeading = ({ title, active, badge }) => {
  return (
    <Center>
      <Text
        transition="0.3s ease-in-out"
        fontWeight={650}
        fontSize="15px"
        color={active ? "#ff6f61" : "black.600"}
        _hover={{
          color: "#ff6f61",
          cursor: "pointer",
        }}
      >
        {title}
      </Text>
      {badge && <Badge colorScheme="red">{badge}</Badge>}
    </Center>
  );
};

const UpperFullRow = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  const UserNameRef = useRef(null);
  let token = useRef(null);
  const uppermostrow = [
    { title: "MEDICINE", active: true },
    { title: "LAB TESTS", badge: "SAFE" },
    { title: "CONSULT DOCTORS" },
    { title: "CANCER CARE" },
    { title: "AYURVEDA" },
    { title: "CARE PLAN", badge: "SAVE MORE" },
  ];
  console.log(UserNameRef.current, "....123");
  useEffect(() => {
    UserNameRef.current = localStorage.getItem("UserName") || "Admin";
    token.current = localStorage.getItem("token");
    console.log(UserNameRef.current);
  }, []);

  return (
    <>
      <HStack
        justifyContent={"space-between"}
        p={2}
        borderBottom="1px solid #f1f4f6"
        mb={"3px"}
        display={{ base: "none", xl: "flex" }}
      >
        <Box role="logo" w="120px" mx="10px">
          <Link to={"/"}>
            <Image src={logo} />
          </Link>
        </Box>{" "}
        <Flex
          display={{ base: "none", xl: "flex" }}
          justifyContent={"space-between"}
          w="60%"
        >
          {uppermostrow.map((el, ind) => (
            <RowTextHeading key={ind} {...el} />
          ))}
        </Flex>{" "}
        {token.current != null && UserNameRef.current != "Admin" ? (
          <Box>
            <Flex>
              {" "}
              {UserNameRef.current.charAt(0).toUpperCase() +
                UserNameRef.current.slice(1)}{" "}
              &nbsp;
              <MdAccountCircle size={20} />
            </Flex>
          </Box>
        ) : (
          <Box>
            <Flex
              display={{ base: "none", xl: "flex" }}
              fontSize="15px"
              justifyContent={"space-between"}
              w="100px"
            >
              <Link to="/login">
                {" "}
                <Text>Login</Text>{" "}
              </Link>
              <Text> | </Text>
              <Link to="/register">
                {" "}
                <Text>Sign Up</Text>{" "}
              </Link>
            </Flex>{" "}
          </Box>
        )}
        <Text>Offers</Text>
        <Center>
          <Link to="/cart">
            {" "}
            <BsCart3 size="24px" />
          </Link>
        </Center>
        <Box w="100px" fontSize="14px">
          <Link to={"/orderhistory"}>
            <Text>My Order</Text>
          </Link>
        </Box>
      </HStack>
    </>
  );
};

const SecondFullRow = () => {
  const navigate = useNavigate();

  const toast = useToast();
  const handleReachadmin = () => {
    toast({
      title: "Congratulations, To Became Our seller",
      description: "Navigating To Admin Page",
      position: "top",

      duration: 2000,
      variant: "top-accent",
      isClosable: true,
    });
    navigate("/adminLogin");
  };

  const handleLogOut = () => {
    toast({
      title: "Successfully LOGGED OUT",
      description: "ThankYou To visit our website",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <>
      <Flex
        display={{ base: "none", xl: "flex" }}
        justifyContent="space-between"
        mx="50px"
        mr="20px"
      >
        <Box pr="5px">
          <SearchLocation
            width="180px"
            select={true}
            lefticon="true"
            placeholder="Location"
            righticon={MdOutlineMyLocation}
          />
        </Box>

        <Box>
          <SearchLocation
            width="600px"
            righticon={BiSearchAlt2}
            placeholder="Search for Medicines and Health Products"
          />
        </Box>

        <Center>
          <FcFlashOn />
        </Center>

        <HStack gap="1mm">
          <Text w={"200px"} fontSize="15px">
            QUICK BUY! Get 15% off on medicines*
          </Text>
          <Menu
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            h={"35px"}
            fontSize={"sm"}
            borderWidth="1px"
            _expanded={{ bg: "#ff6f61" }}
            _focus={{ boxShadow: "outline" }}
          >
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  _hover={{ decoration: "none" }}
                  color="orange.600"
                  rightIcon={<GiExitDoor />}
                >
                  {!isOpen ? "Enter" : "Exit"}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={handleLogOut}>LOG OUT</MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={handleReachadmin}>ADMIN</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </HStack>
      </Flex>
    </>
  );
};

const SearchLocation = ({
  width,
  lefticon,
  placeholder,
  righticon,
  select,
}) => {
  return (
    <>
      <FormControl w={width} border="0">
        <InputGroup>
          {lefticon && (
            <InputLeftElement
              pointerEvents="none"
              mr="2px"
              children={<MdLocationPin color="blackAlpha.600" />}
            />
          )}

          {select ? (
            <>
              <Select
                name="Select You Country"
                id="country_homepage"
                gap={2}
                ml="10px"
              >
                <option value="New Delhi">New Delhi</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antartica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegowina">
                  Bosnia and Herzegowina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">
                  British Indian Ocean Territory
                </option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
              </Select>
            </>
          ) : (
            <Input
              variant={"solid"}
              color={"gray.800"}
              bgColor={"#f1f4f6"}
              _placeholder={{
                color: "gray.600",
                fontWeight: "400",
                fontSize: "13px",
              }}
              type={"email"}
              required
              placeholder={placeholder}
              height={"35px"}
              borderRadius={"none"}
            />
          )}

          <InputRightElement>
            <Icon as={righticon} color="blackAlpha.600" />
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};
