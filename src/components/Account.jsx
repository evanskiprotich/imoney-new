import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getAccountById } from "../services/AccountService";

function Account() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    accountId: id,
    firstName: "",
    lastName: "",
    balance: 0,
    phoneNumber: "",
    birthDate: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAccountById(account.accountId);
        setAccount(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Account Details</h1>
      <ul className="list-disc ml-8">
        <li className="mb-2">
          <span className="font-bold">First Name:</span> {account.firstName}
        </li>
        <li className="mb-2">
          <span className="font-bold">Last Name:</span> {account.lastName}
        </li>
        <li className="mb-2">
          <span className="font-bold">Balance:</span> {account.balance}
        </li>
        <li className="mb-2">
          <span className="font-bold">Phone number:</span> {account.phoneNumber}
        </li>
        <li className="mb-2">
          <span className="font-bold">Birth Date:</span>{" "}
          {new Date(account.birthDate).toLocaleDateString()}
        </li>
      </ul>
    </div>
  );
}

export default Account;
