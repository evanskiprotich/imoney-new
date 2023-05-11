import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TransactionService from "../services/TransactionService";

import "./css/CreateTransaction.css";

const CreateTransaction = () => {
  const [transaction, setTransaction] = useState({
    senderName: "",
    accountNumber: "",
    amount: 0,
    merchant: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;

    setTransaction({ ...transaction, [e.target.name]: value });
  };

  const saveTransaction = (e) => {
    e.preventDefault();
    TransactionService.saveTransaction(transaction)
      .then((response) => {
        navigate("/");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setTransaction({
      senderName: "",
      accountNumber: "",
      amount: 0,
      merchant: "",
    });
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Create Transaction</h1>
      <div className="max-w-3xl mx-auto bg-white rounded-md shadow-md p-8">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="senderName"
              className="block text-gray-600 font-semibold mb-2"
            >
              Sender's Name
            </label>
            <input
              id="senderName"
              type="text"
              name="senderName"
              value={transaction.senderName}
              onChange={(e) => handleChange(e)}
              className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="accountNumber"
              className="block text-gray-600 font-semibold mb-2"
            >
              Account Number
            </label>
            <input
              id="accountNumber"
              type="text"
              name="accountNumber"
              value={transaction.accountNumber}
              onChange={(e) => handleChange(e)}
              className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <label
              htmlFor="amount"
              className="block text-gray-600 font-semibold mb-2"
            >
              Amount
            </label>
            <input
              id="amount"
              type="number"
              name="amount"
              value={transaction.amount}
              onChange={(e) => handleChange(e)}
              className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="merchant"
              className="block text-gray-600 font-semibold mb-2"
            >
              Merchant
            </label>
            <select
              id="merchant"
              name="merchant"
              value={transaction.merchant}
              onChange={(e) => handleChange(e)}
              className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Merchant</option>
              <option value="Paypal">Paypal</option>
              <option value="Safaricom">Safaricom</option>
              <option value="KCB">KCB</option>
              <option value="Airtel">Airtel</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <button
            className="px-6 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold mr-2"
            onClick={saveTransaction}
          >
            Save
          </button>
          <button
            className="px-6 py-2 rounded-md bg-gray-500 hover:bg-gray-600 text-white font-semibold"
            onClick={reset}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateTransaction;
