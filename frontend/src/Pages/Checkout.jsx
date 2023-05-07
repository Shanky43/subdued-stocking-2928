import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Img,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../Styling/Cart.module.css";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

// import img from '../logo/Ezyshop.jpeg'
const Checkout = () => {
  const [show, setshow] = useState(false);
  const [showtwo, setshowtwo] = useState(false);
  const [main, setmain] = useState(false);
  const [color, setcolor] = useState(0);
  const [showpayment, setshowpayment] = useState(false);

  const [totalSum, setTotalSum] = React.useState(0);
  const [cardData, setCardData] = React.useState([]);

  const [deliver, setdeliver] = useState(false);
  const [submit, setsubmit] = useState(false);

  React.useEffect(() => {
    getCartData();
  }, []);

  let navigate = useNavigate();
  const toast = useToast();

  let handlebg = (e) => {
    setcolor(e.target.value);
  };

  const cartData = [];

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: `Address Saved`,
      position: "top",
      description: "Your address is saved.",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
    setshowpayment(true);
    setsubmit(true);
  };

  const getCartData = async () => {
    try {
      if (!token) {
        console.log("Please log in to access cart data");
        return;
      }

      const res = await axios.get(
        "https://healthcube.onrender.com/cart",
        config
      );
      const cartItems = res.data.map((item) => ({
        ...item,
        totalPrice: item.price * item.quantity,
      }));
      const findSum = cartItems.reduce(
        (accumulator, currentItem) => accumulator + currentItem.totalPrice,
        0
      );

      await axios
        .post("https://healthcube.onrender.com/cart/delete/all")
        .then((res) => console.log(res))
        .catch((error) => console.log(error));

      setTotalSum(findSum);
      setCardData(cartItems);
    } catch (err) {
      console.error(err);
    }
  };

  let submiterror = async () => {
    if (submit === false) {
      toast({
        title: "Fill Details.",
        description: "Please Fill All the Details.",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
    if (submit === true) {
      toast({
        title: "Sucessfull Purchase.",
        description: "Thank-you for your purchase.",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      navigate("/thankyou");
    }
    await axios.post(
      "https://healthcube.onrender.com/order/add",
      cardData,
      config
    );

    getCartData();
  };

  return (
    <>
      <Flex
        bg={"#f7f7f7"}
        justifyContent={"space-around"}
        height={"70px"}
        w={"95%"}
        m={"auto"}
        alignItems={"center"}
      >
        <Text>
          <Img src="https://m.media-amazon.com/images/G/31/x-locale/checkout/truespc/secured-ssl._CB485936980_.png"></Img>
        </Text>
      </Flex>
      <Text
        color={"#ff6f61"}
        fontWeight={700}
        fontSize={"25px"}
        lineHeight={"20px"}
        w={"80%"}
        m={"auto"}
        mt={"20px"}
        mb={"20px"}
      >
        Enter a new shipping address
      </Text>
      <Grid
        gridTemplateColumns={{ base: "repeat(1fr)", md: "65% 1fr" }}
        w={"80%"}
        m={"auto"}
        gap={6}
      >
        <GridItem border={"1px solid #d5d9d9"} p={"30px"} borderRadius={"10px"}>
          <Text
            color={"ff6f61"}
            fontWeight={700}
            lineHeight={"32px"}
            fontSize={"24px"}
          >
            Add a new address
          </Text>
          <Text
            border={"1px solid #50c4d9"}
            fontWeight={700}
            m={"10px 0"}
            bg={"#dbf8fc"}
            p={"20px"}
            fontSize={"14px"}
            borderRadius={"10px"}
          >
            Save time. Autofill your current location.
          </Text>

          <form onSubmit={handleSubmit}>
            <Text className={styles.samePaymet}>Country/Region</Text>
            <Select border={"1px solid #888c8c"} bg={"#f0f2f2"} h={"30px"}>
              <option>India</option>
              <option>UK</option>
              <option>Hong Kong</option>
              <option>Jordon</option>
            </Select>
            <Text className={styles.samePaymet}>
              Full name (First and Last name)
            </Text>
            <Input isRequired border={"1px solid #888c8c"} h={"30px"}></Input>
            <Text className={styles.samePaymet}>Mobile number</Text>
            <Input isRequired border={"1px solid #888c8c"} h={"30px"}></Input>
            <Text className={styles.samePaymet}>Pincode</Text>
            <Input isRequired border={"1px solid #888c8c"} h={"30px"}></Input>
            <Text className={styles.samePaymet}>
              Flat, House no., Building, Company, Apartment
            </Text>
            <Input isRequired border={"1px solid #888c8c"} h={"30px"}></Input>
            <Text className={styles.samePaymet}>
              Area, Street, Sector, Village
            </Text>
            <Input isRequired border={"1px solid #888c8c"} h={"30px"}></Input>
            <Text className={styles.samePaymet}>Landmark</Text>
            <Input isRequired border={"1px solid #888c8c"} h={"30px"}></Input>
            <Grid gridTemplateColumns={"repeat(2,1fr)"} gap={6} mb={"20px"}>
              <Text>
                <Text className={styles.samePaymet}>Town/City</Text>
                <Input
                  isRequired
                  border={"1px solid #888c8c"}
                  h={"30px"}
                ></Input>
              </Text>
              <Text>
                <Text className={styles.samePaymet}>State</Text>
                <Select
                  isRequired
                  border={"1px solid #888c8c"}
                  h={"30px"}
                  bg={"#f0f2f2"}
                >
                  <option>Maharashtra</option>
                  <option>Ladakh</option>
                  <option>Jammu</option>
                </Select>
              </Text>
            </Grid>
            <Checkbox mt={"5px"} mr={"10px"}></Checkbox>
            <Text
              display={"inline"}
              color={"#4b4c36"}
              fontSize={"14px"}
              fontWeight={500}
            >
              Make this my default address
            </Text>
            <Text m="10px 0" fontWeight={500}>
              Delivery instructions (optional)
            </Text>

            <Text
              className={`${styles.cartGreen} ${styles.cartUnderLine}`}
              onClick={() => setmain(!main)}
            >
              {!main ? (
                <ChevronUpIcon color={"black"} fontSize={"19px"} />
              ) : (
                <ChevronDownIcon color={"black"} fontSize={"19px"} />
              )}{" "}
              Add preferences, notes, access codes and more
            </Text>
            <Box display={main ? "block" : "none"}>
              <Text fontSize={"14px"} fontWeight={600} m="10px 0">
                Please select an address type
              </Text>
              <Text
                bg="#f3f3f3"
                p="15px"
                fontWeight={600}
                position={"relative"}
                mb={show ? "10px" : "0px"}
                onClick={() => setshow(!show)}
                border={"1px solid gray"}
                cursor={"pointer"}
              >
                Select your do not disturb delivery prefrence
                {!show ? (
                  <ChevronUpIcon
                    position={"absolute"}
                    right={"10px"}
                    fontSize={"20px"}
                    top="20px"
                  />
                ) : (
                  <ChevronDownIcon
                    position={"absolute"}
                    right={"10px"}
                    fontSize={"20px"}
                    top="20px"
                  />
                )}
              </Text>
              <Box display={show ? "bloxk" : "none"}>
                <input type={"radio"} name="single"></input>
                <Text
                  display={"inline"}
                  ml={"10px"}
                  fontWeight={500}
                  fontSize={"15px"}
                >
                  Front Door
                </Text>
                <br />
                <input type={"radio"} name="single"></input>
                <Text
                  display={"inline"}
                  ml={"10px"}
                  fontWeight={500}
                  fontSize={"15px"}
                >
                  With a security guard
                </Text>
                <br />
                <input type={"radio"} name="single"></input>
                <Text
                  display={"inline"}
                  ml={"10px"}
                  fontWeight={500}
                  fontSize={"15px"}
                >
                  Mailroom
                </Text>
                <br />
                <input type={"radio"} name="single"></input>
                <Text
                  display={"inline"}
                  ml={"10px"}
                  fontWeight={500}
                  fontSize={"15px"}
                >
                  Turn off do not disturb delivery
                </Text>
              </Box>
              <Text
                bg="#f3f3f3"
                p="15px"
                fontWeight={600}
                position={"relative"}
                border={"1px solid gray"}
                mb={show ? "10px" : "0px"}
                cursor={"pointer"}
                onClick={() => setshowtwo(!showtwo)}
              >
                Share additional information to find this address
                {!showtwo ? (
                  <ChevronUpIcon
                    position={"absolute"}
                    right={"10px"}
                    fontSize={"20px"}
                    top="20px"
                  />
                ) : (
                  <ChevronDownIcon
                    position={"absolute"}
                    right={"10px"}
                    fontSize={"20px"}
                    top="20px"
                  />
                )}
              </Text>
              <Textarea
                display={showtwo ? "block" : "none"}
                placeholder="Provide detail such as building description, a nearby lanmark ,or other navigation instruction"
              ></Textarea>
            </Box>
            <Button
              m={"auto"}
              // display="flex"
              bg={"#ff6f61"}
              width={"40%"}
              mt={"4"}
              color={"black"}
              type="submit"
              className={styles.PaymenUsebtn}
            >
              Confirm Address
            </Button>
          </form>
        </GridItem>
        <GridItem display={{ base: "none", md: "block" }}>
          <Box p={"20px"} border={"1px solid #d5d9d9"} borderRadius={"10px"}>
            <Text
              fontSize={"14px"}
              m="5px 0px"
              fontWeight={600}
              color={"teal"}
              mb={"10px"}
            >
              By placing your order, you agree to Amazon's privacy notice and
              conditions of use.
            </Text>
            <hr />
            <Text fontWeight={700} fontSize={"18px"} m="10px 0px">
              Order Summary
            </Text>
            <Box m="5px 0px">
              <Text display={"inline"}>Items:</Text>
              <Text float={"right"} display={"inline"} fontWeight={600}>
                ₹{totalSum}.00
              </Text>
            </Box>
            <Box m="5px 0px">
              <Text display={"inline"}>Delivery:</Text>
              <Text float={"right"} display={"inline"} fontWeight={600}>
                ₹0.00
              </Text>
            </Box>
            <hr />
            <Box m="5px 0px" fontWeight={700} fontSize={"20px"}>
              <Text display={"inline"} color={"#b1271b"}>
                Order Total:
              </Text>
              <Text float={"right"} display={"inline"} color={"#b1271b"}>
                ₹{totalSum}.00
              </Text>
            </Box>
            <Text color={"teal"}>
              Your Savings:
              <span style={{ fontWeight: 600, float: "right" }}>₹00.00</span>
            </Text>

            <Button
              mt={"3"}
              bg={"#ff6f61"}
              color="black"
              className={styles.PaymenUsebtn}
              style={{ width: "100%" }}
              onClick={submiterror}
            >
              Place your order
            </Button>
          </Box>
        </GridItem>
        <Box
          border={"1px solid #d5d9d9"}
          m={"20px 0px"}
          borderRadius={"10px"}
          p={"10px"}
          position={"relative"}
        >
          <Text
            color={"#ff6f61"}
            fontWeight={700}
            fontSize={"18px"}
            lineHeight={"24px"}
            w={"80%"}
            mt={"20px"}
            mb={"20px"}
            ml="15px"
            cursor={"pointer"}
            onClick={() => setshowpayment(!showpayment)}
          >
            Select a payment method{" "}
            {!showpayment ? (
              <ChevronUpIcon
                color={"black"}
                fontSize={"28px"}
                position={"absolute"}
                right={"10px"}
              />
            ) : (
              <ChevronDownIcon
                color={"black"}
                fontSize={"28px"}
                position={"absolute"}
                right={"10px"}
              />
            )}
          </Text>
          {/* now started */}
          <Box display={showpayment ? "block" : "none"}>
            <Box
              bg={color === 1 ? "#fcf5ee" : "none"}
              p={"20px"}
              borderRadius={"10px"}
            >
              <Text fontWeight={500} fontSize={"24px"} m="10px 0px">
                payment method
              </Text>
              <input
                type="radio"
                name="payment"
                onClick={handlebg}
                value={1}
                style={{ cursor: "pointer" }}
              ></input>
              <Text display={"inline"} ml={"10px"} fontWeight={700}>
                Pay with Debit/Credit/ATM Cards
              </Text>
              <Text fontSize={"14px"}>
                You can save your cards as per new RBI guidelines
              </Text>
              <Img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtwZGS06LQiYrucl4l1fkLG6QIPHVMJktWbA&usqp=CAU"
                h={"70px"}
              ></Img>
            </Box>
            <Box
              bg={color === 2 ? "#fcf5ee" : "none"}
              p={"20px"}
              borderRadius={"10px"}
            >
              <input
                type="radio"
                name="payment"
                onClick={handlebg}
                value={2}
                style={{ cursor: "pointer" }}
              ></input>
              <Text display={"inline"} ml={"10px"} fontWeight={700}>
                Net Banking
              </Text>
              <select className={styles.selectPayment}>
                <option>Axis Bank</option>
                <option>HDFC Bank</option>
                <option>ICICI Bank</option>
                <option>Kotak Bank</option>
              </select>
              <Text fontSize={"14px"}>
                For faster payment and instant refund, please use UPI{" "}
              </Text>
            </Box>
            <Box
              bg={color === 3 ? "#fcf5ee" : "none"}
              p={"20px"}
              borderRadius={"10px"}
            >
              <input
                type="radio"
                name="payment"
                onClick={handlebg}
                value={3}
                style={{ cursor: "pointer" }}
              ></input>
              <Text display={"inline"} fontWeight={700} ml={"10px"}>
                Other UPI Apps
              </Text>
              <Text fontSize={"14px"} m={"5px 0px"}>
                Please enter your UPI ID
              </Text>
              <Box display={color === 3 ? "block" : "none"}>
                <input
                  placeholder="  Ex: MobileNumber@upi  "
                  className={styles.upiinput}
                ></input>
                <button className={styles.PaymenUsebtn}>Verify</button>
              </Box>
            </Box>
            <Box
              bg={color === 4 ? "#fcf5ee" : "none"}
              p={"20px"}
              borderRadius={"10px"}
            >
              <input
                type="radio"
                name="payment"
                onClick={handlebg}
                value={4}
                style={{ cursor: "pointer" }}
              ></input>
              <Text display={"inline"} fontWeight={700} ml={"10px"}>
                Cash On Delivery/Pay On Delivery
              </Text>
              <Text fontSize={"14px"}>
                Scan & Pay using Amazon app. Cash, UPI ,Cards also accepted.
              </Text>
            </Box>
            <button
              className={styles.PaymenUsebtn}
              style={{ marginLeft: "15px" }}
              onClick={() => {
                alert("Payment method has selected");
              }}
            >
              Use this payment method
            </button>
          </Box>
        </Box>
      </Grid>
      <Box
        border={"1px solid #d5d9d9"}
        borderRadius={"10px"}
        p={"10px"}
        position={"relative"}
        w={{ base: "80%", md: "52%" }}
        left={"10%"}
      >
        <Text
          fontWeight={500}
          fontSize={"20px"}
          m="10px 0px"
          p={"10px"}
          cursor={"pointer"}
          color={"#ff6f61"}
          onClick={() => setdeliver(!deliver)}
        >
          Review items and delivery
          {!deliver ? (
            <ChevronUpIcon
              color={"black"}
              fontSize={"28px"}
              position={"absolute"}
              right={"10px"}
            />
          ) : (
            <ChevronDownIcon
              color={"black"}
              fontSize={"28px"}
              position={"absolute"}
              right={"10px"}
            />
          )}
        </Text>
        <hr />
        {cartData &&
          cartData.map((el) => {
            return (
              <Grid mb="10px" display={deliver ? "block" : "none"}>
                <Grid
                  mt={"10px"}
                  gridTemplateColumns={"repeat(2,1fr)"}
                  alignItems={"center"}
                  gap={6}
                >
                  <GridItem>
                    <Box height={"100px"} width={"100px"} m={"auto"}>
                      <Img src={el.image} height={"100%"} width={"100%"}></Img>
                    </Box>
                  </GridItem>
                  <GridItem>
                    <Text fontWeight={700} fontSize={"14px"}>
                      {el.description}
                    </Text>
                    <Text fontWeight={500} color={"#b12704"}>
                      ₹{el.price}.00
                    </Text>
                    <Img
                      display={"inline"}
                      height={"30px"}
                      width={"30px"}
                      src="https://m.media-amazon.com/images/G/31/easyship-SVDRVS/amazon-delivered-DSVVSR._CB485933315_.png"
                    ></Img>
                    <Text
                      display={"inline"}
                      fontSize={"15px"}
                      position={"relative"}
                      top={"-10px"}
                    >
                      Amazon Delivered
                    </Text>

                    <Text fontWeight={600} color={"teal"}>
                      <span style={{ color: "#565982", marginRight: "10px" }}>
                        Sold by:
                      </span>
                      {el.brand}
                    </Text>
                    <Text m={"5px 0"} fontWeight={600}>
                      Gift options not available
                    </Text>
                  </GridItem>
                </Grid>
              </Grid>
            );
          })}
      </Box>
      <GridItem
        display={{ base: "block", md: "none" }}
        w={"80%"}
        m={"auto"}
        mt={"20px"}
      >
        <Box p={"20px"} border={"1px solid #d5d9d9"} borderRadius={"10px"}>
          <Text
            fontSize={"14px"}
            m="5px 0px"
            fontWeight={600}
            color={"teal"}
            mb={"10px"}
          >
            By placing your order, you agree to Amazon's privacy notice and
            conditions of use.
          </Text>
          <hr />
          <Text fontWeight={700} fontSize={"18px"} m="10px 0px">
            Order Summary
          </Text>
          <Box m="5px 0px">
            <Text display={"inline"}>Items:</Text>
            <Text float={"right"} display={"inline"} fontWeight={600}>
              ₹{totalSum}.00
            </Text>
          </Box>
          <Box m="5px 0px">
            <Text display={"inline"}>Delivery:</Text>
            <Text float={"right"} display={"inline"} fontWeight={600}>
              ₹0.00
            </Text>
          </Box>
          <hr />
          <Box m="5px 0px" fontWeight={700} fontSize={"20px"}>
            <Text display={"inline"} color={"#b1271b"}>
              Order Total:
            </Text>
            <Text float={"right"} display={"inline"} color={"#b1271b"}>
              ₹{totalSum}.00
            </Text>
          </Box>
          <Text color={"teal"}>
            Your Savings:
            <span style={{ fontWeight: 600, float: "right" }}>₹00.00</span>
          </Text>

          <Button
            bg={"#ff6f61"}
            mt={"4"}
            color="black"
            className={styles.PaymenUsebtn}
            style={{ width: "100%" }}
            onClick={submiterror}
          >
            Place your order
          </Button>
        </Box>
      </GridItem>
    </>
  );
};

export default Checkout;
