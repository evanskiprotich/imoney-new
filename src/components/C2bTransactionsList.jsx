import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getC2BTransactionByAccountNumber } from "../services/C2BTransactionService";
import C2bTransaction from "./C2bTransaction";

const C2bTransactionsList = () => {
  const { accountNumber } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [c2bTransactions, setc2bTransactions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getC2BTransactionByAccountNumber(accountNumber);
        setc2bTransactions(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold">C2B Transactions</h1>
      <div className="flex items-center mb-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          onClick={() => navigate("/c2bTransactions")}
        >
          Back
        </button>
      </div>
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-100 border-b">Sender Name</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Merchant</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Receiver Account</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Amount</th>
          </tr>
        </thead>
        {!loading && (
          <tbody>
            {c2bTransactions.map((c2bTransaction) => (
              <C2bTransaction
                c2bTransaction={c2bTransaction}
                key={c2bTransaction.c2bId}
              />
            ))}
          </tbody>
        )}
      </table>
    </>
  );
};

export default C2bTransactionsList;
