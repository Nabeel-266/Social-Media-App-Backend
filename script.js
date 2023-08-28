import express from "express";
import authRoutes from "./Routes/auth_routes.js";
import profileRoutes from "./Routes/profile_routes.js";
import connectDb from "./Database/connectDb.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 8000;

// For Middlewares
app.use(express.json());

app.use((req, res, next) => {
  req.body.date = new Date();
  console.log(req.body);
  next();
});

// For Routes
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

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
