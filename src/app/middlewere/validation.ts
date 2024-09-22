/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";

const vallidate = (name: any) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        name.parse(req.body)
        next()
    })
}

export default vallidate