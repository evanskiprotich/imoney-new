import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TransactionService from "../services/TransactionService";
import Transaction from "./Transaction";

const GetTransaction = () => {
  const { merchant, accountNumber } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await TransactionService.getTransaction(
          merchant,
          accountNumber
        );
        setTransactions(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [merchant, accountNumber]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Transactions
        </h1>
        <div className="form-div">
          <button
            className="mt-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
        <div className="flex flex-col mt-8">
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <table className="table-fixed w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="w-1/3 text-left py-3 px-4 font-semibold text-gray-700">
                    Sender Name
                  </th>
                  <th className="w-1/3 text-left py-3 px-4 font-semibold text-gray-700">
                    Account Number
                  </th>
                  <th className="w-1/3 text-left py-3 px-4 font-semibold text-gray-700">
                    Amount
                  </th>
                  <th className="w-1/3 text-left py-3 px-4 font-semibold text-gray-700">
                    Merchant
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <Transaction
                    transaction={transaction}
                    key={transaction.transactionId}
                  />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetTransaction;
