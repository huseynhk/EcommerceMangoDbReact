import  express  from "express";
import {registerController , loginController } from '../controllers/authController.js'
// import { requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router()


//Routing
//REGISTER || POST METHODU
router.post('/register' , registerController)

//LOGIN || POST METHODU
router.post('/login' , loginController)





export default router