"use client";

import React from "react";
import {StockDataTable} from "./stock-data-table";
import {stockColumns} from "./stock-columns";
import stockData from "@/data/stocks.json";

const StocksPage = () => {
  const data = stockData;
  return (
    <div className="px-4">
      <div className="border-2 border-secondary h-full w-full rounded-xl grid grid-cols-1 gap-3">
        <div className="h-full w-full rounded-xl p-3 py-0 overflow-x-auto">
          <StockDataTable columns={stockColumns} data={data} /> {/* TODO add a + button beside every stocks colum ite */}
        </div>
      </div>
    </div>
  );
};

export default StocksPage;
