import express from "express"
// import { bookingCreate, checkBookingAvailability, getAgencyBookings, getUserBookings } from "../controllers/bookingController.js"
import { authUser } from "../middleware/authMiddleware.js"
import { bookingCreate, bookingsStripePayment, checkBookingAvailabilty, getAgencyBookings, getUserBookings } from "../controller/bookingController.js"

const bookingRouter = express.Router()

bookingRouter.post("/check-availability", checkBookingAvailabilty)
bookingRouter.post("/book", authUser, bookingCreate)
bookingRouter.get("/user", authUser, getUserBookings)
bookingRouter.get("/agency", authUser, getAgencyBookings)
bookingRouter.get("/stripe", authUser, bookingsStripePayment)

export default bookingRouter