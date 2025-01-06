const prisma = require("./prismaClient");

async function addProductCategory(productCategory) {
	try {
		const photoURL = "example.com";
		const newCategory = await prisma.productCategory.create({
			data: {
				productCategory,
				photoURL,
			},
		});
		return newCategory;
	} catch (error) {
		console.error("Error adding product category:", error);
		throw error;
	}
}

async function deleteProductCategory(categoryId) {
	try {
		const deletedCategory = await prisma.productCategory.delete({
			where: {
				id: categoryId,
			},
		});
		return deletedCategory;
	} catch (error) {
		console.error("Error deleting product category:", error);
		throw error;
	}
}

async function addProduct(
	company,
	productID,
	modelNo,
	category,
	stockAvailable,
	photoURL,
	productcategoryid
) {
	try {
		const newProduct = await prisma.supplierCompInfo.create({
			data: {
				company,
				productID,
				modelNo,
				category,
				stockAvailable,
				photoURL,
				productcategoryid,
			},
		});
		return newProduct;
	} catch (error) {
		console.error("Error adding product:", error);
		throw error;
	}
}

async function getProductCategory() {
	try {
		const category = await prisma.productCategory.findMany();
		return category;
	} catch (error) {
		console.error("Error getting product category:", error);
		throw error;
	}
}

module.exports = {
	addProductCategory,
	addProduct,
	getProductCategory,
	deleteProductCategory,
};
