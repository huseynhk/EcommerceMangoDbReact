import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">Products List</h1>
          <div className="d-flex flex-wrap">
            {products?.map((product) => (
              <Link
                key={product._id}
                to={`/dashboard/admin/product/${product.slug}`}
                className="product-link "
              >
                <div className="card m-2 bg-info-subtle " style={{ width: "21rem"}}>
                  <img
                    src={`/api/v1/product/product-photo/${product._id}`}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body p-4">
                    <h5 className="card-title">Name: {product.name}</h5>
                    <h6 className="card-text">Desc: {product.description}</h6>
                    <h6 className="card-text">Price: {product.price}</h6>
                    <h6 className="card-text">Quantity: {product.quantity}</h6>


                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;