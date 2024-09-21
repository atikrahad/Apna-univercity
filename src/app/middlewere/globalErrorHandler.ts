/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";

const globalErrorHandle = (err: any, req: Request, res: Response, next: NextFunction) => {
    const stutasCode = 500;
    const message = err.message || "Somthing went wrong";

    return res.status(stutasCode).json({
        success: false,
        message,
        error: err
    });

}

export default globalErrorHandle