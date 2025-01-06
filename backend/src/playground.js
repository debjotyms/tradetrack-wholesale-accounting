const dotenv = require("dotenv");
dotenv.config();
const testModels = require("./models/bankModels");
// const prisma = require("./prismaClient");

async function testModel() {
    const result = await testModels.addBank("Pubali Bank", "72515855", "www.pubali.com", "Banani", "file2.jpg");
    console.log(result);
}

testModel();
