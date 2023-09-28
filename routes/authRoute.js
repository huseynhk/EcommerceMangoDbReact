import express from "express";
import {
  registerController,
  loginController,
} from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

//Routing
//REGISTER || POST METHODU
router.post("/register", registerController);

//LOGIN || POST METHODU
router.post("/login", loginController);

//protect User route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// protect Admin route
// router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
//   res.status(200).send({ ok: true });
// });

export default router;
