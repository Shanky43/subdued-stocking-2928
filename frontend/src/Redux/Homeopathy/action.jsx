import axios from "axios";
import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionType";

import {
  POST_PRODUCT_FAILURE,
  POST_PRODUCT_REQUEST,
  POST_PRODUCT_SUCCESS,
} from "./actionType";
// import queryString from 'query-string';

export const homeopathyProducts = (params) => (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });

  console.log("API Params:", params);

  axios
    .get(`http://localhost:8080`, params)
    .then((res) => {
      let filteredData = res.data;
      console.log(res.data.products);
      // Apply filters
      if (params.has("brand")) {
        filteredData = filteredData.filter((product) =>
          params.getAll("brand").includes(product.brand)
        );
      }
      if (params.has("category")) {
        filteredData = filteredData.filter(
          (product) => product.category === params.get("category")
        );
      }
      const sortOrder = params.get("order");
      if (sortOrder === "hightolow") {
        filteredData = filteredData.sort((a, b) => b.price - a.price);
      } else if (sortOrder === "lowtohigh") {
        filteredData = filteredData.sort((a, b) => a.price - b.price);
      }
      // let filteredData = res.data;

      // // Apply filters
      // if (params.has("brand")) {
      //   filteredData = filteredData.filter((product) =>
      //     params.getAll("brand").includes(product.brand)
      //   );
      // }
      // if (params.has("category")) {
      //   filteredData = filteredData.filter(
      //     (product) => product.category === params.get("category")
      //   );
      // }
      // const sortOrder = params.get("order");
      // if (sortOrder === "hightolow") {
      //   filteredData = filteredData.sort((a, b) => b.price - a.price);
      // } else if (sortOrder === "lowtohigh") {
      //   filteredData = filteredData.sort((a, b) => a.price - b.price);
      // }

      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_PRODUCT_FAILURE });
    });
};

// import queryString from 'query-string';

export const CartProducts = () => (dispatch) => {
  dispatch({ type: POST_PRODUCT_REQUEST });

  console.log("API Params:");

  axios
    .get(`http://localhost:8080`)
    .then((res) => {
      dispatch({ type: POST_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_PRODUCT_FAILURE });
    });
};
