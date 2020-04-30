import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getUserInfo, deleteUser } from "../actions";

const Profile = () => {
  const id = localStorage.getItem("userId");
  const { push } = useHistory();
  const user = useSelector((state) => state.userReducer.singleUser);
  const dispatch = useDispatch();
  console.log("this is useselector", user);

  useEffect(() => {
    dispatch(getUserInfo(id));
  }, []);

  return (
    <div className="profile">
      <h2>Account Details</h2>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>
        Password:
        <Link to="/change-password">
          <button>Change Password</button>
        </Link>
      </p>
      <h4>
        Delete Account:
        <button
          className="delete"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(deleteUser(user));
            localStorage.clear();
            push("/");
          }}
        >
          Delete this Account
        </button>
      </h4>
    </div>
  );
};

export default Profile;
