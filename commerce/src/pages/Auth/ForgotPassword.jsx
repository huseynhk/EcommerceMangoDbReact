import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    answer: "",
    newPassword: "",
  });

  const navigate = useNavigate();


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const apiUrl = "/api/v1/auth/forgot-password";
  console.log("API URL:", apiUrl);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, answer, newPassword } = newUser;
    if (
      email.trim() === "" ||
      answer.trim() === "" ||
      newPassword.trim() === ""
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
      <Layout title="ResetPassword">
        <div className="register">
          <h1 className="mb-4 ">RESET PASSWORD</h1>
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
                type="text"
                name="answer"
                className="form-control"
                placeholder="Answer"
                value={newUser.answer}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="newPassword"
                className="form-control"
                placeholder="New Password"
                value={newUser.newPassword}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              RESET
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default ForgotPassword;
