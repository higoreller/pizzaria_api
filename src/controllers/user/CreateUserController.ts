import { Request, response, Response } from "express";

class CreateUserController {
    async handle(req: Request, res: Response){
        return response.json({ok: true})
    }
}

export {CreateUserController}