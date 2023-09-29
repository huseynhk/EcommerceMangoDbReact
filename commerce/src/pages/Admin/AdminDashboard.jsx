import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import { AuhContext } from "../../context/authContext";
import AdminMenu from "../../components/Layout/AdminMenu";

const AdminDashboard = () => {
  const { auth } = useContext(AuhContext);
  return (
    <Layout title={'Dashboard'}>
      <div className="container-fluid m-3 p-3 dashboard ">
        <div className="row ">
          <div className="col-md-3">
            <AdminMenu/>
          </div>
          <div className="col-md-9 ">
            <div className="card w-75 p-5 bgMy ms-4">
              <h3> Admin Name : {auth?.user?.name}</h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Phone  : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
