const {get} = require("../routes/supplierRoutes");
const prisma = require("./prismaClient");

// schema model of bank and bankClient
// model bank {
// 	id       Int    @id @default(autoincrement())
// 	bankName String @map("bank_name") @db.VarChar(50)
// 	hotline  String @db.VarChar(15)
// 	website  String @db.VarChar(100)
// 	photoURL String @map("photo_url") @db.VarChar(300)
//   }

//   model bankClient {
// 	id          Int      @id @default(autoincrement())
// 	name        String   @db.VarChar(100)
// 	accountNo   String   @unique @map("account_no") @db.VarChar(20)
// 	accountType String   @default("Savings") @map("account_type") @db.VarChar(20)
// 	district    String   @db.VarChar(30)
// 	subDistrict String?  @map("subdistrict") @db.VarChar(30)
// 	dateadded   DateTime @default(now()) @map("date_added")
// 	owner     owner    @relation(fields: [addedby], references: [id])
// 	addedby     Int
// 	additionalnumber additionalNumber[]
// 	statement  statement[]
// 	transaction transaction[]

// 	@@map("bank_client")
//   }

// Done
// async function addBank(bankName, hotline, website) {
// 	try {
// 		const photoURL = "https://via.placeholder.com/150";
// 		const newBank = await prisma.bank.create({
// 			data: {
// 				bankName: bankName,
// 				hotline: hotline,
// 				website: website,
// 				photoURL: photoURL,
// 			},
// 		});
// 		return newBank;
// 	} catch (error) {
// 		console.error("Error adding bank:", error);
// 		throw error;
// 	}
// }

async function addBank(bankName, hotline, website, branchName) {
  try {
    const photoURL = "https://via.placeholder.com/150";
    const newBank = await prisma.bank.create({
      data: {
        bankName: bankName,
        hotline: hotline,
        website: website,
        branchName: branchName,
        photoURL: photoURL,
      },
    });
    return newBank;
  } catch (error) {
    console.error("Error adding bank:", error);
    throw error;
  }
}

async function addBankAccount(name, accountNo, accountType, district, subDistrict, addedby, bankid) {
  try {
    const newBankAccount = await prisma.bankClient.create({
      data: {
        name: name,
        accountNo: accountNo,
        accountType: accountType,
        district: district,
        subDistrict: subDistrict,
        addedby: addedby,
        bankid: bankid,
      },
    });
    return newBankAccount;
  } catch (error) {
    console.error("Error adding bank account:", error);
    throw error;
  }
}

// Done
async function getBank() {
  try {
    const bank = await prisma.bank.findMany();
    return bank;
  } catch (error) {
    console.error("Error getting bank:", error);
    throw error;
  }
}

async function getBankAccount() {
  try {
    const bankAccount = await prisma.bankAccount.findMany();
    return bankAccount;
  } catch (error) {
    console.error("Error getting bank account:", error);
    throw error;
  }
}
// Done
async function deleteBank(bankName, hotline, website) {
  try {
    const result = await prisma.bank.deleteMany({
      where: {
        bankName: bankName,
        hotline: hotline,
        website: website,
      },
    });
    return result;
  } catch (error) {
    console.error("Error deleting bank:", error);
    throw error;
  }
}

async function getBankAccountList(bank_name, hotline, website_link) {
  try {
    const bank = await prisma.bank.findFirst({
      where: {
        bankName: bank_name,
        hotline: hotline,
        website: website_link,
      },
    });

    console.log(bank);

    if (!bank) {
      throw new Error("Bank not found");
    }

    const bankAccounts = await prisma.bankClient.findMany({
      where: {
        bankid: bank.bankid,
      },
      select: {
        name: true,
        accountNo: true,
        accountType: true,
        district: true,
        subDistrict: true,
        dateadded: true,
      },
    });

    return bankAccounts.map((account) => ({
      name: account.name,
      account_num: account.accountNo,
      account_type: account.accountType,
      district: account.district,
      subdistrict: account.subDistrict,
      date_added: account.dateadded.toISOString().replace("T", " ").substring(0, 19),
    }));
  } catch (error) {
    console.error("Error getting bank account list:", error);
    throw error;
  }
}

// async function getStatementDesc() {
// 	try {
// 		const transactions = await prisma.transaction.findMany({
// 			orderBy: {
// 				dateadded: "desc",
// 			},
// 		});
// 		return transactions;
// 	} catch (error) {
// 		console.error("Error getting transactions:", error);
// 		throw error;
// 	}
// }

module.exports = {
  addBank,
  addBankAccount,
  getBank,
  getBankAccount,
  deleteBank,
  getBankAccountList,
};
