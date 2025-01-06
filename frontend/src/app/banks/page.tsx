"use client";

import React, { useState, useEffect } from "react";
import { StockDataTable } from "./banks-data-table";
import { stockColumns } from "./banks-columns";
import { api_with_token } from "@/lib/api-requests";

// Import Shadcn UI components
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const StocksPage = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State for form inputs
  const [bankName, setBankName] = useState("");
  const [hotline, setHotline] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [branchname, setBranchName] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);

  // State to control the modal visibility
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api_with_token.post("/bank/list");
        const mapped = response.data.list.map((bank: any) => ({
          id: bank.id,
          bankName: bank.bankName,
          hotline: bank.hotline,
          website: bank.website,
          photoURL: bank.photoURL,
          branchname: bank.branchName,
        }));
        setData(mapped);
        setLoading(false);
      } catch (err: any) {
        setError(err.response ? err.response.data : "An error occurred");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError(null);
    setFormSuccess(null);

    try {
      const requestBody = {
        bank_name: bankName,
        hotline: hotline,
        website_link: websiteLink,
        branch_name: branchname  // added
      };

      const response = await api_with_token.post("/bank/add", requestBody);

      const newBank = response.data;

      setData((prevData) => [
        ...prevData,
        {
          id: newBank.id,
          bankName: newBank.bankName,
          hotline: newBank.hotline,
          website: newBank.website,
          photoURL: newBank.photoURL,
          branchname: newBank.branchname,
        },
      ]);

      setFormSuccess("Bank added successfully!");
      setBankName("");
      setHotline("");
      setWebsiteLink("");
      setIsOpen(false);
    } catch (err: any) {
      setFormError(err.response ? err.response.data : "An error occurred");
    } finally {
      setFormLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">Error: {error}</div>;

  return (
    <div className="px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Bank Page</h1>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="primary">Add New Bank</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Add New Bank</DialogTitle>
              <DialogDescription>Fill in the details below to add a new bank.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="bankName">Bank Name</Label>
                <Input
                  type="text"
                  id="bankName"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="hotline">Hotline</Label>
                <Input
                  type="text"
                  id="hotline"
                  value={hotline}
                  onChange={(e) => setHotline(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="websiteLink">Website Link</Label>
                <Input
                  type="url"
                  id="websiteLink"
                  value={websiteLink}
                  onChange={(e) => setWebsiteLink(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="branchname">Branch</Label>
                <Input
                  type="text"
                  id="branchname"
                  value={branchname}
                  onChange={(e) => setBranchName(e.target.value)}
                  required
                />
              </div> 
              {formError && <div className="text-red-600">{formError}</div>}
              <DialogFooter>
                <Button type="submit" disabled={formLoading}>
                  {formLoading ? "Submitting..." : "Add Bank"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="border-2 border-secondary h-full w-full rounded-xl grid grid-cols-1 gap-3">
        <div className="h-full w-full rounded-xl p-3 py-0 overflow-x-auto">
          <StockDataTable columns={stockColumns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default StocksPage;