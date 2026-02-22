require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const app = express();


app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);
app.use("/api/auth", authRoutes);

// Connect to MongoDB
connectDB();

//middleware
app.use(express.json());
//Routes
app.use("/api/auth", authRoutes);

//serve uploads folder 
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
//start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));