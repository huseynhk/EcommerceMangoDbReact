import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
// import { Toaster } from "react-hot-toast";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "90vh" }}>    {children}</main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Ecommerce",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Huseyn Huseynzade",
};

export default Layout;
