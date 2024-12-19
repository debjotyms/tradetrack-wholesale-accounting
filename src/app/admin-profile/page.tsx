import CustomLabeledInput from "@/components/others/custom-labeled-input";
import PictureFrame from "@/components/others/picture-frame";
import PictureFrameAdmin from "@/components/others/picture-frame-admin";
import React from "react";

const AdminProfilePage = () => {
  return (
    <div>
      <div className="flex items-start gap-4 bg-secondary p-4 rounded-lg mx-4">
        {/* Profile Image */}
        <div className="">
          <PictureFrameAdmin />
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Name and Badge */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex flex-col">
              <h2 className="text-base font-semibold">Aquib Azmain</h2>
              <span className=" py-1 text-xs text-white bg-teal-600 rounded-full inline-block text-center w-auto">
                Administrator
              </span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-2 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4">
            <div className="text-gray-700">
              <span className="font-semibold text-sm">Contact:</span>
              <div className="space-y-1 text-xs">
                <div>
                  <span className="text-gray-600">Email: </span>
                  <a href="mailto:example@gmail.com" className="text-blue-600 hover:underline">
                    example@gmail.com
                  </a>
                </div>
                <div>
                  <span className="text-gray-600">Phone: </span>
                  <span>+880 1722-222 222</span>
                </div>
              </div>
            </div>

            {/* Address Details */}
            <div className="text-gray-700">
              <span className="font-semibold text-sm">Address:</span>
              <div className="space-y-1 text-xs">
                <div>
                  <span className="text-gray-600">District: </span>
                  <span>Jhenaidah</span>
                </div>
                <div>
                  <span className="text-gray-600">Subdistrict: </span>
                  <span>Jhenaidah Sadar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 mt-2">
        <div className="border-2 border-secondary h-full w-full rounded-xl p-3 grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="text-[#6B7280] text-sm">Basic Info</div> {/* 1 1 */}
          <div className="text-[#6B7280] text-sm">Address</div> {/* 2 1 */}
          <CustomLabeledInput label={"Name"} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 1 2 */}
          <CustomLabeledInput label={"Email"} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 2 2 */}
          <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 3 2 */}
          <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 1 3 */}
          <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 2 3 */}
          <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 1 4 */}
          <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 2 4 */}
          <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 3 4 */}
          <CustomLabeledInput label={"Address"} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 1 5 */}
          <CustomLabeledInput label={"Quantity"} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 2 5 */}
          <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 3 5 */}
          <CustomLabeledInput label={""} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 1 6 */}
          <CustomLabeledInput label={"Unit Price"} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 2 6 */}
          <CustomLabeledInput label={"Paid"} labelBasis={""} inputBasis={""}></CustomLabeledInput> {/* 3 6 */}
        </div>
      </div>
    </div>
  );
};

export default AdminProfilePage;
