import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";

const CreateProduct = () => {
  return (
    <Layout title={"Products"}>
      <div className="container m-3 p-3">
        <div className="row ">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">All Products</div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
