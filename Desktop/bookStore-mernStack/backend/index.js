import express from "express";
import cors from "cors";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:3000", // Typically your front-end port
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Welcome to the MERN stack project");
});

// Use books routes
app.use("/books", booksRoute);

// Connect to MongoDB
mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Something broke!", error: err.message });
});
