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
  const dataB = {
    districts: ["Jhenaidah", "Dhaka", "Khulna", "Magura"],
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
            <div className="text-[#6B7280] text-sm">Clients information</div> {/* 1 1 */}
            <div className="text-[#6B7280] text-sm">Products</div> {/* 2 1 */}
            <div className="text-[#6B7280] text-sm">Total Costs</div> {/* 3 1 */}
            <CustomLabeledInput label={"Name"} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 1 2 */}
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 2 2 */}
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 3 2 */}
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 1 3 */}
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 2 3 */}
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 3 3 */}
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 1 4 */}
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 2 4 */}
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 3 4 */}
            <CustomLabeledInput label={"Address"} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 1 5 */}
            <CustomLabeledInput label={"Quantity"} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 2 5 */}
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 3 5 */}
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 1 6 */}
            <CustomLabeledInput label={"Unit Price"} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 2 6 */}
            <CustomLabeledInput label={"Paid"} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 3 6 */}
            <AddMorePhoneNumbersPopupButton /> {/* 1 7 */}
            <AddButton text={"Add Product"} className="w-full bg-blue-600 h-10" /> {/* 2 7 */}
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 3 7 */}
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
