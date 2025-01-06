import React from 'react';

interface BalanceCardProps {
    balance: number;
    credit: number;
    debit: number;
    title: string;
}

const TotalBalanceCard: React.FC<BalanceCardProps> = ({ balance, credit, debit, title }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 w-full bg-black">
            <div className="flex justify-between items-center">
                <h2 className="text-xl text-white">{title}</h2>
                <h1 className="text-2xl text-white">৳ {balance}</h1>
            </div>
            <div className="mt-4 text-sm text-gray-400">
                <p>Credit: ৳ {credit}</p>
                <p>Debit: ৳ {debit}</p>
            </div>
        </div>
    );
};

export default TotalBalanceCard;