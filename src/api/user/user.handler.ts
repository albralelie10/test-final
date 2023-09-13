import { NextFunction, Request, Response } from "express"
import {UserWithId,Users, User, UserLocal} from "./user.model"
import { InsertOneResult } from "mongodb";
import { ZodError } from "zod";


export const getAllUsers = async (req: Request, res: Response<UserWithId[] >, next:NextFunction) => {
    try{
        const response =  Users.find();
        const users = await response.toArray();
        return res.json(users);
    }catch(err){
        return next(err)
    }
};


export const addUser = async (req: Request<{},UserWithId,User>, res: Response<UserWithId>, next:NextFunction) => {
    try{
        const validateResult=await UserLocal.parse(req.body)
        const insertResult= await Users.insertOne(validateResult)
        if(!insertResult.acknowledged)throw new Error("Error inserting User")
        const insertUser=await Users.findOne({_id:insertResult.insertedId}) as UserWithId
        return res.status(201).json(insertUser) 
    }catch(err){
        if(err instanceof ZodError ){
            res.status(422)
        }
        return next(err)
    }
};

