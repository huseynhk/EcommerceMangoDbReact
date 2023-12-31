import express from "express";
import {
  registerController,
  loginController,
  forgotPasswordController,
  updateProfileController,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

//Routing
//REGISTER || POST METHODU
router.post("/register", registerController);

//LOGIN || POST METHODU
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//protect User route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// protect Admin route
router.post("/admin-auth", requireSignIn);

//update profile
router.put("/profile", requireSignIn, updateProfileController);

export default router;
