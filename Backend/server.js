const express = require("express");

const cors = require("cors");

const connectDB = require("./config/db");

const adminRoutes = require("./routes/adminRoutes");

const app = express();

require("dotenv").config();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/admin", adminRoutes);

app.use("/api/contact",require("./routes/contactRoutes"));

app.use("/api/news", require("./routes/newsRoutes"));

app.use("/api/gallery", require("./routes/galleryRoutes"));


app.listen(process.env.PORT, () => {
  console.log("Server Running on 5000");
});