import React from "react";

const Transaction = ({ transaction }) => {
  return (
    
    <tr
      key={transaction.transactionId}
      className="border-b border-gray-200 hover:bg-gray-100"
    >
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span className="font-medium">{transaction.senderName}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <span className="font-medium">{transaction.accountNumber}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <span className="font-medium">{transaction.amount}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
          {transaction.merchant}
        </span>
      </td>
    </tr>
  );
};


export default Transaction;
