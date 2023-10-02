import React, { useContext } from "react";
import Layout from "./../components/Layout/Layout";
import { SearchContext } from "../context/searchContext";

const Search = () => {
  const { values } = useContext(SearchContext);
  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Resuts</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div
                className="card m-2 bg-info-subtle"
                style={{ width: "18rem" }}
              >
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body py-4">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text"> $ {p.price}</p>
                  <div className="d-flex justify-content-center align-items-center w-100">
                    <button class="btn btn-warning me-1">More </button>
                    <button class="btn btn-info px-3">Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
