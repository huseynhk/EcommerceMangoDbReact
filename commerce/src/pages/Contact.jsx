import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import ContactImg from "../images/officers.jpg"

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src={ContactImg}
            alt="officers"
            className="contactImg"
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-primary p-2 text-white text-center rounded">CONTACT US</h1>
         
          <p className="mt-3">
            <BiMailSend /> : khuseyn693@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 055-350-92-92
          </p>
          <p className="mt-3">
            <BiSupport /> : 102
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;