import React from 'react';

const BalancePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">10 October, 2024</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Client Balance</h2>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">₹ 0.00</span>
            <div>
              <p className="text-gray-400">Credit: ₹ 10,000</p>
              <p className="text-gray-400">Debit: ₹ 10,000</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Stakeholder Balance</h2>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">₹ 0.00</span>
            <div>
              <p className="text-gray-400">Credit: ₹ 10,000</p>
              <p className="text-gray-400">Debit: ₹ 10,000</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Supplier Balance</h2>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">₹ 0.00</span>
            <div>
              <p className="text-gray-400">Credit: ₹ 10,000</p>
              <p className="text-gray-400">Debit: ₹ 10,000</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Bank Balance</h2>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">₹ 0.00</span>
            <div>
              <p className="text-gray-400">Credit: ₹ 10,000</p>
              <p className="text-gray-400">Debit: ₹ 10,000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg mt-8 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Total Balance</h2>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">₹ 0.00</span>
          <div>
            <p className="text-gray-400">Credit: ₹ 10,000</p>
            <p className="text-gray-400">Debit: ₹ 10,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalancePage;