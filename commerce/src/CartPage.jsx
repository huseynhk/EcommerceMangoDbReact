import React, { useContext } from "react";
import Layout from "./components/Layout/Layout";
import { CartContext } from "./context/cartContext";
import { AuhContext } from "./context/authContext";
import { useNavigate } from "react-router-dom";
import "./styles/CartStyles.css";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const { auth } = useContext(AuhContext);
  const navigate = useNavigate();

  const totalPrice = () => {
    try {
      const total = cart?.reduce(
        (accumulator, item) => accumulator + Number(item.price * item.count),
        0
      );

      if (total !== undefined) {
        return total.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
      } else {
        return "0.00";
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeCartItem = (pid) => {
    try {
      let myCart = cart.filter((item) => item._id !== pid);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  const handleIncreament = (id) => {
    const findProductById = cart.find((c) => c._id === id);

    if (findProductById) {
      setCart((prevState) =>
        prevState.map((c) => {
          if (c._id === findProductById._id) {
            c = {
              ...c,
              count: c.count + 1,
            };
          }
          return c;
        })
      );
    }
  };

  const handleDecrement = (id) => {
    const findProductById = cart.find((c) => c._id === id);
   
    if (findProductById) {
      setCart((prevState) =>
        prevState.map((c) => {
          if (c._id === findProductById._id && c.count > 1) {
            c = {
              ...c,
              count: c.count - 1,
            };
          }
          return c;
        })
      );
    }
  };

  return (
    <Layout>
      <div className=" cart-page">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {!auth?.user
                ? "Hello Guest"
                : `Hello  ${auth?.token && auth?.user?.name}`}
              <p className="text-center">
                {cart?.length
                  ? `You Have ${cart.length} items in your cart ${
                      auth?.token ? "" : "please login to checkout !"
                    }`
                  : " Your Cart Is Empty"}
              </p>
            </h1>
          </div>
        </div>
        <div className="container ">
          <div className="row ">
            <div className="col-md-7  p-0 m-0">
              {cart?.map((p) => (
                <div className="row card flex-row" key={p._id}>
                  <div className="col-md-4">
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                      width="100%"
                      height={"130px"}
                    />
                  </div>
                  <div className="col-md-4">
                    <p>{p.name}</p>
                    <p>{p.description.substring(0, 30)}</p>
                    <p>Price : {p.price}</p>
                  </div>
                  <div className="col-md-4 cart-remove-btn">
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => removeCartItem(p._id)}
                    >
                      Remove
                    </button>

                    <button
                      className="btn btn-success"
                      onClick={() => handleIncreament(p._id)}
                    >
                      +
                    </button>
                    <h3 className="mx-2 text-primary mt-3">{p.count}</h3>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDecrement(p._id)}
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-5 cart-summary ">
              <h2>Cart Summary</h2>
              <p>Total | Checkout | Payment</p>
              <hr />
              <h4>Total : {totalPrice()} </h4>
              {auth?.user?.address ? (
                <>
                  <div className="mb-3">
                    <h5>Current Address</h5>
                    <h5>{auth?.user?.address}</h5>
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button>
                  </div>
                </>
              ) : (
                <div className="mb-3">
                  {auth?.token ? (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() =>
                        navigate("/login", {
                          state: "/cart",
                        })
                      }
                    >
                      Plase Login to checkout
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
