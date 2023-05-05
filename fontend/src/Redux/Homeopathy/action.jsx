import axios from "axios";
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionType";
// import queryString from 'query-string';

export const homeopathyProducts = (params) => (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });

  console.log('API Params:', params);

  axios
    .get("http://localhost:8080/products", { params })
    .then((res) => {
      let filteredData = res.data;
      console.log(filteredData, "line14")
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

      dispatch({ type: GET_PRODUCT_SUCCESS, payload: filteredData });
    })
    .catch((err) => {
      dispatch({ type: GET_PRODUCT_FAILURE });
    });
};
