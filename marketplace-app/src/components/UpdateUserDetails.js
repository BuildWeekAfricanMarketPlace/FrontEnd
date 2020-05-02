import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { updateUser } from "../actions";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

const UpdateUserDetails = (props) => {
  const [editUser, setEditUser] = useState({
    name: "",
    username: "",
    password: "",
    // id: props.user.id,
  });
  const { register } = useForm();
  const { push } = useHistory();
  const dispatch = useDispatch();

  console.log("this is props", props.user);

  const handleChange = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(props.user.id, editUser));
    // push("/user-profile");
    // window.location.href = "/user-profile";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        Name:
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={editUser.name}
          ref={register({ required: true, min: 2, maxLength: 20 })}
        />
        <br />
        Username:
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
          value={editUser.username}
          ref={register({ required: true, min: 2, maxLength: 20 })}
        />
        <br />
        Password:
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={editUser.password}
          ref={register({ required: true, min: 2, maxLength: 20 })}
        />
        <button type="submit">Submit Changes</button>
      </form>
    </>
  );
};

export default UpdateUserDetails;
