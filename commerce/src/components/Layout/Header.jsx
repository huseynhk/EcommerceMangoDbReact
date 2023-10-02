import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { SlBasketLoaded } from "react-icons/sl";
import { AuhContext } from "../../context/authContext";
import { CartContext } from "../../context/cartContext";
import { toast } from "react-toastify";
import SearchInput from "../Form/SearchInput";
import { useCategory } from "../../hooks/useCategory";
import { Badge } from "antd";

const Header = () => {
  const { auth, setAuth } = useContext(AuhContext);
  const { cart, setCart } = useContext(CartContext);

  const categories = useCategory();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand logo">
            RG_Sale
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchInput />

              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item text-white">
                <NavLink
                  to="/signup"
                  className="nav-link text-white"
                  aria-current="page"
                  href="#"
                >
                  Signup
                </NavLink>
              </li>

              {!auth.user ? (
                <>
                  <li className="nav-item ">
                    <NavLink
                      to="/register"
                      className="nav-link text-white"
                      aria-current="page"
                      href="#"
                    >
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink
                      to="/login"
                      className="nav-link text-white"
                      aria-current="page"
                      href="#"
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle text-white"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item ">
                <NavLink to="/cart" className="nav-link text-white">
                  <Badge count={cart?.length} showZero offset={[5, 0]} >
                    <span className="fs-2 me-1 text-danger">
                      <SlBasketLoaded />
                    </span>
                  </Badge>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
