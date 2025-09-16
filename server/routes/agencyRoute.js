import express from "express"
// import { agencyReg } from "../controllers/agencyCotroller.js"
import { authUser } from "../middleware/authMiddleware.js"
import { agencyReg } from "../controller/agencyController.js"


const agencyRouter = express.Router()

agencyRouter.post('/', authUser, agencyReg)

export default agencyRouter