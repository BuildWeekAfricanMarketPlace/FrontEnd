import {
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAIL,
  POST_PRODUCT_SUCCESS,
  POST_PRODUCT_FAIL,
} from "../actions";

const initialState = {
  product: [],
  fetchingProduct: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_START:
      return {};

    case FETCH_PRODUCT_SUCCESS:
      return {};

    case FETCH_PRODUCT_FAIL:
      return {};

    case POST_PRODUCT_SUCCESS:
      return {};

    case POST_PRODUCT_FAIL:
      return {};

    default:
      return state;
  }
};

export default reducer;
