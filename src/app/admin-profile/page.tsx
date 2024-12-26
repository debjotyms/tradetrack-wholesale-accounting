"use client";
import CustomLabeledInput from "@/components/others/custom-labeled-input";
import CustomLabeledInputBig from "@/components/others/custom-labeled-input-big";
import PictureFrame from "@/components/others/picture-frame";
import PictureFrameAdmin from "@/components/others/picture-frame-admin";
import {AddMorePhoneNumbersPopupTwoButton} from "@/components/popups/add-more-phone-numbers-popup-two-button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import React from "react";
import {FileDataTable} from "@/app/admin-profile/file-data-table";
import {fileColumns} from "@/app/admin-profile/file-columns";
import fileData from "@/data/files.json";
import {Button} from "@/components/ui/button";
import {LucideSave, LucideX} from "lucide-react";
import {Undo} from "lucide-react";
import {useEffect, useState} from "react";

const AdminProfilePage = () => {
  const data = fileData;
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

  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:6969/user/userinfo", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           phone_num: "01684000111",
  //           email: "user100@domain.com",
  //         }),
  //       });
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok " + response.statusText);
  //       }
  //       o
  //       const data = await response.json();
  //       setUserData(data);
  //     } catch (error) {
  //       console.log("Error fetching user data:", error);
  //       // Optionally set an error state to display an error message to the user
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  // console.log(userData);
  // if (!userData) {
  //   return <div>Loading hoitese...</div>;
  // }

  return (
    <div>
      <div className="flex items-start gap-4 bg-secondary p-3 rounded-lg mx-4">
        {/* Profile Image */}
        <div className="">
          <PictureFrameAdmin />
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Name and Badge */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex flex-col">
              <h2 className="text-base font-semibold">{userData.name}</h2>
              <span className=" py-1 text-xs text-white bg-teal-600 rounded-full inline-block text-center w-auto">
                {userData.role}
              </span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-2 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4">
            <div className="text-gray-700">
              <span className="font-semibold text-sm">Contact:</span>
              <div className="space-y-1 text-xs">
                <div>
                  <span className="text-gray-600 font-semibold">Email: </span>
                  <a href="mailto:example@gmail.com" className="text-blue-600 hover:underline">
                    {userData.email}
                  </a>
                </div>
                <div>
                  <span className="text-gray-600 font-semibold">Phone: </span>
                  <span>{userData.phone_num}</span>
                </div>
              </div>
            </div>

            {/* Address Details */}
            <div className="text-gray-700">
              <span className="font-semibold text-sm">Address:</span>
              <div className="space-y-1 text-xs">
                <div>
                  <span className="text-gray-600 font-semibold">District: </span>
                  <span>{userData.district}</span>
                </div>
                <div>
                  <span className="text-gray-600 font-semibold">Subdistrict: </span>
                  <span>{userData.subdistrict}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <Tabs defaultValue="profile-information" className="w-full px-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="profile-information">Profile Information</TabsTrigger>
            <TabsTrigger value="files">Files</TabsTrigger>
          </TabsList>
          <TabsContent value="profile-information">
            <div className="mt-2">
              <div className="border-2 border-secondary h-full w-full rounded-xl p-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[#6B7280] text-sm">Basic Info</div>
                    <CustomLabeledInput
                      label={"Name"}
                      labelBasis={""}
                      inputBasis={""}
                      value={userData.name}></CustomLabeledInput>
                    <CustomLabeledInput
                      label={"Email"}
                      labelBasis={""}
                      inputBasis={""}
                      value={userData.email}></CustomLabeledInput>
                    <CustomLabeledInput
                      label={"Password"}
                      labelBasis={""}
                      inputBasis={""}
                      value={""}></CustomLabeledInput>
                  </div>
                  <div className="flex mt-6 flex-col gap-2">
                    <div className="text-[#6B7280] text-sm">Phone Numbers</div>
                    <CustomLabeledInput
                      label={"Main phone"}
                      labelBasis={""}
                      inputBasis={""}
                      value={userData.phone_num}></CustomLabeledInput>
                    <CustomLabeledInput
                      label={"Brother's phone"}
                      labelBasis={""}
                      inputBasis={""}
                      value={userData.additional_phone_nums["Brother"]}></CustomLabeledInput>
                    <AddMorePhoneNumbersPopupTwoButton />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-[#6B7280] text-sm">Address</div>
                  <CustomLabeledInput
                    label={"District"}
                    labelBasis={""}
                    inputBasis={""}
                    value={userData.district}></CustomLabeledInput>
                  <CustomLabeledInput
                    label={"Sub-district "}
                    labelBasis={""}
                    inputBasis={""}
                    value={userData.subdistrict}></CustomLabeledInput>
                  <CustomLabeledInputBig
                    label={"Address"}
                    labelBasis={""}
                    inputBasis={""}
                    value={userData.address}></CustomLabeledInputBig>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="files">
            <div className="">
              <div className="border-2 border-secondary h-full w-full rounded-xl grid grid-cols-1 gap-3">
                <div className="h-full w-full rounded-xl p-3 py-0 overflow-x-auto">
                  <FileDataTable columns={fileColumns} data={data} />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="me-4">
        <div className="flex justify-end space-x-2 py-4">
          <Button className="bg-yellow-500 text-white px-3 py-1">
            <Undo className="" />
            Undo
          </Button>
          <Button className="bg-blue-500 text-white px-3 py-1">
            <LucideSave className="" />
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfilePage;
