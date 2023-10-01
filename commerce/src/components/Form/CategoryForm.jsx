import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="d-flex justfy-content-center align-items-center mb-3 ">
        <div >
          <input
            type="text"
            className="form-control py-2 px-5"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success ms-3">
          Add Category
        </button>
        </div>
      </form>
    </>
  );
};

export default CategoryForm;