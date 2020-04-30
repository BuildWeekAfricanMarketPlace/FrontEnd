import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: rgb(250, 179, 51);
`;
const Spam = styled.span`
  color: rgb(29, 155, 76);
`;

const initialState = {
  username: "",
  password: "",
  isFetching: false,
};

const Login = () => {
  const [login, setLogin] = useState(initialState);
  const [userId, setUserId] = useState();
  const { push } = useHistory();

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin({ ...login, isFetching: true });
    axiosWithAuth()
      .post("/api/auth/login", login)
      .then((res) => {
        console.log("You just logged in", res);
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("userId", JSON.stringify(res.data.id));
        setUserId(res.data.id);
        push("/user-profile", userId);
      })
      .catch((err) => {
        console.log(err, "sorry, an error has occured while logging you in");
      });
  };

  return (
    <>
      <Title>
        Welcome to African <Spam>Marketplace</Spam>
      </Title>
      <form onSubmit={handleSubmit}>
        Username:
        <input
          type="text"
          name="username"
          label="username"
          value={login.username}
          onChange={handleChange}
          placeholder="username"
        />
        <br />
        Password:
        <input
          type="password"
          name="password"
          label="password"
          value={login.password}
          onChange={handleChange}
          placeholder="password"
        />
        <br />
        <button>Log in</button>
        {login.isFetching && "Please wait...logging you in"}
      </form>
      <Link to="/signup">
        <button>If you haven't registered yet, sign up here.</button>
      </Link>
    </>
  );
};

export default Login;
