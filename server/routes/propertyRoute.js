import express from "express"
// import { createNewProperty, getAllAvailableProperties, getOwnerProperties, togglePropertyAvailability } from "../controllers/propertyController.js"
import { upload } from "../middleware/multer.js"
import { authUser } from "../middleware/authMiddleware.js"
import { createNewProperty, getAllAvailableProperties, getOwnerProperties, togglePropertyAvailability } from "../controller/propertyController.js"

const propertyRouter = express.Router()

// propertyRouter.post('/create', upload.array("images", 4), authUser, createNewProperty)
propertyRouter.get('/', getAllAvailableProperties)
propertyRouter.get('/owner', getOwnerProperties)
propertyRouter.post('/toggle-availability', authUser, togglePropertyAvailability)


export default propertyRouter