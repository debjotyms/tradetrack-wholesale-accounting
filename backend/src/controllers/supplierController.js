const supplierModels = require("../models/supplierModels");
const { get } = require("../routes/supplierRoutes");

const getProductCategory = async (req, res) => {
	try {
		const category = await supplierModels.getProductCategory();
		res.status(200).json({ list: category });
	} catch (error) {
		console.error("Error getting product category:", error);
		res.status(500).json({
			message: "Internal Server Error",
		});
	}
};

const addProductCategory = async (req, res) => {
	const { productCategory } = req.body;
	try {
		const newCategory = await supplierModels.addProductCategory(
			productCategory
		);
		res.status(201).json({ message: "Product category added!" });
	} catch (error) {
		console.error("Error adding product category:", error);
		res.status(500).json({
			message: "Internal Server Error",
		});
	}
};

const deleteProductCategory = async (req, res) => {
	const { categoryId } = req.body;
	try {
		const deletedCategory = await supplierModels.deleteProductCategory(
			categoryId
		);
		res.status(200).json({ message: "Product category deleted!" });
	} catch (error) {
		console.error("Error deleting product category:", error);
		res.status(500).json({
			message: "Internal Server Error",
		});
	}
};

// async function getStatementDesc(req, res) {
// 	try {
// 		const transactions = await getStatementDesc();
// 		res.status(200).json({ list: transactions });
// 	} catch (error) {
// 		console.error("Error fetching transactions:", error);
// 		res.status(500).json({ error: "Internal Server Error" });
// 	}
// }

module.exports = {
	getProductCategory,
	addProductCategory,
	deleteProductCategory,
};
