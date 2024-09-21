import express, { Request, Response } from 'express';
import cors from "cors"
import globalErrorHandle from './app/middlewere/globalErrorHandler';
import notFound from './app/middlewere/notFound';
import router from './app/route';
const app = express();

app.use(cors())
app.use(express.json())

// ======= Api end point============
app.use("/api/v1", router)

app.get("/", (req: Request, res: Response) => {
    res.send("server is running")
})

app.use(notFound)

app.use(globalErrorHandle)
export default app;