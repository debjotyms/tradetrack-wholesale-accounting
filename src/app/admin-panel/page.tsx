"use client";

import React from "react";
import { UserDataTable } from "./user-data-table";
import { userColumns } from "./user-columns";
import userData from "@/data/user-data.json";

const UsersPage = () => {
  const data = userData;
  return (
    <div className="px-4">
      <div className="border-2 border-secondary h-full w-full rounded-xl grid grid-cols-1 gap-3">
        <div className="h-full w-full rounded-xl p-3 py-0 overflow-x-auto">
          <UserDataTable columns={userColumns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
