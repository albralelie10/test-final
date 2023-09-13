import express from "express"
import {getAllUsers,addUser} from "./user.handler"
const routerUser=express.Router()


routerUser.route("/").get(getAllUsers).post(addUser)



export default routerUser;