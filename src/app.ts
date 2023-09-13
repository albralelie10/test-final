import routerUser from "./api/user/user.router"
import express from "express"
import { Response,Request } from "express";
import * as middlewares from './middlewares';


const app=express()
app.use(express.json())
app.use("/users",routerUser);
app.use(middlewares.errorHandler)


app.get("/",(req:Request,res:Response)=>{
    return res.json({msg:"START HOME PAGE"})
})


export default app;
