import express from 'express'

import userController from './controllers/userController.js'

const router = express.Router()

router.get("/", (req, res) => res.send("root page"))

router.post("/getUser", userController.getUserAuthentication)
router.post("/createUser", userController.createNewUser)

export default router