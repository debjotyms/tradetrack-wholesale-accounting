"use client";
import CustomLabeledInput from "@/components/others/custom-labeled-input";
import CustomLabeledInputBig from "@/components/others/custom-labeled-input-big";
import PictureFrameAdmin from "@/components/others/picture-frame-admin";
import {AddMorePhoneNumbersPopupTwoButton} from "@/components/popups/add-more-phone-numbers-popup-two-button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import React, {useEffect, useState} from "react";
import {FileDataTable} from "@/app/admin-profile/file-data-table";
import {fileColumns} from "@/app/admin-profile/file-columns";
import fileData from "@/data/files.json";
import {Button} from "@/components/ui/button";
import {LucideSave, LucideX, Undo} from "lucide-react";
import {api_with_token, api_without_token} from "@/lib/api-requests";


// imported by atik

//import React from "react";
//import {StockDataTable} from "./stock-data-table";
//import {stockColumns} from "./stock-columns";
//import stockData from "@/data/bank-accounts.json";
import stockData from "@/data/statements.json";

import {StockDataTable} from "@/app/banks/bankName/bankTransaction/transaction-data-table";

import {suppliersColumns} from "@/app/banks/bankName/bankTransaction/transaction-columns";


const AdminProfilePage = () => {
  // const [userData, setUserData] = useState({
  //   name: "",
  //   email: "",
  //   district: "",
  //   subdistrict: "",
  //   address: "",
  //   role: "",
  //   phone_num: "",
  //   additional_phone_nums: {},
  // });
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await api_with_token.post("/user/userinfo");
  //       const data = response.data;
  //       setUserData({
  //         name: data.name,
  //         email: data.email,
  //         district: data.district,
  //         subdistrict: data.subdistrict,
  //         address: data.address,
  //         role: data.role,
  //         phone_num: data.phone_num,
  //         additional_phone_nums: data.additional_phone_nums,
  //       });
  //       setLoading(false);
  //     } catch (err: any) {
  //       const errorMessage =
  //         err.response && err.response.data && typeof err.response.data.message === "string"
  //           ? err.response.data.message
  //           : "An error occurred";
  //       setError(errorMessage);
  //       setLoading(false);
  //     }
  //   };
  //   fetchUserData();
  // }, []);

  // if (loading)
  //   return (
  //     <div>
  //       <button type="button" className="bg-indigo-500 ms-4 text-white px-4 py-2 rounded flex items-center" disabled>
  //         <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
  //           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
  //           <path
  //             className="opacity-75"
  //             fill="currentColor"
  //             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  //         </svg>
  //         Processing...
  //       </button>
  //     </div>
  //   );

  // if (error) return <div>Error: {error}</div>;

  // const data = fileData;
  const data = stockData;
  return (
    <div>
      <div className="flex items-start gap-4 bg-secondary p-3 rounded-lg mx-4">
        <div>
          <PictureFrameAdmin />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex flex-col">
              <h2 className="text-base font-semibold">{"userData.name"}</h2>
              <span className="py-1 text-xs text-white bg-teal-600 rounded-full inline-block text-center w-auto">
                " "
              </span>
            </div>
          </div>
          <div className="space-y-2 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4">
            <div className="text-gray-700">
              <span className="font-semibold text-sm">Contact:</span>
              <div className="space-y-1 text-xs">
                <div>
                  <span className="text-gray-600 font-semibold">Email: </span>
                  <a href={`mailto:${"userData.email"}`} className="text-blue-600 hover:underline">
                    {"userData.email"}
                  </a>
                </div>
                <div>
                  <span className="text-gray-600 font-semibold">Phone: </span>
                  <span>{"userData.phone_num"}</span>
                </div>
              </div>
            </div>
            {/* <div className="text-gray-700">
              <span className="font-semibold text-sm">Address:</span>
              <div className="space-y-1 text-xs">
                <div>
                  <span className="text-gray-600 font-semibold">District: </span>
                  <span>{"userData.district"}</span>
                </div>
                <div>
                  <span className="text-gray-600 font-semibold">Subdistrict: </span>
                  <span>{"userData.subdistrict"}</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="mt-2">
        <Tabs defaultValue="transaction" className="w-full px-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="transaction">Transaction</TabsTrigger>
            <TabsTrigger value="files">Files</TabsTrigger>
          </TabsList>
          <TabsContent value="transaction">
     <div className="px-4">
       <div className="border-2 border-secondary h-full w-full rounded-xl grid grid-cols-1 gap-3">
         <div className="h-full w-full rounded-xl p-3 py-0 overflow-x-auto">
           <StockDataTable columns={suppliersColumns} data={data} /> {/* TODO add a + button beside every stocks colum ite */}
         </div>
       </div>
     </div>
          </TabsContent>
          {/* <TabsContent value="files">
            <div>
              <div className="border-2 border-secondary h-full w-full rounded-xl grid grid-cols-1 gap-3">
                <div className="h-full w-full rounded-xl p-3 py-0 overflow-x-auto">

                </div>
              </div>
            </div>
          </TabsContent> */}
        </Tabs>
      </div>

    </div>
  );
};

export default AdminProfilePage;
