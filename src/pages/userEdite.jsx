import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, editUser, createUser } from "../actions/userAction";

function UserEdite() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchUser(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (currentUser) {
      setUserData(currentUser);
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (id) {
      const response = await dispatch(editUser(userData));
      if (response.success) {
        alert("User updated successfully");
      } else {
        alert("Failed to update user");
      }
    }else{
      if(!id){
        const response = await dispatch(createUser(userData));
        if (response.success) {
          alert("User created successfully");
        }
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
        placeholder="Name"
        className="mb-2 w-full rounded border p-2"
      />
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        placeholder="Email"
        className="mb-2 w-full rounded border p-2"
      />
      <input
        type="text"
        name="phoneNumber"
        value={userData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
        className="mb-4 w-full rounded border p-2"
      />

      <button
        onClick={handleSave}
        className="rounded bg-green-500 px-4 py-2 text-white"
      >
        Save
      </button>
    </div>
  );
}

export default UserEdite;
