import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { saveAccount } from '../services/AccountService';

const Accounts = () => {
  const navigate = useNavigate();

  const [searchAccount, setSearchAccount] = useState({
    id: 0,
  });

  const handleSearchChange = (e) => {
    const value = e.target.value;

    setSearchAccount({ ...searchAccount, [e.target.name]: value });
  };

  const [account, setAccount] = useState({
    firstName: "",
    lastName: "",
    balance: 0,
    phoneNumber: "",
    birthDate: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setAccount({ ...account, [e.target.name]: value });
  };

  const saveAnAccount = (e) => {
    e.preventDefault();
    saveAccount(account)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const goToAccount = (e) => {
    e.preventDefault();
    navigate(`/account/${searchAccount.id}`);
  };

  const resetSearch = (e) => {
    e.preventDefault();
    setSearchAccount({
      id: 0,
    });
  };

  const reset = (e) => {
    e.preventDefault();
    setAccount({
      firstName: "",
      lastName: "",
      balance: 0,
      phoneNumber: "",
      birthDate: "",
    });
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Accounts</h1>
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          name="id"
          placeholder="Enter Account Number"
          value={searchAccount.id}
          onChange={(e) => handleSearchChange(e)}
          className="rounded-l-md py-2 px-4 border border-gray-300 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          className="bg-blue-500 text-white rounded-r-md py-2 px-4 hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          id="search-btn"
          onClick={goToAccount}
        >
          Search
        </button>
        <button
          className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
          onClick={resetSearch}
        >
          Clear
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-2">Create An Account</h2>
      <div className="space-y-2">
        <div className="flex items-center space-x-4">
          <label className="text-gray-600">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={account.firstName}
            onChange={(e) => handleChange(e)}
            className="rounded-md py-2 px-4 border border-gray-300 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        ...
        <div className="flex items-center space-x-4">
          <label className="text-gray-600">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={account.lastName}
            onChange={(e) => handleChange(e)}
            className="rounded-md py-2 px-4 border border-gray-300 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="text-gray-600">Phone Number:</label>
          <input
            type="number"
            name="phoneNumber"
            value={account.phoneNumber}
            onChange={(e) => handleChange(e)}
            className="rounded-md py-2 px-4 border border-gray-300 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="text-gray-600">Date of Birth:</label>
          <input
            type="date"
            name="birthDate"
            value={account.birthDate}
            onChange={(e) => handleChange(e)}
            className="rounded-md py-2 px-4 border border-gray-300 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={saveAnAccount}
          >
            Save
          </button>
          <button
            className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={reset}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default Accounts;

