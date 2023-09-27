import React from "react";
import Layout from "./../components/Layout/Layout";
import AboutImg from "../images/aboutImg.jpg";

const About = () => {
  return (
    <Layout title={"About Us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src={AboutImg} alt="officers" className="contactImg" />
        </div>
        <div className="col-md-4">
          <h1 className="text-primary">About Us</h1>
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            aspernatur veritatis quisquam facere repudiandae itaque iure?
            Tempore omnis a delectus laudantium magni. Reprehenderit aliquam
            qui, sit debitis harum consequuntur in doloremque est?
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
