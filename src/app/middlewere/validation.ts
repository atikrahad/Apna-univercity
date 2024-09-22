import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import { AnyZodObject } from "zod";

const vallidate = (name: AnyZodObject) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        await name.parseAsync(req.body)
        next()
    })
}

export default vallidate