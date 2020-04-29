import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useParams } from "react-router-dom";

export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAIL = "FETCH_USER_FAIL";

export const getUserInfo = () => (dispatch) => {
  const { id } = useParams();
  dispatch({ type: FETCH_USER_START });
  axiosWithAuth()
    .get(`/api/market/users/${id}`)
    .then((res) => {
      console.log("USER API", res.data);
      dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_USER_FAIL, payload: err.res });
    });
};
