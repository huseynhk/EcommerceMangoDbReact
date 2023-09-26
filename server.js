// const express = require('express')
import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoute.js"
import cors from "cors";

//env
dotenv.config()

//database
connectDB()

const app = express()

//middleWares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/auth", authRoutes);

app.get('/', (req , res) => {
    // res.send({
    //     messsage:"Welcome Guys"
    // })
    res.send(
       " <h1>Welcome Guyssss</h1>"
    )
})


//PORT
const PORT = process.env.PORT || 8080

app.listen(PORT , () => {
    console.log(`Server is running ${PORT} Mode is ${process.env.DEV_MODE}`)
})