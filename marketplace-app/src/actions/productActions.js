import axios from "axios";

export const FETCH_PRODUCT_START = "FETCH_PRODUCT_START";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAIL = "FETCH_PRODUCT_FAIL";

export const POST_PRODUCT_SUCCESS = "POST_PRODUCT_SUCCESS";
export const POST_PRODUCT_FAIL = "POST_PRODUCT_FAIL";

export const getProducts = () => (dispatch) => {
  dispatch({ type: FETCH_PRODUCT_START });
  axios
    .get("/api/products")
    .then((res) => {
      console.log("FROM THE API:", res.data);
      dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_PRODUCT_FAIL, payload: err.res });
    });
};

export const postProduct = (newProduct) => (dispatch) => {
  axios
    .post("/api/products", newProduct)
    .then((res) => {
      console.log("FOR THE POST:", res);
      dispatch({ type: POST_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_PRODUCT_FAIL, payload: err.response });
    });
};
