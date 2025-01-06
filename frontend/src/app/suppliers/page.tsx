"use client";

import React, {useEffect, useState} from "react";
import {StockDataTable} from "./suppliers-data-table";
import {suppliersColumns} from "./suppliers-columns";
import stockData from "@/data/stakeholders-category.json";
import { api_with_token } from "@/lib/api-requests";

const StocksPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api_with_token.post("/supplier/categorylist");
        const mapped = response.data.list.map((bank: any) => ({
          categoryName: bank.productCategory
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  // const data = stockData;
  return (
    <div className="px-4">
      <div className="border-2 border-secondary h-full w-full rounded-xl grid grid-cols-1 gap-3">
        <div className="h-full w-full rounded-xl p-3 py-0 overflow-x-auto">
          <StockDataTable columns={suppliersColumns} data={data} />{" "}
          {/* TODO add a + button beside every stocks colum ite */}
        </div>
      </div>
    </div>
  );
};

export default StocksPage;
