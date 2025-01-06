const bankModels = require("../models/bankModels");
const { bank } = require("../models/prismaClient");

const getBankList = async (req, res) => {
	try {
		const bankList = await bankModels.getBank();
		const result = { list: bankList };
		res.status(200).json(result);
	} catch (error) {
		console.error("Error getting bank list:", error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const addBank = async (req, res) => {
	try {
		console.log(req.body);
		const { bank_name, hotline, website_link, branch_name } = req.body;
		const newBank = await bankModels.addBank(
			bank_name,
			hotline,
			website_link,
			branch_name // Updated field name
		);
		res.status(201).json({ message: "Bank Branch added!" });
	} catch (error) {
		console.error("Error adding bank branch:", error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const deleteBank = async (req, res) => {
	const { bankName, hotline, website } = req.body;
	try {
		const result = await bankModels.deleteBank(bankName, hotline, website);
		res.status(200).json({ message: "Bank deleted!" });
	} catch (error) {
		console.error("Error deleting bank:", error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const getBankAccountInfo = async (req, res) => {
	try {
		res.status(200).json(req.body);
	} catch (error) {
		console.error("Error getting bank account list:", error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const getBankAccountList = async (req, res) => {
	try {
        const { bank_name, hotline, website_link } = req.body;
		const bankAccountList = await bankModels.getBankAccountList(bank_name, hotline, website_link);
		res.status(200).json({ list: bankAccountList });
	} catch (error) {
		console.error("Error getting bank account list:", error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

module.exports = {
	getBankList,
	addBank,
	deleteBank,
	getBankAccountInfo,
	getBankAccountList,
};