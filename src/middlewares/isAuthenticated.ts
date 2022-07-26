import { NextFunction, request, Request, Response } from "express"
import {verify} from 'jsonwebtoken'

interface Payload{
    sub: string
}

export function isAuthenticated(
    req: Request, 
    res: Response, 
    next: NextFunction
){
    //Receiving JWT
    const authToken = req.headers.authorization

    if(!authToken){
        return res.status(401).end()
    }

    const [, token] = authToken.split(" ")

    try{
        //Validate JWT
        const {sub} = verify(
            token,
            process.env.JWT_SECRET
        ) as Payload
        
        //Recover the token ID and then inject in the request
        req.user_id = sub

        return next()
    }catch(err){
        return res.status(401).end()
    }

}