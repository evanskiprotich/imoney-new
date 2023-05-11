import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Main.css";

const Main = () => {
  const [transaction, setTransaction] = useState({
    accountNumber: "",
    merchant: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setTransaction({ ...transaction, [e.target.name]: value });
  };

  const navigate = useNavigate();

  const viewTransactions = (e) => {
    e.preventDefault();
    navigate(
      `/getTransaction/${transaction.merchant}/${transaction.accountNumber}`
    );
  };

  const reset = (e) => {
    e.preventDefault();
    setTransaction({
      accountNumber: "",
      merchant: "",
    });
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">Imoney</h1>
      <div className="flex items-center space-x-4 mb-4 mx-8">
        <input
          type="text"
          name="accountNumber"
          value={transaction.accountNumber}
          onChange={(e) => handleChange(e)}
          placeholder="Enter account number"
          className="rounded-l-md py-2 px-4 border border-gray-300 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          className="rounded-r-md py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => handleChange(e)}
          name="merchant"
          id="search-choice"
          value={transaction.merchant}
        >
          <option value="">Select Merchant</option>
          <option value="Paypal">Paypal</option>
          <option value="Safaricom">Safaricom</option>
          <option value="KCB">KCB</option>
          <option value="Airtel">Airtel</option>
        </select>
        <button
          className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          id="search-btn"
          onClick={viewTransactions}
        >
          Search
        </button>
        <button
          className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
          onClick={reset}
        >
          Clear
        </button>
      </div>
      <div className="search-option">
        <button
          className="bg-green-500 text-white rounded-md py-2 px-4 font-semibold hover:bg-green-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
          id="search-btn"
          onClick={() => navigate("/createTransaction")}
        >
          Make a Transaction
        </button>
      </div>
    </>
  );
};

export default Main;
