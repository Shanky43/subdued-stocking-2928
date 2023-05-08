import axios from "axios";
import { POST_PRODUCT_FAILURE, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS } from "./actionType";
// import queryString from 'query-string';

export const CartProducts = () => (dispatch) => {
  dispatch({ type: POST_PRODUCT_REQUEST });

  console.log('API Params:', );
 
  axios.get(`http://localhost:8080`,   )
    .then((res) => {

      dispatch({ type: POST_PRODUCT_SUCCESS,payload:res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_PRODUCT_FAILURE });
    });

}


