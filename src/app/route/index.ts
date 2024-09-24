/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from "express";
import { userRoute } from "../user/user.routes";
import studentRoute from "../student/student.route";
import academicSemesterRoute from "../academicSemester/academicSemester.route";

const router = Router()

type TPath = {
    path: string,
    location: any
}[]

const routerPath: TPath = [
    {
        path: "/user",
        location: userRoute
    },
    {
        path: "/student",
        location: studentRoute
    },
    {
        path: "/academicsemester",
        location: academicSemesterRoute
    }
]

routerPath.forEach(i => router.use(i.path, i.location))



export default router