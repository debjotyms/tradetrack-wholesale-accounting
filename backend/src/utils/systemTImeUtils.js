const moment = require('moment-timezone');
const dotenv = require('dotenv');

dotenv.config();

const getSystemDateTime = () => {
    const timezone = process.env.TIMEZONE || 'UTC';
    const currentDate = moment().tz(timezone);
    return currentDate.format('YYYY-MM-DD HH:mm:ss');
};

module.exports = {
    getSystemDateTime,
};