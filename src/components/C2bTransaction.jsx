import React from "react";

const C2bTransaction = ({ c2bTransaction }) => {
  return (
    <tr key={c2bTransaction.c2bId} className="border-b border-gray-200">
      <td className="py-2 px-4">{c2bTransaction.senderName}</td>
      <td className="py-2 px-4">{c2bTransaction.merchant}</td>
      <td className="py-2 px-4">{c2bTransaction.receiverAccountNumber}</td>
      <td className="py-2 px-4">{c2bTransaction.amount}</td>
    </tr>
  );
};

export default C2bTransaction;
