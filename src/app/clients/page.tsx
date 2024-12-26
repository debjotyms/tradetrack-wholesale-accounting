import CustomLabeledInput from "@/components/others/custom-labeled-input";
// import {Button} from "@/components/ui/button";
// import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
// import {Input} from "@/components/ui/input";
// import {Label} from "@/components/ui/label";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {NewInvProduct, newInvcolumns} from "./new-invoices-columns";
import {NewInvoicesDataTable} from "./new-invoices-data-table";
import {AddMorePhoneNumbersPopupButton} from "@/components/popups/add-more-phone-numbers-popup-button";
import AddButton from "@/components/buttons/add-button";
// import {AddCategoryPopupButton} from "@/components/popups/add-category-popup-button";
import {ClientData, clientListColumns} from "./clients-list-columns";
import {ClientsListDataTable} from "./clients-list-data-table";
import newInvProducts from "@/data/new-inv-products.json";
import clientDataJson from "@/data/client-data.json";

async function getData(): Promise<NewInvProduct[]> {
  return newInvProducts;
}

async function getClientData(): Promise<ClientData[]> {
  return clientDataJson;
}

export default async function ClientPage() {
  const data = await getData();
  const clientData = await getClientData();
  const userData = {
    name: "Bill Gates",
    email: "user1@domain.com",
    district: "Jhenaidah",
    subdistrict: "Jhenaidah Sadar",
    address: "Kocatolar mor, Adarshopara",
    role: "Admin",
    phone_num: "01785060088",
    additional_phone_nums: {
      Brother: "01685060099",
      Father: "01798889966",
    },
  };

  const productData = {
    productId: "12345",
    company: "Akij Cement",
    category: "Cement",
    modelNo: "TC-1000",
    quantity: "50",
    unitPrice: "299.99",
  };

  const totalCostsData = {
    subtotal: "1000.00",
    discount: "50.00",
    vat: "150.00",
    grandTotal: "1100.00",
    previousDue: "200.00",
    paid: "900.00",
    totalDue: "400.00",
  };

  return (
    <div className="min-h-screen flex justify-center">
      <Tabs defaultValue="new-invoice" className="w-full px-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="new-invoice">New Invoice</TabsTrigger>
          <TabsTrigger value="clients-list">Clients' List</TabsTrigger>
          <TabsTrigger value="invoice-list">Invoices List</TabsTrigger>
        </TabsList>
        <TabsContent value="new-invoice">
          <div className="border-2 border-secondary h-full w-full rounded-xl p-3 grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="flex flex-col gap-2">
              <div className="text-[#6B7280] text-sm">Clients information</div> {/* 1 1 */}
              <CustomLabeledInput label={"Phone no"} labelBasis={""} inputBasis={""} value={userData.phone_num}></CustomLabeledInput> {/* 1 2 */}
              <CustomLabeledInput label={"Name"} labelBasis={""} inputBasis={""} value={userData.name}></CustomLabeledInput> {/* 2 2 */}
              <CustomLabeledInput label={"District"} labelBasis={""} inputBasis={""} value={userData.district}></CustomLabeledInput> {/* 3 2 */}
              <CustomLabeledInput label={"Sub-district"} labelBasis={""} inputBasis={""} value={userData.subdistrict}></CustomLabeledInput>{" "}
              <CustomLabeledInput label={"Address"} labelBasis={""} inputBasis={""} value={userData.address}></CustomLabeledInput> {/* 2 3 */}
              <CustomLabeledInput label={"Invoice ID"} labelBasis={""} inputBasis={""} value="231"></CustomLabeledInput> {/* 3 3 */}
              <AddMorePhoneNumbersPopupButton /> {/* 1 7 */}
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[#6B7280] text-sm">Products</div> {/* 2 1 */}
              <CustomLabeledInput label={"Product ID"} labelBasis={""} inputBasis={""} value={productData.productId}></CustomLabeledInput> {/* 1 4 */}
              <CustomLabeledInput label={"Company"} labelBasis={""} inputBasis={""} value={productData.company}></CustomLabeledInput> {/* 2 4 */}
              <CustomLabeledInput label={"Category"} labelBasis={""} inputBasis={""} value={productData.category}></CustomLabeledInput> {/* 3 4 */}
              <CustomLabeledInput label={"Model No"} labelBasis={""} inputBasis={""} value={productData.modelNo}></CustomLabeledInput> {/* 1 5 */}
              <CustomLabeledInput label={"Quantity"} labelBasis={""} inputBasis={""} value={productData.quantity}></CustomLabeledInput> {/* 2 5 */}
              <CustomLabeledInput label={"Unit Price"} labelBasis={""} inputBasis={""} value={productData.unitPrice}></CustomLabeledInput> {/* 3 5 */}
              <AddButton text={"Add Product"} className="w-full bg-blue-600 h-10" /> {/* 2 7 */}
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[#6B7280] text-sm">Total Costs</div>
              <CustomLabeledInput label={"Subtotal"} labelBasis={""} inputBasis={""} value={totalCostsData.subtotal}></CustomLabeledInput>
              <CustomLabeledInput label={"Discount"} labelBasis={""} inputBasis={""} value={totalCostsData.discount}></CustomLabeledInput>
              <CustomLabeledInput label={"Vat"} labelBasis={""} inputBasis={""} value={totalCostsData.vat}></CustomLabeledInput>
              <CustomLabeledInput label={"Grand Total"} labelBasis={""} inputBasis={""} value={totalCostsData.grandTotal}></CustomLabeledInput>
              <CustomLabeledInput label={"Previous Due"} labelBasis={""} inputBasis={""} value={totalCostsData.previousDue}></CustomLabeledInput>
              <CustomLabeledInput label={"Paid"} labelBasis={""} inputBasis={""} value={totalCostsData.paid}></CustomLabeledInput>
              <CustomLabeledInput label={"Total Due"} labelBasis={""} inputBasis={""} value={totalCostsData.totalDue}></CustomLabeledInput>
            </div>
          </div>
          <div className="border-2 border-secondary h-full w-full rounded-xl mt-2 grid grid-cols-1 gap-3">
            <div className="h-full w-full rounded-xl p-3 py-0">
              <NewInvoicesDataTable columns={newInvcolumns} data={data} />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="clients-list">
          <div className="border-2 border-secondary h-full w-full rounded-xl mt-2 grid grid-cols-1 gap-3">
            <div className="h-full w-full rounded-xl p-3 py-0">
              <ClientsListDataTable columns={clientListColumns} data={clientData} />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="invoice-list">
          <div className="h-[500px] w-full bg-secondary rounded-md p-4"></div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
