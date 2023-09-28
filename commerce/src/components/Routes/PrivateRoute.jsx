import React, { useContext, useEffect, useState } from "react";
import { AuhContext } from "../../context/authContext";
import { Outlet } from "react-router-dom";
import Spinner from "../Spinner";
import axios from "axios";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const { auth } = useContext(AuhContext);

  useEffect(() => {
    const authCheck = async () => {
      const response = await axios.get("/api/v1/auth/user-auth");

      if (response.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner/>;
}
