const express = require("express");
const connectDB = require("./db");
const dotenv = require("dotenv");
const cors = require("cors");

const salesDataRoutes = require("./controller/additionalLists");

dotenv.config();

const app = express();
connectDB();

// Use cors middleware
app.use(cors());

app.use(express.json());

app.use("/api/sales", salesDataRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
