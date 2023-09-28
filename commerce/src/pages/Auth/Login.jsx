import React, { useState, useContext } from "react";
import { AuhContext } from "../../context/authContext";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });
  const { auth, setAuth } = useContext(AuhContext);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const apiUrl = "/api/v1/auth/login";
  console.log("API URL:", apiUrl);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = newUser;
    console.log(newUser);
    if (email.trim() === "" || password.trim() === "") {
      return toast.error("All fields are required");
    }

    try {
      const response = await axios.post(apiUrl, newUser);
      if (response && response.data.success) {
        toast.success("User Added Successfully");
        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.token
        })
        localStorage.setItem("auth", JSON.stringify(response.data))
        navigate("/");
      } else {
        console.error(response);
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <Layout title="Register">
        <div className="register">
          <h1 className="mb-4 ">Login</h1>
          <form className="w-25" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={newUser.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={newUser.password}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Login;
