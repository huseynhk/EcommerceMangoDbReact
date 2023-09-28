import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import { AuhContext } from "../../context/authContext";

const Dashboard = () => {
  const { auth } = useContext(AuhContext);
  return (
    <Layout title="Dashboard">
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
