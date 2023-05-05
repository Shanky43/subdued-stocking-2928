import {
  Box,
  Button,
  Checkbox,
  Grid,
  GridItem,
  Img,
  Select,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import styles from "../Styling/Cart.module.css";
import {
  calculateamt,
  fourdata,
  getDataAction,
  getSaveLaterAction,
  handleAddAction,
  handleLaterAction,
  handlequantityAction,
} from "../Redux/CartReducer/action";
import { useDispatch, useSelector } from "react-redux";
// import { handleDeleteAction } from "../Redux/CartReducer/action";
// import SaveLater from "../Components/SaveLater";
import { Link } from "react-router-dom";
// import Toster from "../Components/Toster";
const Cart = () => {
  const [data, setdata] = useState([]);
  const [block, setblock] = useState(false);
  const [selectcheck, setselect] = useState(true);
  let { cartData, total } = useSelector((state) => state.cartReducer);
  let dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(getDataAction);
  //     dispatch(calculateamt);
  //     dispatch(getSaveLaterAction);
  //     setdata(fourdata);
  //   }, []);

  let handleSelect = () => {
    console.log(selectcheck);
    setselect(!selectcheck);
  };
  let handleDelete = (id) => {
    // dispatch(handleDeleteAction(id));
    // dispatch(calculateamt);
  };

  let handleAdd = (el) => {
    dispatch(handleAddAction(el));
    dispatch(calculateamt);
  };
  let handleLater = (id, el) => {
    handleDelete(id);
    dispatch(handleLaterAction(el));
  };
  let handlequantity = (id, value) => {
    dispatch(handlequantityAction(id, Number(value)));
    dispatch(getDataAction);
    dispatch(calculateamt);
  };
  return (
    <>
      <Grid
        gridTemplateColumns={{ sm: "repeat(1,1fr)", md: "1fr 25%" }}
        p={"20px"}
        gap={5}
      >
        <GridItem
          position="relative"
          p={"20px"}
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        >
          <Text className={styles.shopCart}> Shopping Cart</Text>
          <span className={styles.deselect} onClick={handleSelect}>
            Deselect all items
          </span>
          <p className={styles.right}>Price</p>
          <hr />
          <br />
          <br />
          {cartData &&
            cartData.map((el, i) => {
              return (
                <Grid
                  gridTemplateColumns={{ sm: "repeat(1,1fr)", md: "20% 1fr" }}
                  pb={"30px"}
                  mb={"30px"}
                  gap={10}
                  borderBottom="1px solid #CFD8DC"
                >
                  <GridItem position="relative" mb={"30px"} key={el.id}>
                    <Text display={"flex"}>
                      <Text>
                        <input
                          type={"checkbox"}
                          defaultChecked={selectcheck}
                          checked={selectcheck}
                          position="absolute"
                        ></input>
                      </Text>
                      <Text position={"relative"} top="70px">
                        <img
                          src={el.image}
                          width={"200px"}
                          height={"200px"}
                        ></img>
                      </Text>
                    </Text>
                  </GridItem>
                  <GridItem position="relative">
                    <Text className={styles.title} display="inline">
                      {el.description}
                    </Text>
                    <Text
                      position={"absolute"}
                      right="5px"
                      top={"30px"}
                      display="inline"
                      className={styles.priceCart}
                    >
                      ₹{el.price}
                    </Text>
                    <Text className={styles.cartDays}>
                      Usually dispatched in{" "}
                      {Math.floor(Math.random() * 10) || 2}
                      Days.
                    </Text>
                    <Text className={styles.bywhom}>by {el.brand}</Text>
                    <Text
                      className={styles.purple}
                      m={"5px 0px"}
                      display={i % 2 != 0 ? "none " : "inline"}
                    >
                      #1 Best Seller
                    </Text>
                    <Text
                      display={i % 2 == 0 ? "none " : "block"}
                      m={"5px 0px"}
                    >
                      <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"></img>
                    </Text>
                    <Text className={styles.cartGreen} fontSize={"14px"}>
                      In Stock
                    </Text>
                    <Text className={styles.free} m={"2px 0px"}>
                      Eligible for FREE Shipping
                    </Text>
                    <span
                      style={{ paddingRight: "10px" }}
                      className={styles.sold}
                    >
                      Sold by:
                    </span>
                    <span
                      className={`${styles.cartGreen} ${styles.cartUnderLine}`}
                      style={{ fontSize: "15px" }}
                    >
                      {el.brand}
                    </span>
                    <Text display={"flex"} alignItems="center">
                      <Img
                        className={styles.img}
                        src="https://m.media-amazon.com/images/G/31/easyship-SVDRVS/amazon-delivered-DSVVSR._CB485933315_.png"
                      ></Img>
                      <span className={styles.purple}>Amazon Delivered</span>
                    </Text>
                    <Text fontWeight={450} mb={"10px"} fontSize={"15px"}>
                      Gift options not available.Gift options not available.
                      <span
                        className={`${styles.cartGreen} ${styles.cartUnderLine}`}
                      >
                        Learn more
                      </span>
                    </Text>
                    <Text display={"flex"} alignItems="center" gap={3}>
                      <Select
                        w={"110px"}
                        className={styles.cartSelect}
                        onChange={(e) => handlequantity(el.id, e.target.value)}
                      >
                        <option value={el.quantity}>Qty: {el.quantity}</option>
                        <option value={1}>Qty: 1</option>
                        <option value={2}>Qty: 2</option>
                        <option value={3}>Qty: 3</option>
                        <option value={4}>Qty: 4</option>
                        <option value={5}>Qty: 5</option>
                        <option value={6}>Qty: 6</option>
                        <option value={7}>Qty: 7</option>
                      </Select>
                      |
                      <Text
                        className={`${styles.cartGreen} ${styles.cartUnderLine}`}
                        onClick={() => handleDelete(el.id)}
                        fontSize={"14px"}
                      >
                        Delete
                      </Text>
                      |
                      <Text
                        className={`${styles.cartGreen} ${styles.cartUnderLine}`}
                        fontSize={"14px"}
                        onClick={() => handleLater(el.id, el)}
                      >
                        Save For Later
                      </Text>
                    </Text>
                  </GridItem>
                </Grid>
              );
            })}
        </GridItem>
        <GridItem>
          <Grid rowGap={6}>
            <GridItem
              position={"relative"}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              p={"20px 10px"}
            >
              <Text fontSize={"14px"} color="#007600">
                Part of your order qualifies for FREE Delivery. Select this
                option at checkout. Details
              </Text>
              <Checkbox
                colorScheme="green"
                defaultChecked
                mt={"5px"}
                marginRight={"5px"}
              ></Checkbox>
              <span>This order contains a gift</span>
              <br />
              <span className={styles.subtotal}>
                Subtotal ({cartData.length} items):{" "}
              </span>
              <span className={styles.priceCart}>{total}.00</span>
              <Link to={"/payment"}>
                <Button
                  w={"100%"}
                  bg="#FFCA28"
                  borderRadius={"15px"}
                  m={"20px 0px "}
                >
                  Proceed to Buy
                </Button>
              </Link>
              <Box border={"1px solid #ECEFF1"}>
                <Text
                  p={"10px 5px"}
                  position="relative"
                  cursor={"pointer"}
                  onClick={() => setblock(!block)}
                >
                  EMI Available
                  {block ? (
                    <ChevronDownIcon
                      fontSize={"30px"}
                      position="absolute"
                      right={"10px"}
                    />
                  ) : (
                    <ChevronUpIcon
                      fontSize={"30px"}
                      position="absolute"
                      right={"10px"}
                    />
                  )}
                </Text>
                <Text
                  display={block ? "block" : "none"}
                  fontSize="16px"
                  p={"10px 5px"}
                >
                  Your order qualifies for EMI with valid credit cards (not
                  available on purchase of Gold, Jewelry, Gift cards and Amazon
                  pay balance top up).{" "}
                  <span
                    className={`${styles.cartGreen} ${styles.cartUnderLine}`}
                  >
                    Learn more
                  </span>
                </Text>
              </Box>
            </GridItem>
            <GridItem
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              p={"10px 10px"}
            >
              <Text fontWeight={500}>
                Frequently bought together with Cracking the Coding Interview:
                189 Programming Question
              </Text>
              {data &&
                data.map((el) => {
                  return (
                    <Grid
                      gridTemplateColumns={"repeat(2,1fr)"}
                      p={"20px 5px"}
                      columnGap={3}
                    >
                      <GridItem>
                        <img
                          src={el.image}
                          width={"200px"}
                          height={"100px"}
                          key={el.id}
                        ></img>
                      </GridItem>
                      <GridItem>
                        <Text
                          fontWeight={500}
                          className={`${styles.cartGreen} ${styles.cartUnderLine}`}
                        >
                          {el.description}
                        </Text>
                        <Text color={"teal"}>
                          &#9733;&#9733;&#9733;&#9733;&#9734;
                        </Text>
                        <Text color={"gray.500"}>{el.brand}</Text>
                        <Text fontWeight={500}>₹{el.price}</Text>
                        <button
                          className={styles.cartbtn}
                          onClick={() => handleAdd(el)}
                        >
                          {/* <Toster /> */}
                        </button>
                      </GridItem>
                    </Grid>
                  );
                })}
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
      {/* <SaveLater /> */}
    </>
  );
};

export default Cart;
