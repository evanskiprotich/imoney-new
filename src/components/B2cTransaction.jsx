import React from "react";

const B2cTransaction = ({ b2cTransaction }) => {
  console.log(b2cTransaction.b2cId);

  return (
    <tr key={b2cTransaction.b2cId} className="border-b border-gray-200">
      <td className="py-2 px-4">{b2cTransaction.senderAccount}</td>
      <td className="py-2 px-4">{b2cTransaction.merchant}</td>
      <td className="py-2 px-4">{b2cTransaction.amount}</td>
      <td className="py-2 px-4">{b2cTransaction.partyB}</td>
      <td className="py-2 px-4">{b2cTransaction.occassion}</td>
    </tr>
  );
};

export default B2cTransaction;
