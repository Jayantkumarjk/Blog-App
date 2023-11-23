const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
connectDB();

//router import
const userRoutes = require("./routes/userRouter");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

//middelwares
app.use(cors({ origin: "http://localhost:3000" }));
//app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
