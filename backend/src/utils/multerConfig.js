const multer = require("multer");
const path = require("path");

// Multer storage configuration
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		const folder = file.mimetype.startsWith("image/")
			? "uploads/images"
			: "uploads/files";
		cb(null, path.join(__dirname, "../", folder));
	},
	filename: (req, file, cb) => {
		const uniqueName = `${Date.now()}-${file.originalname}`;
		cb(null, uniqueName);
	},
});

// File filter for validation
const fileFilter = (req, file, cb) => {
	const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
	if (!allowedTypes.includes(file.mimetype)) {
		return cb(new Error("Invalid file type"), false);
	}
	cb(null, true);
};

// Multer upload instance
const upload = multer({
	storage: storage,
	limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
	fileFilter: fileFilter,
});

module.exports = upload;
