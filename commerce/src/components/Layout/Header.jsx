import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { SlBasketLoaded } from "react-icons/sl";
import { AuhContext } from "../../context/authContext";
import { toast } from "react-toastify";

const Header = () => {
  const { auth, setAuth } = useContext(AuhContext);
 
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    })
    localStorage.removeItem("auth")
    toast.success("Logout Successfully");
  }


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
                  <li className="nav-item ">
                    <NavLink
                      to="/login"
                      onClick={handleLogout}
                      className="nav-link text-white"
                      aria-current="page"
                      href="#"
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              )}

              <li className="nav-item ">
                <NavLink
                  to="/category"
                  className="nav-link text-white"
                  aria-current="page"
                  href="#"
                >
                  Category
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to="/cart"
                  className="nav-link text-white"
                  aria-current="page"
                  href="#"
                >
                  <span className="fs-2 me-1 text-danger">
                    <SlBasketLoaded />
                  </span>
                  (0)
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
