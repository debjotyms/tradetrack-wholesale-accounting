-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'EMPLOYEE');

-- CreateEnum
CREATE TYPE "backupCategory" AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY', 'MANUAL');

-- CreateTable
CREATE TABLE "user_info" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(70) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "phone_num" VARCHAR(15) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'EMPLOYEE',
    "district" VARCHAR(30) NOT NULL,
    "subdistrict" VARCHAR(30),
    "address" VARCHAR(200) NOT NULL,
    "photo_url" VARCHAR(300) NOT NULL,

    CONSTRAINT "user_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin_info" (
    "id" SERIAL NOT NULL,
    "userinfoid" INTEGER NOT NULL,
    "clientaccess" BOOLEAN NOT NULL DEFAULT true,
    "stockaccess" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "admin_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_info" (
    "id" SERIAL NOT NULL,
    "userinfoid" INTEGER NOT NULL,
    "clientaccess" BOOLEAN NOT NULL DEFAULT false,
    "stockaccess" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "employee_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "additional_phone_nums" (
    "id" SERIAL NOT NULL,
    "phone_user" VARCHAR(50) NOT NULL,
    "phone_num" VARCHAR(15) NOT NULL,
    "userinfoid" INTEGER,
    "clientinfoid" INTEGER,

    CONSTRAINT "additional_phone_nums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "file" (
    "id" SERIAL NOT NULL,
    "file_name" VARCHAR(100) NOT NULL,
    "file_type" VARCHAR(100) NOT NULL,
    "file_url" VARCHAR(300) NOT NULL,
    "date_added" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userinfoid" INTEGER,
    "clientinfoid" INTEGER,

    CONSTRAINT "file_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client_info" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "phone_num" VARCHAR(15) NOT NULL,
    "district" VARCHAR(30) NOT NULL,
    "subdistrict" VARCHAR(30),
    "address" VARCHAR(200) NOT NULL,
    "date_added" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "admininfoid" INTEGER,
    "employeeinfoid" INTEGER,

    CONSTRAINT "client_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "new_invoice" (
    "invoiceID" SERIAL NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL,
    "vat" DOUBLE PRECISION NOT NULL,
    "previous_due" INTEGER NOT NULL DEFAULT 0,
    "paid_amount" INTEGER NOT NULL DEFAULT 0,
    "product_id" INTEGER NOT NULL,
    "company_name" VARCHAR(70) NOT NULL,
    "model_no" VARCHAR(40) NOT NULL,
    "category" VARCHAR(10) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unit_price" DOUBLE PRECISION NOT NULL,
    "clientinfoid" INTEGER NOT NULL,

    CONSTRAINT "new_invoice_pkey" PRIMARY KEY ("invoiceID")
);

-- CreateTable
CREATE TABLE "product_category" (
    "id" SERIAL NOT NULL,
    "product_category" VARCHAR(30) NOT NULL,
    "photo_url" VARCHAR(300) NOT NULL,

    CONSTRAINT "product_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_info" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "model_no" VARCHAR(40) NOT NULL,
    "category" VARCHAR(10) NOT NULL,
    "stock_available" INTEGER NOT NULL,
    "photo_url" VARCHAR(300) NOT NULL,
    "productcategoryid" INTEGER NOT NULL,

    CONSTRAINT "product_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "backup_method" (
    "id" SERIAL NOT NULL,
    "daily_backups" INTEGER NOT NULL DEFAULT 30,
    "monthly_backups" INTEGER NOT NULL DEFAULT 4,
    "yearly_backups" INTEGER NOT NULL DEFAULT 3,
    "backup_time" INTEGER NOT NULL DEFAULT 1,
    "backup_email" VARCHAR(70) NOT NULL,

    CONSTRAINT "backup_method_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "backup_file" (
    "id" SERIAL NOT NULL,
    "category" "backupCategory" NOT NULL,
    "time_stamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_by" VARCHAR(50) NOT NULL DEFAULT 'SYSTEM',
    "file_url" VARCHAR(300) NOT NULL,
    "admininfoid" INTEGER,

    CONSTRAINT "backup_file_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_info_email_key" ON "user_info"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_info_phone_num_key" ON "user_info"("phone_num");

-- CreateIndex
CREATE UNIQUE INDEX "admin_info_userinfoid_key" ON "admin_info"("userinfoid");

-- CreateIndex
CREATE UNIQUE INDEX "employee_info_userinfoid_key" ON "employee_info"("userinfoid");

-- CreateIndex
CREATE UNIQUE INDEX "client_info_phone_num_key" ON "client_info"("phone_num");

-- CreateIndex
CREATE UNIQUE INDEX "product_info_product_id_key" ON "product_info"("product_id");

-- AddForeignKey
ALTER TABLE "admin_info" ADD CONSTRAINT "admin_info_userinfoid_fkey" FOREIGN KEY ("userinfoid") REFERENCES "user_info"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_info" ADD CONSTRAINT "employee_info_userinfoid_fkey" FOREIGN KEY ("userinfoid") REFERENCES "user_info"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "additional_phone_nums" ADD CONSTRAINT "additional_phone_nums_userinfoid_fkey" FOREIGN KEY ("userinfoid") REFERENCES "user_info"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "additional_phone_nums" ADD CONSTRAINT "additional_phone_nums_clientinfoid_fkey" FOREIGN KEY ("clientinfoid") REFERENCES "client_info"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "file" ADD CONSTRAINT "file_userinfoid_fkey" FOREIGN KEY ("userinfoid") REFERENCES "user_info"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "file" ADD CONSTRAINT "file_clientinfoid_fkey" FOREIGN KEY ("clientinfoid") REFERENCES "client_info"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_info" ADD CONSTRAINT "client_info_admininfoid_fkey" FOREIGN KEY ("admininfoid") REFERENCES "admin_info"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_info" ADD CONSTRAINT "client_info_employeeinfoid_fkey" FOREIGN KEY ("employeeinfoid") REFERENCES "employee_info"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "new_invoice" ADD CONSTRAINT "new_invoice_clientinfoid_fkey" FOREIGN KEY ("clientinfoid") REFERENCES "client_info"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_info" ADD CONSTRAINT "product_info_productcategoryid_fkey" FOREIGN KEY ("productcategoryid") REFERENCES "product_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "backup_file" ADD CONSTRAINT "backup_file_admininfoid_fkey" FOREIGN KEY ("admininfoid") REFERENCES "admin_info"("id") ON DELETE SET NULL ON UPDATE CASCADE;
