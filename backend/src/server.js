// 1. Import Dependencies
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// 2. Load environment variables
dotenv.config();

// 3.1 Import routes
const systemInfoRoutes = require("./routes/systemInfoRoutes");
const bankRoutes = require("./routes/bankRoutes");
const supplierRoutes = require("./routes/supplierRoutes");

// 3.2 Import routes middleware

// 4. Initialize the app
const app = express();

// 5. Set up middlewares
app.use(cors()); // To handle cross-origin requests
app.use(express.json()); // To parse JSON bodies

// 6. Routes (public)
app.use("/sysinfo", systemInfoRoutes);
app.use("/bank", bankRoutes);
app.use("/supplier", supplierRoutes);

// 8. Error handling middleware (must be at the end)
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(err.status || 500).json({
		message: err.message || "Internal Server Error",
	});
});

// 9. Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
