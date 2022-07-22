import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController{
    async handle(req: Request, res: Response){
        const {name, price, description, banner, category_id} = req.body

        const createProductService = new CreateProductService()

        const product = await createProductService.execute({
            name: name,
            price: price,
            description: description,
            banner: banner,
            category_id: category_id
        })

        return res.json(product)
    }
}

export {CreateProductController}