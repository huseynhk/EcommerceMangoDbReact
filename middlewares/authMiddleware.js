import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignIn = async (req, res, next) => {

  try {
    const token = req.headers.authorization;
    const decode = JWT.verify(token, process.env.JWT_SECRET);

    await isAdmin(res, decode._id);

    next();
  } catch (error) {
    console.log(error);
  }
};

//admin acceess
export const isAdmin = async (res, id) => {
  try {
    const user = await userModel.findById({ _id: id });
    console.log(user);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      return res
        .status(200)
        .json({ status: true, message: "This user is admin." });
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
