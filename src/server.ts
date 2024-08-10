import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

const main = async () => {
    try {
        await mongoose.connect(config.database as string)
        app.listen(config.port, () => {
            console.log("The server is runnig with 5000")

        })
    } catch (err) {
        console.log(err)
    }
}

main()
