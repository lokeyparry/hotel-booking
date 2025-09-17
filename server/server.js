import express from "express"
import cors from "cors"
import connectDB from "./config/mongodb.js"
import { clerkMiddleware } from '@clerk/express'
import "dotenv/config"
import clerkWebhooks from "./controller/clerkWebhooks.js"
import userRouter from "./routes/userRoute.js"
import agencyRouter from "./routes/agencyRoute.js"
import propertyRouter from "./routes/propertyRoute.js"
import bookingRouter from "./routes/bookingRoute.js"
import connectCloudinary from "./config/cloudinary.js"
import { stripeWebhooks } from "./controller/stripeWebhooks.js"

const app = express()

connectDB()
connectCloudinary()
app.use(cors())
app.use(express.json())
app.post('/api/stripe', express.raw({ type: "application/json" }), stripeWebhooks)

const port = process.env.PORT || 4000

app.use(clerkMiddleware())
app.use("/api/clerk", clerkWebhooks)
app.use("/api/user", userRouter)
app.use("/api/agencies", agencyRouter)
app.use('/api/properties', propertyRouter)
app.use('/api/bookings', bookingRouter)

app.get("/", (req, res) => {
    res.send("my name is parry is here.");

})

app.listen(port, () => {
    console.log("Server is running on port 4000");

})