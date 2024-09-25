import { Response } from 'express';

type TResponce<T> = {
  stutasCode: number;
  seccess: boolean;
  message?: string;
  data: T;
};

const sendResponce = <T>(res: Response, data: TResponce<T>) => {
  res.status(data.stutasCode).json({
    success: data.seccess,
    message: data.message,
    data: data.data,
  });
};

export default sendResponce;
