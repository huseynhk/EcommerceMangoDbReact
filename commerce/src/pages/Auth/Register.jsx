import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Register = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
    // setNewUser(prevState=> ({...prevState,[name]: value}))
  };

  const apiUrl = '/api/v1/auth/register';
  console.log("API URL:", apiUrl);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password, phone, address } = newUser;
    console.log(newUser)
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      phone.trim() === "" ||
      address.trim() === ""
    ) {
      return toast.error("All fields are required");
    }

    try {
      const response = await axios.post(apiUrl, newUser);
      if (response && response.data.success) {
        toast.success("User Added Successfully");
        navigate("/login");
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
          <h1 className="mb-4 ">Register</h1>
          <form className="w-25" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="name"
                name="name"
                className="form-control"
                placeholder="Name"
                value={newUser.name}
                onChange={handleInputChange}
              />
            </div>

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

            <div className="mb-3">
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Phone Number"
                value={newUser.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="address"
                className="form-control"
                placeholder="Address"
                value={newUser.address}
                onChange={handleInputChange}
              />
            </div>
            {/* <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="What is Your Favorite hobbie"
                required
              />
            </div> */}

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Register;
