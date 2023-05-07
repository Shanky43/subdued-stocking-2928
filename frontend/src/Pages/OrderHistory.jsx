import { Box, Heading, Text, GridItem, Grid } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const OrderHistory = () => {
  const [myOrder, setMyOrder] = React.useState([]);

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  React.useEffect(() => {
    axios
      .get("http://localhost:8080/order", config)
      .then((res) => setMyOrder(res.data));
  }, []);

  console.log(myOrder);

  return (
    <Box>
      <GridItem
        position="relative"
        p={"15px"}
        mb={"5px"}
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      >
        <Heading color={"teal.400"}>Order History</Heading>

        <hr />

        {myOrder &&
          myOrder.map((el, i) => {
            return (
              <Grid
                key={i}
                gridTemplateColumns={{ sm: "repeat(1,1fr)", md: "20% 1fr" }}
                pb={"30px"}
                mb={"30px"}
                gap={10}
                borderBottom="1px solid #CFD8DC"
              >
                <GridItem
                  p={10}
                  boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
                  xShadow="md"
                  position="relative"
                  mb={"30px"}
                  key={el.id}
                >
                  <Text display={"flex"}>
                    <Text position={"relative"}>
                      <img
                        src={el.image}
                        width={"300px"}
                        height={"300px"}
                        alt="name"
                      ></img>
                    </Text>
                  </Text>
                </GridItem>

                <GridItem position="relative">
                  <Text as="b" fontSize="xl" display="inline">
                    {el.name}
                  </Text>
                  <br />

                  <Text as={"b"} color={"teal"} fontSize="md" display="inline">
                    {el.category}
                  </Text>
                  <Box>
                    <Text fontSize="30px" as="b" color={"orange.400"}>
                      ₹{el.price}
                    </Text>
                  </Box>

                  <Text>
                    Usually dispatched in {Math.floor(Math.random() * 10) || 2}
                    Days.
                  </Text>
                  <Text as="b">by {el.brand}</Text>
                  <Text
                    m={"5px 0px"}
                    display={i % 2 !== 0 ? "none " : "inline"}
                  >
                    #1 Best Seller
                  </Text>
                  <Text display={i % 2 === 0 ? "none " : "block"} m={"5px 0px"}>
                    <img
                      alt="myImg"
                      width={30}
                      src="https://assets-global.website-files.com/59ee0c0f13651700017e6ed2/5d7e518fc5774119be64fbca_hc.jpeg"
                    />
                  </Text>
                  <Text fontSize={"14px"}>In Stock</Text>
                  <Text as="b" m={"2px 0px"}>
                    Eligible for FREE Shipping
                  </Text>
                  <span style={{ paddingRight: "10px" }}>
                    {`    Sold by :   `}
                    <Text as={"b"} fontSize="20px" color="tomato">
                      HealthCube
                    </Text>
                  </span>
                  <span style={{ fontSize: "15px" }}>{el.brand}</span>
                </GridItem>
              </Grid>
            );
          })}
      </GridItem>
    </Box>
  );
};

export default OrderHistory;
