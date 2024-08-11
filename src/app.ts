import express, { Request, Response } from 'express';
import cors from "cors"
import { userRoute } from './app/user/user.routes';
const app = express();

app.use(cors())
app.use(express.json())

// ======= Api end point============
app.use("/api/user", userRoute)

app.get("/", (req: Request, res: Response) => {
    res.send("server is running")
})
export default app;