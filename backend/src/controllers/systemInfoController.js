const { getSystemDateTime } = require("../utils/systemTImeUtils");

const getSystemDateAndTime = async (req, res) => {
	const formattedDate = getSystemDateTime();
	res.status(200).json({ system_time: formattedDate });
};

module.exports = {
	getSystemDateAndTime,
};