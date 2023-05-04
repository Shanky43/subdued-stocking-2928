import axios from "axios";
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionType";



export const homeopathyProducts = () => (dispatch) => {
    dispatch({ type: GET_PRODUCT_REQUEST })
    axios.get(`http://localhost:8080/products?category=Homeopathy`)
        .then((res) => {
            console.log(res.data)
            dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            dispatch({ type: GET_PRODUCT_FAILURE })
        })

}