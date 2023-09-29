import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";

const CreateCategory = () => {
  return (
    <Layout title={"Categories"}>
      <div className="container m-3 p-3">
        <div className="row ">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">All Categories</div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
