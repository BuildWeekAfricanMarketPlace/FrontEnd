import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUserInfo } from "../actions";

const Profile = () => {
  const name = useSelector((state) => state.name);
  const username = useSelector((state) => state.username);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return (
    <div className="profile">
      <h2>Account Details</h2>
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <p>
        Password:
        <Link to="/change-password">
          <button>Change Password</button>
        </Link>
      </p>
      <h4>
        Delete Account:
        <button>Delete this Account</button>
      </h4>
    </div>
  );
};

export default Profile;
