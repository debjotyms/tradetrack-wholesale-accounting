import BalanceCard from "@/components/others/balance-card";
import DateDisplay from "@/components/others/date-display";
import TotalBalanceCard from "@/components/others/total-balance-card";
import React from "react";
import {DatePickerWithRange} from "@/components/ui/date-picker-with-range";

const generateRandomValues = () => {
  const getRandomValue = (max: number) => (Math.random() * max).toFixed(2);

  return {
    totalBalance: {
      balance: parseFloat(getRandomValue(10000)),
      credit: parseFloat(getRandomValue(5000)),
      debit: parseFloat(getRandomValue(5000)),
    },
    clientBalance: {
      balance: parseFloat(getRandomValue(10000)),
      credit: parseFloat(getRandomValue(5000)),
      debit: parseFloat(getRandomValue(5000)),
    },
    stakeholderBalance: {
      balance: parseFloat(getRandomValue(10000)),
      credit: parseFloat(getRandomValue(5000)),
      debit: parseFloat(getRandomValue(5000)),
    },
    supplierBalance: {
      balance: parseFloat(getRandomValue(10000)),
      credit: parseFloat(getRandomValue(5000)),
      debit: parseFloat(getRandomValue(5000)),
    },
    bankBalance: {
      balance: parseFloat(getRandomValue(10000)),
      credit: parseFloat(getRandomValue(5000)),
      debit: parseFloat(getRandomValue(5000)),
    },
  };
};

const DashboardPage = () => {
  const values = generateRandomValues();

  return (
    <div className="mx-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <DateDisplay />
          {/* Tried to implement the DropdownMenu but the DatePickerWithRange doesn't work on the popup. */}
          {/* <DropdownMenu /> */}
          <div className="border border-gray-200 rounded-lg p-4">
            <DatePickerWithRange />
          </div>
        </div>
        <TotalBalanceCard
          balance={values.totalBalance.balance}
          credit={values.totalBalance.credit}
          debit={values.totalBalance.debit}
          title="Total Balance"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4">
        <BalanceCard
          balance={values.clientBalance.balance}
          credit={values.clientBalance.credit}
          debit={values.clientBalance.debit}
          title="Client Balance"
        />
        <BalanceCard
          balance={values.stakeholderBalance.balance}
          credit={values.stakeholderBalance.credit}
          debit={values.stakeholderBalance.debit}
          title="Stakeholder Balance"
        />
        <BalanceCard
          balance={values.supplierBalance.balance}
          credit={values.supplierBalance.credit}
          debit={values.supplierBalance.debit}
          title="Supplier Balance"
        />
        <BalanceCard
          balance={values.bankBalance.balance}
          credit={values.bankBalance.credit}
          debit={values.bankBalance.debit}
          title="Bank Balance"
        />
      </div>
    </div>
  );
};

export default DashboardPage;
