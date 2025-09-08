import express from "express"
import cors from "cors"
import connectDB from "./config/mongodb.js"
import { clerkMiddleware } from '@clerk/express'
import "dotenv/config"
import clerkWebhooks from "./controller/clerkWebhooks.js"

const app = express()

connectDB()
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())
const port = process.env.PORT || 4000

app.use("/api/clerk", clerkWebhooks)

app.get("/", (req, res) => {
    res.send("my name is parry is here.");

})

app.listen(port, () => {
    console.log("Server is running on port 4000");

})