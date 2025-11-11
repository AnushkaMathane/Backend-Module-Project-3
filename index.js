const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");
const { errorHandler } = require("./middleware/errorHandler");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);

// Health check route
app.get("/", (req, res) => {
  res.send("📚 Backend Module Project API is running successfully!");
});

// Error handling middleware (must come after routes)
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
