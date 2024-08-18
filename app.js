import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connect from "./config/db.js";
import category from "./routes/category.js";
import subCategory from "./routes/subCategory.js";
import items from "./routes/items.js";
import errorHandler from "./middlewares/error.js";

const app = express();

dotenv.config({
    path: "config/.env"
})
connect();

const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParser());


app.use("/api/v1",category);
app.use("/api/v1",subCategory);
app.use("/api/v1",items);

app.use(errorHandler);
app.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT}`)
})