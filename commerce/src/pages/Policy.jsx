import React from "react";
import Layout from "./../components/Layout/Layout";
import PolicyImg from "../images/policyImg.jpg";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
        <img src={PolicyImg} alt="officers" className="contactImg" />
        </div>
        <div className="col-md-4">
          <h1 className="mb-3 mr-2 text-info">Our Policy</h1>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;