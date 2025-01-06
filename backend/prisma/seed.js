const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
require("dotenv").config();

//data insert
async function main() {
    const userInfoCount = await prisma.userInfo.count();
    if (userInfoCount === 0) {
        await prisma.userInfo.createMany({
            data: [
                {
                    name: "Fahim Ahmed",
                    email: "fahim.ahmed@gmail.com",
                    password: "ftgtg123456",
                    phoneNumber: "01712345678",
                    role: "ADMIN",
                    district: "Dhaka",
                    subDistrict: "Gulshan",
                    address: "House 1, Road 1, Block A, Gulshan",
                    photoURL: "https://www.google.com",
                },
                {
                    name: "Nahid Hasan",
                    email: "nahid.hasan@gmail.com",
                    password: "ftgtg123456",
                    phoneNumber: "01712345679",
                    role: "EMPLOYEE",
                    district: "Dhaka",
                    subDistrict: "Gulistan",
                    address: "House 2, Road 2, Block B, Gulistan",
                    photoURL: "https://www.google.com",
                },
                {
                    name: "Rahim Ahmed",
                    email: "rahim.ahmed@gmail.com",
                    password: "rahim123456",
                    phoneNumber: "01712345670",
                    role: "EMPLOYEE",
                    district: "Dhaka",
                    subDistrict: "Mirpur",
                    address: "House 3, Road 3, Block C, Mirpur",
                    photoURL: "https://www.google.com",
                },
            ],
        });
        console.log("User info created");
    } else {
        console.log("User info already exists");
    }

    const adminInfoCount = await prisma.adminInfo.count();
    if (adminInfoCount === 0) {
        await prisma.adminInfo.createMany({
            data: [
                {
                    userinfoid: 1,
                    clientaccess: true,
                    stockaccess: true,
                },
            ],
        });
        console.log("Admin info created");
    } else {
        console.log("Admin info already exists");
    }

    const employeeInfoCount = await prisma.employeeInfo.count();
    if (employeeInfoCount === 0) {
        await prisma.employeeInfo.createMany({
            data: [
                {
                    userinfoid: 2,
                    clientaccess: true,
                    stockaccess: true,
                },
                {
                    userinfoid: 3,
                    clientaccess: false,
                    stockaccess: false,
                },
            ],
        });
        console.log("Employee info created");
    } else {
        console.log("Employee info already exists");
    }

    const clientInfoCount = await prisma.clientInfo.count();
    if (clientInfoCount === 0) {
        await prisma.clientInfo.createMany({
            data: [
                {
                    name: "Client 1",
                    phoneNumber: "0171234567",
                    district: "Dhaka",
                    subDistrict: "Banani",
                    address: "House 1, Road 1, Block A, Banani",
                },
                {
                    name: "Client 2",
                    phoneNumber: "017123456",
                    district: "Dhaka",
                    subDistrict: "Gulshan",
                    address: "House 2, Road 2, Block B, Gulshan",
                },
                {
                    name: "Client 3",
                    phoneNumber: "017124568",
                    district: "Dhaka",
                    subDistrict: "Mirpur",
                    address: "House 3, Road 3, Block C, Mirpur",
                },
            ],
        });
        console.log("Client info created");
    } else {
        console.log("Client info already exists");
    }

    const newInvoiceCount = await prisma.newInvoice.count();
    if (newInvoiceCount === 0) {
        await prisma.newInvoice.createMany({
            data: [
                {
                    discount: 10,
                    vat: 5,
                    previousDue: 0,
                    paidAmount: 700,
                    productID: 1,
                    companyName: "Company 1",
                    modelNo: "Model AKG",
                    category: "A",
                    quantity: 10,
                    unitPrice: 100,
                    clientid: 1,
                    admin_id: 1,
                },
                {
                    discount: 15,
                    vat: 5,
                    previousDue: 10000,
                    paidAmount: 8000,
                    productID: 2,
                    companyName: "Company 2",
                    modelNo: "Model FNJ",
                    category: "B",
                    quantity: 20,
                    unitPrice: 200,
                    clientid: 2,
                    admin_id: 1,
                },
                {
                    discount: 15,
                    vat: 5,
                    previousDue: 10000,
                    paidAmount: 5000,
                    productID: 3,
                    companyName: "Company 3",
                    modelNo: "Model JKL",
                    category: "B",
                    quantity: 30,
                    unitPrice: 300,
                    clientid: 3,
                    employee_id: 2,
                },
                {
                    discount: 15,
                    vat: 5,
                    previousDue: 10000,
                    paidAmount: 5000,
                    productID: 3,
                    companyName: "Company 3",
                    modelNo: "Model JKL",
                    category: "B",
                    quantity: 30,
                    unitPrice: 300,
                    clientid: 3,
                    employee_id: 2,
                },
                {
                    discount: 15,
                    vat: 5,
                    previousDue: 10000,
                    paidAmount: 5000,
                    productID: 3,
                    companyName: "Company 3",
                    modelNo: "Model JKL",
                    category: "B",
                    quantity: 30,
                    unitPrice: 300,
                    clientid: 1,
                    admin_id: 1,
                }
            ],
        });
        console.log("New invoice created");
    } else {
        console.log("New invoice already exists");
    }

    const productCategoryCount = await prisma.productCategory.count();
    if (productCategoryCount === 0) {
        await prisma.productCategory.createMany({
            data: [
                {
                    productCategory: "Cement",
                    photoURL: "https://www.google.com",
                },
                {
                    productCategory: "Rice",
                    photoURL: "https://www.google.com",
                },
            ],
        });
        console.log("Product category created");
    } else {
        console.log("Product category already exists");
    }

    const productInfoCount = await prisma.productInfo.count();
    if (productInfoCount === 0) {
        await prisma.productInfo.createMany({
            data: [
                {
                    company: "Shah Cement",
                    productID: 1,
                    modelNo: "Model AKG",
                    category: "A",
                    stockAvailable: 100,
                    photoURL: "https://www.google.com",
                    productcategoryid: 1,
                },
                {
                    company: "Aman Cement",
                    productID: 2,
                    modelNo: "Model FNJ",
                    category: "B",
                    stockAvailable: 200,
                    photoURL: "https://www.google.com",
                    productcategoryid: 1,
                },
                {
                    company: "Rashid Rice",
                    productID: 3,
                    modelNo: "Model JKL",
                    category: "B",
                    stockAvailable: 300,
                    photoURL: "https://www.google.com",
                    productcategoryid: 2,
                },
            ],
        });
        console.log("Product info created");
    } else {
        console.log("Product info already exists");
    }

    const backupMethodCount = await prisma.backupMethod.count();
    if (backupMethodCount === 0) {
        await prisma.backupMethod.createMany({
            data: [
                {
                    dailyBackups: 30,
                    monthlyBackups: 4,
                    yearlyBackups: 3,
                    backupTime: 1,
                    backupEmail: "fatin@gmail.com"
                },
            ],
        });
        console.log("Backup method created");
    } else {
        console.log("Backup method already exists");
    }

    const backupFileCount = await prisma.backupFile.count();
    if (backupFileCount === 0) {
        await prisma.backupFile.createMany({
            data: [
                {
                    backupCategory: "Daily",
                    fileURL: "https://www.google.com",
                    createBy: "SYSTEM",
                },
                {
                    backupCategory: "Monthly",
                    fileURL: "https://www.google.com",
                    createBy: "SYSTEM",
                },
                {
                    backupCategory: "Yearly",
                    fileURL: "https://www.google.com",
                    createBy: "Fahim Ahmed",
                },
            ],
        });
        console.log("Backup file created");
    } else {
        console.log("Backup file already exists");
    }

    const additionalNumberCount = await prisma.additionalNumber.count();
    if (additionalNumberCount === 0) {
        await prisma.additionalNumber.createMany({
            data: [
                {
                    phoneUser: "Brother",
                    phoneNumber: "0111234567",
                    userid: 1,
                    clientid: null,
                },
                {
                    phoneUser: "Father",
                    phoneNumber: "0111234568",
                    userid: 2,
                    clientid: null,
                },
                {
                    phoneUser: "Mother",
                    phoneNumber: "0111234569",
                    userid: null,
                    clientid: 1,
                },
                {
                    phoneUser: "Uncle",
                    phoneNumber: "0111234560",
                    userid: null,
                    clientid: 2,
                }
            ],
        });
        console.log("Additional number created");
    } else {
        console.log("Additional number already exists");
    }

    const fileCount = await prisma.file.count();
    if (fileCount === 0) {
        await prisma.file.createMany({
            data: [
                {
                    fileName: "File 1",
                    fileType: "PDF",
                    fileURL: "https://www.google.com",
                    userid: 1,
                    clientid: null,
                },
                {
                    fileName: "File 2",
                    fileType: "PDF",
                    fileURL: "https://www.google.com",
                    userid: null,
                    clientid: 1,
                },
                {
                    fileName: "File 3",
                    fileType: "PDF",
                    fileURL: "https://www.google.com",
                    userid: 2,
                    clientid: null,
                },
                {
                    fileName: "File 4",
                    fileType: "PDF",
                    fileURL: "https://www.google.com",
                    userid: null,
                    clientid: 2,
                }
            ],
        });
        console.log("File created");
    } else {
        console.log("File already exists");
    }

}


main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
