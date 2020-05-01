import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 1.7em;
  text-align: center;
  color: rgb(29, 155, 76);
`;
const Form = styled.form`
  text-align: center;
`;
const Text = styled.span`
  color: rgb(42, 42, 42);
  font-weight: bold;
`;
const Create = styled.button`
  text-align: center;
  border: 2px solid rgb(15, 15, 15);
  background-color: rgb(250, 179, 51);
  color: rgb(15, 15, 15);
  font-size: 1em;
  //   margin-left: 50px;
  font-weight: bold;
  &:hover {
    background-color: rgb(29, 155, 76);
    color: rgb(250, 179, 51);
    border-radius: 10px;
    transition: all ease-in-out 0.3s;
  }
`;
const Input = styled.input`
  text-align: center;
  margin: 0 0 20px 5px;
`;

const initialValue = {
  name: "",
  username: "",
  password: "",
};

const SignUp = () => {
  const [formValues, setFormValues] = useState(initialValue);
  const { push } = useHistory();
  const { register } = useForm();

  const onInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        "https://bw-african-marketplace-lucas.herokuapp.com/api/auth/register",
        formValues
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res.data.token));
        push("/");
      })
      .catch((err) => {
        console.log(
          err,
          "sorry, an error has occured while registering you in"
        );
      });
  };

  return (
    <Wrapper>
      <Title>Register your Account</Title>
      <Form className="signup" onSubmit={handleSubmit}>
        <Text>Name:</Text>
        <Input
          type="text"
          name="name"
          label="name"
          onChange={onInputChange}
          placeholder="Name *"
          id="name"
          ref={register({ required: true, min: 2, maxLength: 20 })}
        />
        <br />
        <Text>Username:</Text>
        <Input
          type="text"
          name="username"
          label="username"
          onChange={onInputChange}
          placeholder="Username *"
          id="username"
          ref={register({ required: true, min: 2, maxLength: 16 })}
        />
        <br />
        <Text>Password:</Text>
        <Input
          type="password"
          name="password"
          label="password"
          onChange={onInputChange}
          placeholder="Password *"
          id="password"
          ref={register({ required: true, min: 1, maxLength: 12 })}
        />
        <br />
        <Create>Create Account</Create>
      </Form>
    </Wrapper>
  );
};

export default SignUp;

// dave / bro
