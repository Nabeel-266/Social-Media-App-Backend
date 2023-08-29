import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./Routes/authRoutes.js";
import profileRoutes from "./Routes/profileRoutes.js";
import connectDb from "./Database/connectDb.js";

const app = express();
const PORT = process.env.PORT;
// const Port = 8000;

// For Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use((req, res, next) => {
  req.body.date = new Date();
  console.log(req.body);
  next();
});

// For Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/profile", profileRoutes);

// For Start Server
const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT number ${PORT}`);
    });

    await connectDb(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
  }
};
startServer();
