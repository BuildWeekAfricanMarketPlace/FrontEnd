import axios from "axios";

export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS";
export const POST_LOGIN_FAIL = "POST_LOGIN_FAIL";

export const postLogin = (newLogin) => (dispatch) => {
  axios
    .post(
      "https://bw-african-marketplace-lucas.herokuapp.com/api/auth/login",
      newLogin
    )
    .then((res) => {
      console.log("FOR THE LOGIN", res);
      dispatch({ type: POST_LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_LOGIN_FAIL, payload: err.response });
    });
};
