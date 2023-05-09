import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";
import { Link } from "react-router-dom";
import { Box, Image, Text, Spacer, HStack } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
export const Product = () => {
  const [medi, setMedi] = useState([]);

  useEffect(() => {
    axios
      .get("https://onemg-w2kv.onrender.com/products")
      .then((res) => {
        console.log(res.data.products);
        setMedi(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://onemg-w2kv.onrender.com/products/delete/${id}`)
      .then((res) => {
        setMedi(medi.filter((e) => e._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main">
      {medi.length > 0 &&
        medi.map((items) => (
          <Box
            key={items._id}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
            bgColor={"white"}
          >
            <Box p="5">
              <Image
                p="10"
                src={items.image}
                alt={items.name}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                }}
                width={"100%"}
                height={["200px", "250px"]}
              />
              <Box height="10">
                <Text
                  width={"100%"}
                  height={"100%"}
                  pt="5"
                  fontSize={".85em"}
                  fontWeight={"500"}
                >
                  {items.name}
                </Text>
              </Box>
              <Box pt="10">
                <Text
                  width={"100%"}
                  height={"100%"}
                  fontSize={".6em"}
                  color={"gray"}
                  fontWeight={"500"}
                >
                  {items.brand}
                </Text>
              </Box>
              <Box style={{ display: "flex" }} pt="3" h={["80%", "100%"]}>
                <Box
                  style={{ display: "flex" }}
                  color={"white"}
                  bgColor={"#1aab2a"}
                  pl="2"
                  width={"50px"}
                >
                  <Text fontSize={".85em"}>
                    {"4." + (Math.floor(Math.random() * 5) + 1)}
                  </Text>
                  <AiFillStar
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "auto",
                    }}
                    textAlign="center"
                  />
                </Box>
                <Text pl="2" fontSize={".8em"} color={"gray"}>
                  {(Math.floor(Math.random() * 10) + 10) * items._id} ratings
                </Text>
              </Box>
              <Text mt="5" fontSize={".85em"} color={"gray"}>
                MRP{" "}
                <Text as={"span"} textDecoration={"line-through"}>
                  ₹ {items.mainprice}
                </Text>{" "}
                <Text color="green" as={"span"}>
                  {items.discount}
                </Text>
              </Text>
              <Box mt="2">
                <HStack>
                  <Text ml="100" fontWeight={"bold"}>
                    ₹{items.price}
                  </Text>
                  <Spacer />
                </HStack>
              </Box>

              <div className="div">
                <Link to={`/admin/product/editButton/${items._id}`}>
                  <button className="btn">Edit</button>
                </Link>

                <button className="btn" onClick={() => handleDelete(items._id)}>
                  Delete
                </button>
              </div>
            </Box>
          </Box>
        ))}
    </div>
  );
};
