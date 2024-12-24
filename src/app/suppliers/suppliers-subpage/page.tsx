"use client";

import React from "react";
import {StockDataTable} from "./suppliers-subpage-data-table";
import {suppliersColumns} from "./suppliers-subpage-columns";
import stockData from "@/data/suppliers-subpage.json";

const StocksPage = () => {
  const data = stockData;
  return (
    <div className="px-4">
      <div className="border-2 border-secondary h-full w-full rounded-xl grid grid-cols-1 gap-3">
        <div className="h-full w-full rounded-xl p-3 py-0 overflow-x-auto">
          <StockDataTable columns={suppliersColumns} data={data} /> {/* TODO add a + button beside every stocks colum ite */}
        </div>
      </div>
    </div>
  );
};

export default StocksPage;
