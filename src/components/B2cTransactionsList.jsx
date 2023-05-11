import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getb2cTransactionByAccountNumber } from "../services/B2CTransactionService";
import B2cTransaction from "./B2cTransaction";

function B2cTransactionsList() {
  const { accountNumber } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [b2cTransactions, setb2cTransactions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getb2cTransactionByAccountNumber(accountNumber);
        setb2cTransactions(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold">B2C Transactions</h1>
      <div className="flex items-center mb-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          onClick={() => navigate("/b2cTransactions")}
        >
          Back
        </button>
      </div>
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-100 border-b">Sender Account</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Merchant</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Amount</th>
            <th className="py-2 px-4 bg-gray-100 border-b">
              Receiver Phone Number
            </th>
            <th className="py-2 px-4 bg-gray-100 border-b">Occasion</th>
          </tr>
        </thead>
        {!loading && (
          <tbody>
            {b2cTransactions.map((b2cTransaction) => (
              <B2cTransaction
                b2cTransaction={b2cTransaction}
                key={b2cTransaction.b2cId}
              />
            ))}
          </tbody>
        )}
      </table>
    </>
  );
}

export default B2cTransactionsList;
