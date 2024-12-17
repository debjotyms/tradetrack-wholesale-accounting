import CustomLabeledInput from "@/components/others/custom-labeled-input";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

export default function ClientPage() {
  return (
    <div className="min-h-screen flex justify-center p-4">
      <Tabs defaultValue="new-invoice" className="w-full px-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="new-invoice">New Invoice</TabsTrigger>
          <TabsTrigger value="clients-list">Clients' List</TabsTrigger>
          <TabsTrigger value="invoice-list">Invoices List</TabsTrigger>
        </TabsList>
        <TabsContent value="new-invoice">
          <div className="border-2 border-secondary h-full w-full rounded-xl p-3 grid grid-cols-1 md:grid-cols-3 gap-3">
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput>
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput>
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput>
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput>
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput>
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput>
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput>
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput>
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput>
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput>
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput>
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput>
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput>
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput>
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput>
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput>
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput>
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput>
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput>
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput>
            <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput>
          </div>
          <div className="border-2 border-secondary h-full w-full rounded-xl p-3 grid grid-cols-1 md:grid-cols-3 gap-3">
            
          </div>
        </TabsContent>
        <TabsContent value="clients-list">
          <div className="h-full w-full bg-secondary rounded-md p-4">
            <h2 className="text-xl font-bold">Clients' List</h2>
            <p>Here is a list of all clients.</p>
            {/* Add more content here */}
          </div>
        </TabsContent>
        <TabsContent value="invoice-list">
          <div className="h-full w-full bg-secondary rounded-md p-4">
            <h2 className="text-xl font-bold">Invoices List</h2>
            <p>Here is a list of all invoices.</p>
            {/* Add more content here */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
